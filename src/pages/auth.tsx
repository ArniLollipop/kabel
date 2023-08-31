/** @format */

import Head from "next/head";
import { MainLayout } from "@/layouts/MainLayout";
import { Authorization } from "@/components/authorization/Authorization";

import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{t("title_auth")}</title>
        <meta name='description' content={t("description_auth") as string} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Roboto:wght@400;500&display=swap'
        />
        <meta property='og:title' content={t("title_auth") as string} />
        <meta
          property='og:url'
          content={"https://cable.kz" + router.pathname}
        />
        {/* <meta
            property='og:image'
            content={
              "https://cable.kz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImageDelivery.675cc87e.png&w=640&q=75"
            }
          /> */}
      </Head>
      <MainLayout>
        <Authorization />
      </MainLayout>
    </>
  );
}
