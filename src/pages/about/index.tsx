import { ActiveHeaderPage } from "@/components/header/Header";
import { MainLayout } from "@/layouts/MainLayout";
import { Title } from "@/UI/Title/Title";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import Image from "next/image";
import ImageHomepageAboutBig from "@/assets/images/ImageHomepageAboutBig.png";
import { AboutService } from "@/services/About.service";
import { AboutI } from "@/types/AboutTypes";

const cn = classNames.bind(cls);

//  interface indexProps {
//  className?: string;
//  }

export default function aboutPage(props: AboutI) {
  const { id, image, text, title, our_goal } = props;
  return (
    <MainLayout activePage={ActiveHeaderPage.ABOUT}>
      <div className={cn(cls.about)}>
        <Title className={cls.about_title}>{title}</Title>
        <div className={cls.about_wrapper}>
          <Image
            className={cls.about_img}
            src={image}
            alt="about image"
            width={1150}
            height={460}
          />

          <p className={cls.about_descr}>{text}</p>

          <p className={cls.about_accent}>{our_goal}</p>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const res = await AboutService().getAboutInfo();

  return {
    props: res.data,
  };
}
