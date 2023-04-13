// packages
import Head from "next/head";
import classNames from "classnames";
import Link from "next/link";

// components
import { MainLayout } from "@/layouts/MainLayout";

// assets
import cls from "../components/services/Services.module.scss";
import { ServicesDetailsIcon } from "@/assets/icons";
import { ServicesLayout } from "@/layouts/ServicesLayout";

// data
import { data } from "@/data/ServicesData";
import { ActiveHeaderPage } from "@/components/header/Header";

let cn = classNames.bind(cls);

export default function Home() {
  const showArticles = data.map((article) => {
    const { articleId, title, desc, link, articleIcon: ArticleIcon } = article;

    return (
      <article key={articleId} className={cn(cls.ServicesArticleMainPage)}>
        <ArticleIcon className={cn(cls.articleIcon)} textColor={"#00ABC2"} />
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className={cn(cls.detailsIconContainer)}>
          <Link href={`/services/${link}`}>
            Подробнее <ServicesDetailsIcon textColor={"#00ABC2"} />
          </Link>
        </div>
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
      <MainLayout activePage={ActiveHeaderPage.SERVICES}>
        <ServicesLayout>
          <section className={cn(cls.container)}>{showArticles}</section>
        </ServicesLayout>
      </MainLayout>
    </>
  );
}