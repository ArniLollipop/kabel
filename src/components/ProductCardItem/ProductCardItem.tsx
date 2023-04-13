import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./ProductCardItem.module.scss";
import Link from "next/link";
import { IconCardItemDelivery, IconCardItemInStock, IconCardItemOutOfStock } from "@/assets/icons";
import mockImage from "@/assets/images/ImageMockProduct2.png";
import nullImg from "@/assets/images/nullImg.webp";

import Image from "next/image";
import { Button, ThemeButton } from "@/UI/Button/ui/Button";
import { productI } from "@/types/ProductTypes";

const cn = classNames.bind(cls);

export const enum ThemeProductCard {
  CATALOG = "catalog",
  MINI = "mini",
}

interface ProductCardItemProps extends productI {
  className?: string;
  theme?: ThemeProductCard;
}

export const ProductCardItem: FC<ProductCardItemProps> = (props) => {
  const { className, theme = ThemeProductCard.CATALOG } = props;

  return (
    <li className={cn(cls.ProductCardItem, cls[theme], className)}>
      <div className={cls.cardInfoIcons}>
        <IconCardItemDelivery />
        {props.availability === "в наличии" ? <IconCardItemInStock /> : <IconCardItemOutOfStock />}
      </div>

      <Image
        src={props.image || nullImg}
        alt="product"
        className={cls.cardImg}
        width={137}
        height={137}
      />

      <div className={cls.cardInfo}>
        <Link href={`/catalog/${props.code}`} className={cls.link}>
          <h3 className={cls.cardTitle}>{props.name}</h3>
        </Link>
        <p className={cls.cardDescr}>
          {props.description
            ? props.description.length < 77
              ? props.description
              : `${props.description?.slice(0, 77)}...`
            : ""}
        </p>

        <span className={cls.cardPrice}>{props.cost} ₸</span>
      </div>

      <div className={cls.cardBtns}>
        <Button theme={ThemeButton.CARD} className={cls.cardAddBtn}>
          В&nbsp;корзину
        </Button>

        <Link href={`/catalog/${props.code}`} className={cls.cardMoreBtn}>
          Подробнее
        </Link>
      </div>
    </li>
  );
};
