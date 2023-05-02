import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./SeeMoreCard.module.scss";
import { seeMoreCardI } from "@/data/SeeMoreCardData";
import Link from "next/link";
import Image from "next/image";
import { productI } from "@/types/ProductTypes";
import nullImg from "@/assets/images/nullImg.webp";
import { useTranslation } from "react-i18next";

const cn = classNames.bind(cls);

interface SeeMoreCardProps extends productI {
  className?: string;
}

export const SeeMoreCard: FC<SeeMoreCardProps> = (props) => {
  const { t } = useTranslation();
  const { className, name, image, description, code } = props;

  return (
    <div className={cn(cls.SeeMoreCard)}>
      <Image
        className={cls.SeeMoreCard_img}
        src={nullImg}
        alt="see more card image"
        width={178}
        height={178}
      />

      <div className={cls.SeeMoreCard_text}>
        <h4 className={cls.SeeMoreCard_title}>{name}</h4>
        <p className={cls.SeeMoreCard_descr}>
          {description
            ? description.length > 150
              ? `${description.slice(0, 150)}...`
              : description
            : ""}
        </p>
        <Link className={cls.SeeMoreCard_link} href={`/catalog/${code}`}>
          {t("another")}
        </Link>
      </div>
    </div>
  );
};
