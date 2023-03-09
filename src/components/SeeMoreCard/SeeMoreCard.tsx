import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./SeeMoreCard.module.scss";
import { seeMoreCardI } from "@/data/SeeMoreCardData";
import Link from "next/link";
import Image from "next/image";

const cn = classNames.bind(cls);

interface SeeMoreCardProps extends seeMoreCardI {
  className?: string;
}

export const SeeMoreCard: FC<SeeMoreCardProps> = (props) => {
  const { className, descr, id, img, title } = props;

  return (
    <div className={cn(cls.SeeMoreCard)}>
      <Image
        className={cls.SeeMoreCard_img}
        src={img}
        alt="see more card image"
        width={178}
        height={178}
      />

      <div className={cls.SeeMoreCard_text}>
        <h4 className={cls.SeeMoreCard_title}>{title}</h4>
        <p className={cls.SeeMoreCard_descr}>{descr}</p>
        <Link className={cls.SeeMoreCard_link} href={`/catalog/${id}`}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};
