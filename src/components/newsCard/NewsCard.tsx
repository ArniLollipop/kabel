import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./NewsCard.module.scss";
import Image, { StaticImageData } from "next/image";

const cn = classNames.bind(cls);

export const enum ThemeNewsCard {
  WHITE_BG = "whiteBg",
  BLUE_BG = "blueBg",
}

interface NewsCardProps {
  className?: string;
  theme?: ThemeNewsCard;
  thumbnailImg: StaticImageData;
  headTitle: string;
  descrText: string;
}

export const NewsCard: FC<NewsCardProps> = (props) => {
  const { className, descrText, headTitle, thumbnailImg, theme = ThemeNewsCard.BLUE_BG } = props;

  return (
    <div className={cn(cls.NewsCard, cls[theme], className)}>
      <div className={cls.NewsCard_head}>
        <Image className={cls.NewsCard_headImg} src={thumbnailImg} alt="news thumbnail" />
        <h4 className={cls.NewsCard_headTitle}>{headTitle}</h4>
      </div>
      <p className={cls.NewsCard_descr}>{descrText}</p>
    </div>
  );
};
