/** @format */

import { ActiveHeaderPage } from "@/components/header/Header";
import { MainLayout } from "@/layouts/MainLayout";
import { Title } from "@/UI/Title/Title";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import Image from "next/image";
import { AboutService } from "@/services/About.service";
import { AboutI } from "@/types/AboutTypes";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import { useRouter } from "next/router";

const cn = classNames.bind(cls);

export default function aboutPage(props: AboutI) {
  const { t } = useTranslation();

  const router = useRouter();

  return (
    <MainLayout activePage={ActiveHeaderPage.ABOUT}>
      <Head>
        <title>{t("title_about")}</title>
        <meta name='description' content={t("description_about") as string} />
        <meta property='og:title' content={t("title_about") as string} />
        <meta
          property='og:url'
          content={"https://cable.kz" + router.pathname}
        />
        <meta property='og:image' content={props.image} />
        <link rel='canonical' href={"https://cable.kz" + router.pathname} />
      </Head>
      <div className={cn(cls.about)}>
        <Title className={cls.about_title}>{props && props.title}</Title>
        <div className={cls.about_wrapper}>
          <Image
            className={cls.about_img}
            src={props && props.image}
            alt={props.title + "| Almaty Kazkabel"}
            width={1150}
            height={460}
          />

          <div
            className={cls.about_text}
            dangerouslySetInnerHTML={{ __html: props && props.text }}
          />
          <p
            className={cls.about_accent}
            dangerouslySetInnerHTML={{ __html: props && props.our_goal }}></p>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const res = await AboutService().getAboutInfo();

  return {
    props: res,
  };
}
