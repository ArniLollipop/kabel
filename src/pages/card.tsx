/** @format */

import { CardPage } from "@/layouts/CardPage/CardPage";
import { MainLayout } from "@/layouts/MainLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function Card() {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <MainLayout>
      <Head>
        <title>{t("title_card")}</title>
        <meta name='description' content={t("description_card") as string} />
        <meta property='og:title' content={t("title_card") as string} />
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
      <CardPage />
    </MainLayout>
  );
}
