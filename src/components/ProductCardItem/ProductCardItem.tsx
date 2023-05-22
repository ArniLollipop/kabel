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
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const cn = classNames.bind(cls);

export const enum ThemeProductCard {
  CATALOG = "catalog",
  MINI = "mini",
}

interface ProductCardItemProps extends productI {
  className?: string;
  theme?: ThemeProductCard;
  promo_cost?: number;
}

export const ProductCardItem: FC<ProductCardItemProps> = (props) => {
  const { t } = useTranslation();
  const { className, theme = ThemeProductCard.CATALOG } = props;
  const dispatch = useAppDispatch();
  const [cart, setCart] = useState<number>(0);
  const [cartChange, setCartChange] = useState<number>(0);
  const { items } = useAppSelector((state) => state.CartSlice);
  const router = useRouter();

  const plus = () => setCart((prev) => prev + 1);
  const minus = () => cart > 1 && setCart((prev) => prev - 1);

  async function handleAddCart(e: any) {
    e.stopPropagation();
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

  async function handleMinus(e: any) {
    e.stopPropagation();
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

  async function handleChangeCount(count: any) {
    try {
      if (parseInt(count) > 0) {
        const res = await useHttp().post(
          "orders/carts/add_to_cart/",
          {
            product: props.code,
            length: count,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          }
        );
        setCart(parseInt(count));
        dispatch(setAmount(res.data.result.total_amount));
      }
      setCartChange(parseInt(count));
    } catch {}
  }

  async function handlePlus(e: any) {
    e.stopPropagation();
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

  function handleStop(e: any) {
    e.stopPropagation();
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

  useEffect(() => {
    setCartChange(cart);
  }, [cart]);

  function handleClick() {
    router.push("/catalog/" + props.code);
  }

  return (
    <li
      onClick={handleClick}
      className={cn(cls.ProductCardItem, cls[theme], className) + " itemShadow"}
    >
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
          <h3 className={cls.cardTitle}>
            {/* {props.name.length > 20
              ? `${props.name.slice(0, 17)}...`
              : props.name} */}
            {props.name}
          </h3>
        </Link>
        <p className={cls.cardDescr}>
          {/* {props.description
            ? props.description.length < 77
              ? props.description
              : `${props.description?.slice(0, 77)}...`
            : ""} */}
          {props.description}
        </p>
        {props.promo_cost ? (
          <div>
            <span className={cls.cardPrice__old}>{props.cost} ₸</span>
            <span className={cls.cardPrice}>{props.promo_cost}</span>
          </div>
        ) : (
          <span className={cls.cardPrice}>{props.cost} ₸</span>
        )}
        {/* <span className={cls.newPrice}>{props.promo_cost} ₸</span> */}
      </div>

      <div className={cls.cardBtns}>
        {cart === 0 ? (
          <Button
            onClick={handleAddCart}
            theme={ThemeButton.CARD}
            className={cls.cardAddBtn}
          >
            {t("toCart")}
          </Button>
        ) : (
          <div onClick={handleStop} className={cls.cartBtn}>
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
            <div className="flex items-center">
              <input
                className={
                  cls.cartCounter + " w-[50px] outline-none border-none"
                }
                min={1}
                max={1000}
                type="number"
                value={cartChange}
                onChange={(e: any) => {
                  if (e.target.value <= 1000 && e.target.value >= 1)
                    handleChangeCount(e.target.value);
                }}
              />
              <p className={cls.cartCounter}> м</p>
            </div>
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
