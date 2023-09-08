/** @format */

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

import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

let cn = classNames.bind(cls);

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();

  const showArticles = data.map(article => {
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
        <title>{t("title_services")}</title>
        <meta
          name='description'
          content={t("description_services") as string}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Roboto:wght@400;500&display=swap'
        />
        <meta property='og:title' content={t("title_services") as string} />
        <meta
          property='og:url'
          content={"https://cable.kz" + router.pathname}
        />
        <link rel='canonical' href={"https://cable.kz/" + router.pathname} />


        {/* <meta
            property='og:image'
            content={
              "https://cable.kz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImageDelivery.675cc87e.png&w=640&q=75"
            }
          /> */}
      </Head>
      <MainLayout activePage={ActiveHeaderPage.SERVICES}>
        <ServicesLayout>
          <section className={cn(cls.container)}>{showArticles}</section>
        </ServicesLayout>
      </MainLayout>
    </>
  );
}
