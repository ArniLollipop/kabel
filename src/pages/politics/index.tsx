/** @format */

import { MainLayout } from "@/layouts/MainLayout";
import { FC, useEffect, useState } from "react";
import cls from "./politics.module.scss";
import { ActivePayDelPageEnum, DeliveryLayout } from "@/layouts/DeliveryLayout";
import { Title } from "@/UI/Title/Title";
import { useHttp } from "@/hooks/useHttp";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import { useRouter } from "next/router";

function Politics(props: any) {
  const { politics } = props;
  const { t } = useTranslation();

  // const [politics, setPolitics] = useState<string>("");

  // async function getPolitics() {
  //   try {
  //     const res = await useHttp().get("main/privacy_policy/");
  //     setPolitics(res.data.results[0].text);
  //   } catch (err) {}
  // }

  // useEffect(() => {
  //   getPolitics();
  // }, []);

  const router = useRouter();
  return (
    <>
      <MainLayout>
        <Head>
          <title>{t("title_politics")}</title>
          <meta
            name='description'
            content={t("description_politics") as string}
          />
          <meta property='og:title' content={t("title_politics") as string} />
          <meta
            property='og:url'
            content={"https://cable.kz" + router.pathname}
          />
          <link rel='canonical' href={"https://cable.kz" + router.pathname} />

          {/* <meta
            property='og:image'
            content={
              "https://cable.kz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImageDelivery.675cc87e.png&w=640&q=75"
            }
          /> */}
        </Head>
        <div className={cls.Politics}>
          <Title>{t("footer.politics")}</Title>
          <div className={cls.PoliticsBack}>
            <div
              className={cls.PoliticsText}
              dangerouslySetInnerHTML={{ __html: politics }}></div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Politics;

export async function getServerSideProps() {
  const res = await useHttp().get("main/privacy_policy/");
  return {
    props: {
      politics: res.data.results[0].text,
    },
  };
}
