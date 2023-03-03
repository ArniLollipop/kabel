import { FC, useState, useEffect } from "react";
import classNames from "classnames/bind";
import cls from "./article.module.scss";
import { MainLayout } from "@/layouts/MainLayout";
import { article } from "@/data/NewsData";
import { useRouter } from "next/router";
import { Title } from "@/UI/Title/Title";
import Image from "next/image";

const cn = classNames.bind(cls);

export default function articlePage() {
  //   const [article, setArticle] = useState<newsI>();
  //   const { query } = useRouter();
  //   const articleId = query.id;

  //   useEffect(() => {
  //     const article = articleId && news.filter((news) => news.id === +articleId);
  //     console.log(article);
  //     typeof article === "object" && setArticle(article[0]);
  //   }, [articleId]);

  return (
    <MainLayout>
      <div className={cn(cls.articlePage)}>
        <Title className={cls.articlePage_title}>Новости</Title>

        <div className={cls.articlePage_wrapper}>
          <div className={cls.articlePage_content}>
            <h3 className={cls.articlePage_artTitle}>{article.title}</h3>

            {article.newssection_set.map((sect) => (
              <section key={sect.id}>
                {sect.image && <img className={cls.articlePage_img} src={sect.image} alt="image" />}
                <p className={cn(cls.articlePage_text, { marked: sect.isMarked })}>{sect.text}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
