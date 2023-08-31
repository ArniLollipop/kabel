/** @format */

import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./AboutSection.module.scss";
import { Title } from "@/UI/Title/Title";
import ImageHomepageAbout from "@/assets/images/ImageHomepageAbout.png";
import Image from "next/image";
import { AboutI } from "@/types/AboutTypes";

const cn = classNames.bind(cls);

interface AboutSectionProps {
  className?: string;
  aboutInfo: AboutI;
}

export const AboutSection: FC<AboutSectionProps> = (props) => {
  const { className, aboutInfo } = props;

  return (
    <section className={cls.AboutSection}>
      <Title className={cls.AboutSection_title}>{aboutInfo?.title}</Title>
      <div className={cls.AboutSection_descrWrapper}>
        <Image
          src={aboutInfo?.image}
          className={cls.AboutSection_descrImage}
          alt={aboutInfo?.title + "| Almaty Kazkabel"}
          width={470}
          height={450}
        />
        <div className={cls.AboutSection_descrText}>
          <div
            dangerouslySetInnerHTML={{ __html: aboutInfo?.text }}
            className={cls.AboutSection_text}
          />

          <div
            className={cls.AboutSection_descrAccent}
            dangerouslySetInnerHTML={{ __html: aboutInfo?.our_goal }}
          />
        </div>
      </div>
    </section>
  );
};
