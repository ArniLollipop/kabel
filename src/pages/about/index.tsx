import { ActiveHeaderPage } from "@/components/header/Header";
import { MainLayout } from "@/layouts/MainLayout";
import { Title } from "@/UI/Title/Title";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import Image from "next/image";
import ImageHomepageAboutBig from "@/assets/images/ImageHomepageAboutBig.png";

const cn = classNames.bind(cls);

//  interface indexProps {
//  className?: string;
//  }

export default function aboutPage() {
  //   const { className } = props;

  return (
    <MainLayout activePage={ActiveHeaderPage.ABOUT}>
      <div className={cn(cls.about)}>
        <Title className={cls.about_title}>О компании</Title>
        <div className={cls.about_wrapper}>
          <Image className={cls.about_img} src={ImageHomepageAboutBig} alt="about image" />

          <p className={cls.about_descr}>
            ТОО «Almaty Kazkabel» - на протяжении более 15 лет является одной из ведущих компаний,
            специализирующихся на оптовых поставках кабельно-проводниковой продукции на территории
            Республики Казахстан.
          </p>

          <p className={cls.about_descr}>
            Наша миссия – способствование развитию казахстанской экономики путем внедрения высоких
            технологий в таких отраслях как производство, промышленное и гражданское строительство.
          </p>

          <p className={cls.about_accent}>
            Наша цель - предоставить высококачественную продукцию нашим клиентам. Имея собственные
            склады на территории г. Алматы, мы можем предложить постоянное и актуальное наличие
            кабельной продукции в широком ассортименте.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
