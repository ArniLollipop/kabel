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

import { useTranslation } from "next-i18next";

let cn = classNames.bind(cls);

export default function Home() {
  const { t } = useTranslation();

  const showArticles = data.map((article) => {
    const { articleId, title, desc, link, articleIcon: ArticleIcon } = article;

    return (
      <article key={articleId} className={cn(cls.ServicesArticleMainPage)}>
        <ArticleIcon className={cn(cls.articleIcon)} textColor={"#00ABC2"} />
        <h2>
          {title === "Таблица Веса кабеля"
            ? t("tableWeight")
            : title === "Расчет сечения кабеля"
            ? t("raschetSechenia")
            : t("rashifrovka")}
        </h2>
        <p>
          {title === "Таблица Веса кабеля"
            ? t("firstService")
            : title === "Расчет сечения кабеля"
            ? t("secondService")
            : t("thirdService")}
        </p>
        <div className={cn(cls.detailsIconContainer)}>
          <Link href={`/services/${link}`}>
            {t("another")} <ServicesDetailsIcon textColor={"#00ABC2"} />
          </Link>
        </div>
      </article>
    );
  });

  return (
    <>
      <Head>
        <title>{t("list.services")}</title>
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
