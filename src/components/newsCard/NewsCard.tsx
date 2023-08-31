/** @format */

import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./NewsCard.module.scss";
import Image from "next/image";
import { newsI } from "@/types/NewsTypes";
import { dateConverter } from "@/helpers/dateConverter";
import Link from "next/link";

const cn = classNames.bind(cls);

export const enum ThemeNewsCard {
  WHITE_BG = "whiteBg",
  BLUE_BG = "blueBg",
}

interface NewsCardProps extends newsI {
  className?: string;
  theme?: ThemeNewsCard;
}

export const NewsCard: FC<NewsCardProps> = (props) => {
  const {
    className,
    theme = ThemeNewsCard.BLUE_BG,
    created_at,
    description,
    thumbnail,
    title,
    id,
  } = props;

  return (
    <div className={cn(cls.NewsCard, cls[theme], className)}>
      <span className={cls.NewsCard_date}>{dateConverter(created_at)}</span>
      <div className={cls.NewsCard_head}>
        <Image
          className={cls.NewsCard_headImg}
          src={thumbnail}
          width={80}
          height={80}
          alt={title + "| Almaty Kazkabel"}
        />
        <Link
          href={`/news/${id}`}
          className={cls.NewsCard_headTitle}
          title={title}>
          {title?.length > 45 ? `${title.slice(0, 45)}...` : title}
        </Link>
      </div>
      <p className={cls.NewsCard_descr}>
        {description?.length > 150
          ? `${description.slice(0, 150)}...`
          : description}
      </p>
    </div>
  );
};
