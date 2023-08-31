/** @format */

import { MainLayout } from "@/layouts/MainLayout";
import cls from "./index.module.scss";
import { useTranslation } from "react-i18next";
import { useHttp } from "@/hooks/useHttp";
import Head from "next/head";

function AboutPay(props: any) {
  const { t } = useTranslation();

  return (
    <>
      <MainLayout>
        <div className={cls.Politics}>
          <h2 className={cls.PoliticsH2}>{t("aboutPayTitle")}</h2>
          <p
            className={cls.PoliticsText}
            dangerouslySetInnerHTML={{ __html: `${props.text}` }}></p>
        </div>
      </MainLayout>
    </>
  );
}

export default AboutPay;

export async function getServerSideProps() {
  const res = await useHttp().get("main/payment/");

  return {
    props: res.data.results[0],
  };
}
