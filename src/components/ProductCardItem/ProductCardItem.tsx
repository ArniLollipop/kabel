import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./ProductCardItem.module.scss";
import Link from "next/link";
import { IconCardItemDelivery, IconCardItemInStock } from "@/assets/icons";
import mockImage from "@/assets/images/ImageMockProduct2.png";

import Image from "next/image";
import { Button, ThemeButton } from "@/UI/Button/Button";

const cn = classNames.bind(cls);

export const enum ThemeProductCard {
  CATALOG = "catalog",
  MINI = "mini",
}

interface ProductCardItemProps {
  className?: string;
  theme?: ThemeProductCard;
}

export const ProductCardItem: FC<ProductCardItemProps> = (props) => {
  const { className, theme = ThemeProductCard.CATALOG } = props;

  return (
    <li className={cn(cls.ProductCardItem, cls[theme], className)}>
      <div className={cls.cardInfoIcons}>
        <IconCardItemDelivery />
        <IconCardItemInStock />
        {/* Or  <IconCardItemOutOfStock /> */}
      </div>

      <Image src={mockImage} alt="product" className={cls.cardImg} />

      <div className={cls.cardInfo}>
        <Link href="/" className={cls.link}>
          <h3 className={cls.cardTitle}>Провод ПуГВнг (А)- LS</h3>
        </Link>
        <p className={cls.cardDescr}>Lorem ipsum dolor sit amet consectetur. Mattis</p>
      </div>

      <span className={cls.cardPrice}>750₸</span>

      <div className={cls.cardBtns}>
        <Button theme={ThemeButton.CARD} className={cls.cardAddBtn}>
          В&nbsp;корзину
        </Button>

        <Link href="/" className={cls.cardMoreBtn}>
          Подробнее
        </Link>
      </div>
    </li>
  );
};
