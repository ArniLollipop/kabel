import Head from 'next/head';
import { MainLayout } from '@/layouts/MainLayout';
import classNames from 'classnames';
import { ServicesDetailsIcon } from '@/assets/icons';
import cls from '../components/services/Services.module.scss';
import Link from 'next/link';
import { ServicesLayout } from '@/layouts/ServicesLayout';
import { data } from '@/data/ServicesData';

let cn = classNames.bind(cls);

export default function Home() {
  const showArticles = data.map((article) => {
    const { articleId, title, desc, link, articleIcon: ArticleIcon } = article;

    return (
      <article key={articleId} className={cn(cls.ServicesArticleMainPage)}>
        <ArticleIcon textColor={'#00ABC2'} />
        <h2>{title}</h2>
        <p>{desc}</p>
        <Link href={`/services/${link}`}>
          Подробнее <ServicesDetailsIcon textColor={'#00ABC2'} />
        </Link>
      </article>
    );
  });

  return (
    <>
      <Head>
        <title>Сервисы</title>
        <meta name="description" content="ТОО Almaty Kazkabel | Сервисы" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Roboto:wght@400;500&display=swap"
        />
      </Head>
      <MainLayout>
        <ServicesLayout>
          <section className={cn(cls.container)}>{showArticles}</section>
        </ServicesLayout>
      </MainLayout>
    </>
  );
}
