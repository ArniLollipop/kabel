import Head from "next/head";
import { MainLayout } from "@/layouts/MainLayout";
import { Authorization } from "@/components/authorization/Authorization";

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("auth")}</title>
        <meta name="description" content="ТОО Almaty Kazkabel" />
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
        <Authorization />
      </MainLayout>
    </>
  );
}
