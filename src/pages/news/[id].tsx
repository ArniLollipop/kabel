import classNames from "classnames/bind";
import cls from "./article.module.scss";
import { MainLayout } from "@/layouts/MainLayout";
import { Title } from "@/UI/Title/Title";
import Image from "next/image";
import { ActiveHeaderPage } from "@/components/header/Header";
import { NextPageContext } from "next";
import { NewsService } from "@/services/News.service";
import { newsI } from "@/types/NewsTypes";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useHttp } from "@/hooks/useHttp";
import { useEffect, useState } from "react";

const cn = classNames.bind(cls);

export default function articlePage(id: any) {
  const router = useRouter();
  const { t } = useTranslation();
  const [news, setNews] = useState<any>();

  async function getNewsById() {
    try {
      const res = await useHttp().get(`news/news/${id.id}/`);
      setNews(res.data);
    } catch (err) {}
  }

  useEffect(() => {
    getNewsById();
    console.log(id);
  }, []);

  return (
    <MainLayout activePage={ActiveHeaderPage.NEWS}>
      <div className={cn(cls.articlePage)}>
        <Title className={cls.articlePage_title}>{t("list.news")}</Title>

        <div className={cls.articlePage_wrapper}>
          <div className={cls.articlePage_content}>
            <h3 className={cls.articlePage_artTitle}>{news?.title}</h3>

            {news?.newssection_set.length === 0 && (
              <>
                <Image
                  src={news.thumbnail}
                  alt="image"
                  width={1146}
                  height={460}
                  className={cls.articlePage_imgEmpty}
                ></Image>
                <p className={cls.articlePage_text}>{news?.description}</p>
              </>
            )}

            {news?.newssection_set.length > 0 &&
              news?.newssection_set?.map(
                ({ id, image, is_marked, text_site, image_text_site }: any) => (
                  <section key={id}>
                    {image && (
                      <Image
                        className={cls.articlePage_img}
                        src={image}
                        alt="image"
                        width={1146}
                        height={460}
                      />
                    )}
                    <div
                      className={cls.articlePage_img__text}
                      dangerouslySetInnerHTML={{ __html: image_text_site }}
                    ></div>
                    <div
                      className={cn(cls.articlePage_text, {
                        marked: is_marked,
                      })}
                      dangerouslySetInnerHTML={{ __html: text_site }}
                    ></div>
                  </section>
                )
              )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps(ctx: NextPageContext) {
  const { id } = ctx.query;
  return {
    props: { id },
  };
}
