import { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import cls from "./ProductCardItem.module.scss";
import Link from "next/link";
import {
  IconCardItemDelivery,
  IconCardItemInStock,
  IconCardItemOutOfStock,
} from "@/assets/icons";
import mockImage from "@/assets/images/ImageMockProduct2.png";
import nullImg from "@/assets/images/nullImg.webp";

import Image from "next/image";
import { Button, ThemeButton } from "@/UI/Button/ui/Button";
import { productI } from "@/types/ProductTypes";
import { useHttp } from "@/hooks/useHttp";
import { useAppSelector, useAppDispatch } from "@/hooks/store";
import { setAmount, setItems } from "@/store/slices/CartSlice";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const { className, theme = ThemeProductCard.CATALOG } = props;
  const dispatch = useAppDispatch();
  const [cart, setCart] = useState<number>(0);
  const { items } = useAppSelector((state) => state.CartSlice);

  const plus = () => setCart((prev) => prev + 1);
  const minus = () => cart > 1 && setCart((prev) => prev - 1);

  async function handleAddCart() {
    try {
      const res = await useHttp().post(
        "orders/carts/add_to_cart/",
        {
          product: props.code,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      dispatch(setAmount(res.data.result.total_amount));
      dispatch(setItems(res.data.result.items));
    } catch (err) {
      window.location.replace("/auth");
    }
  }

  async function handleMinus() {
    try {
      const res = await useHttp().post(
        "orders/carts/reduce_from_cart/",
        {
          product: props.code,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      dispatch(setAmount(res.data.result.total_amount));
      minus();
    } catch (err) {}
  }

  async function handlePlus() {
    try {
      const res = await useHttp().post(
        "orders/carts/add_to_cart/",
        {
          product: props.code,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      dispatch(setAmount(res.data.result.total_amount));
      plus();
    } catch (err) {}
  }

  useEffect(() => {
    setCart(0);
    if (items) {
      items.map((el: any) => {
        if (el.product_info.code === props.code) {
          setCart(el.length);
        }
      });
    }
  }, [items]);

  return (
    <li className={cn(cls.ProductCardItem, cls[theme], className)}>
      <div className={cls.cardInfoIcons}>
        <IconCardItemDelivery />
        {props.availability === "в наличии" ? (
          <IconCardItemInStock />
        ) : (
          <IconCardItemOutOfStock />
        )}
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
        {cart === 0 ? (
          <Button
            onClick={handleAddCart}
            theme={ThemeButton.CARD}
            className={cls.cardAddBtn}
          >
            В&nbsp;{t("toCart")}
          </Button>
        ) : (
          <div className={cls.cartBtn}>
            <button onClick={handleMinus} className={cls.cartMinus}>
              <svg
                width="20"
                height="2"
                viewBox="0 0 20 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H19"
                  stroke="#00ABC2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <p className={cls.cartCounter}>{cart} м</p>
            <button onClick={handlePlus} className={cls.cartPlus}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19"
                  stroke="#00ABC2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 12H19"
                  stroke="#00ABC2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
        <Link href={`/catalog/${props.code}`} className={cls.cardMoreBtn}>
          {t("another")}
        </Link>
      </div>
    </li>
  );
};
