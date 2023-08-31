/** @format */

import { CardPage } from "@/layouts/CardPage/CardPage";
import { MainLayout } from "@/layouts/MainLayout";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function Card() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <Head>
        <title>{t("title_card")}</title>
        <meta name='description' content={t("description_card") as string} />
      </Head>
      <CardPage />
    </MainLayout>
  );
}
