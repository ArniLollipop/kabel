import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./AboutSection.module.scss";
import { Title } from "@/UI/Title/Title";
import ImageHomepageAbout from "@/assets/images/ImageHomepageAbout.png";
import Image from "next/image";

const cn = classNames.bind(cls);

interface AboutSectionProps {
  className?: string;
}

export const AboutSection: FC<AboutSectionProps> = (props) => {
  const { className } = props;

  return (
    <section className={cls.AboutSection}>
      <Title className={cls.AboutSection_title}>О компании </Title>
      <div className={cls.AboutSection_descrWrapper}>
        <Image src={ImageHomepageAbout} className={cls.AboutSection_descrImage} alt="About image" />
        <div className={cls.AboutSection_descrText}>
          <p>
            ТОО «Almaty Kazkabel» - на протяжении более 15 лет является одной из ведущих компаний,
            специализирующихся на оптовых поставках кабельно-проводниковой продукции на территории
            Республики Казахстан.
          </p>

          <p>
            Наша миссия – способствование развитию казахстанской экономики путем внедрения высоких
            технологий в таких отраслях как производство, промышленное и гражданское строительство.
          </p>

          <p className={cls.AboutSection_descrAccent}>
            Наша цель - предоставить высококачественную продукцию нашим клиентам. Имея собственные
            склады на территории г. Алматы, мы можем предложить постоянное и актуальное наличие
            кабельной продукции в широком ассортименте.
          </p>
        </div>
      </div>
    </section>
  );
};
