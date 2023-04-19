import classNames from 'classnames/bind';
import cls from './article.module.scss';
import { MainLayout } from '@/layouts/MainLayout';
import { Title } from '@/UI/Title/Title';
import Image from 'next/image';
import { ActiveHeaderPage } from '@/components/header/Header';
import { NextPageContext } from 'next';
import { NewsService } from '@/services/News.service';
import { newsI } from '@/types/NewsTypes';

const cn = classNames.bind(cls);

export default function articlePage(props: newsI) {
  const { newssection_set: sections, title, description, thumbnail } = props;
  console.log('sections is: ', sections);

  return (
    <MainLayout activePage={ActiveHeaderPage.NEWS}>
      <div className={cn(cls.articlePage)}>
        <Title className={cls.articlePage_title}>Новости</Title>

        <div className={cls.articlePage_wrapper}>
          <div className={cls.articlePage_content}>
            <h3 className={cls.articlePage_artTitle}>{title}</h3>

            {sections.length === 0 && (
              <>
                <Image
                  src={thumbnail}
                  alt="image"
                  width={1146}
                  height={460}
                  className={cls.articlePage_imgEmpty}
                ></Image>
                <p className={cls.articlePage_text}>{description}</p>
              </>
            )}

            {sections.length > 0 &&
              // @ts-ignore
              sections.map(({ id, image, is_marked, text, image_text }) => (
                <section key={id}>
                  {image && (
                    <Image
                      className={cls.articlePage_img}
                      src={image}
                      width={1146}
                      height={460}
                      alt="image"
                    />
                  )}
                  <p>{image_text}</p>
                  <p className={cn(cls.articlePage_text, { marked: is_marked })}>{text}</p>
                </section>
              ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps(ctx: NextPageContext) {
  const { id } = ctx.query;
  const newsId = typeof id === 'string' ? id : Array.isArray(id) ? id[0] : '';
  const res = await NewsService().getNewsById(newsId);
  return {
    props: res,
  };
}
