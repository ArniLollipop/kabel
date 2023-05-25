import { ActiveHeaderPage } from "@/components/header/Header";
import { MainLayout } from "@/layouts/MainLayout";
import { Title } from "@/UI/Title/Title";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import Image from "next/image";
import ImageHomepageAboutBig from "@/assets/images/ImageHomepageAboutBig.png";
import { AboutService } from "@/services/About.service";
import { AboutI } from "@/types/AboutTypes";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const cn = classNames.bind(cls);

export default function aboutPage(props: AboutI) {
  const { image, text, title, our_goal } = props;

  const [about, setAbout] = useState<any>();

  const { t } = useTranslation();

  const getInfo = async () => {
    const res = await AboutService().getAboutInfo();
    setAbout(res);
  };

  useEffect(() => {
    getInfo();
  });

  return (
    <MainLayout activePage={ActiveHeaderPage.ABOUT}>
      <div className={cn(cls.about)}>
        <Title className={cls.about_title}>{about && about.title}</Title>
        <div className={cls.about_wrapper}>
          <Image
            className={cls.about_img}
            src={about && about.image}
            alt="about image"
            width={1150}
            height={460}
          />

          <div
            className={cls.about_text}
            dangerouslySetInnerHTML={{ __html: about && about.text }}
          />
          <p
            className={cls.about_accent}
            dangerouslySetInnerHTML={{ __html: about && about.our_goal }}
          ></p>
        </div>
      </div>
    </MainLayout>
  );
}

// export async function getServerSideProps() {
//   const res = await AboutService().getAboutInfo();

//   return {
//     props: res,
//   };
// }
