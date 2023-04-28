import { FC, useState } from "react";
import classNames from "classnames/bind";
import cls from "./GoodsListItem.module.scss";
import Image, { StaticImageData } from "next/image";
import {
  IconShare,
  IconTrash,
  IconCardCounterMinus,
  IconCardCounterPlus,
} from "@/assets/icons";
import { Button, ThemeButton } from "@/UI/Button/ui/Button";
import Link from "next/link";
import { useHttp } from "@/hooks/useHttp";
import { useAppSelector, useAppDispatch } from "@/hooks/store";
import { setAmount, setItems } from "@/store/slices/CartSlice";

const cn = classNames.bind(cls);

interface GoodsListItemProps {
  element?: any;
  getCart: () => void;
}

export const GoodsListItem: FC<GoodsListItemProps> = (props) => {
  const { element, getCart } = props;
  const dispatch = useAppDispatch();

  const [amount, setCount] = useState<number>(element.length);

  const plus = () => setCount((prev) => prev + 1);
  const minus = () => amount > 1 && setCount((prev) => prev - 1);

  async function handleMinus() {
    try {
      const res = await useHttp().post(
        "orders/carts/reduce_from_cart/",
        {
          product: element.product_info.code,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      dispatch(setAmount(res.data.result.total_amount));
      dispatch(setItems(res.data.result.items));
      minus();
      getCart();
    } catch (err) {}
  }

  async function handlePlus() {
    try {
      const res = await useHttp().post(
        "orders/carts/add_to_cart/",
        {
          product: element.product_info.code,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      dispatch(setAmount(res.data.result.total_amount));
      dispatch(setItems(res.data.result.items));
      plus();
      getCart();
    } catch (err) {}
  }

  async function handleDelete() {
    try {
      const res = await useHttp().post(
        "orders/carts/delete_from_cart/",
        {
          product: element.product_info.code,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      dispatch(setAmount(res.data.result.total_amount));
      getCart();
    } catch (err) {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    }
  }

  return (
    <li className={cn(cls.GoodsListItem)}>
      <img
        src={
          element.product_info
            ? element.product_info.image
              ? element.product_info.image
              : ""
            : ""
        }
        alt="Product image"
        className={cls.img}
      />

      <div className={cls.GoodsDescr}>
        <Link
          href={"/catalog/" + element.product_info.code}
          className={cls.GoodsDescr_title}
        >
          {element.product_info.name}
        </Link>

        <div className={cls.GoodsDescr_counter}>
          <Button
            theme={ThemeButton.CLEAR}
            onClick={handleMinus}
            disabled={amount == 0}
          >
            <IconCardCounterMinus className={cls.GoodsDescr_counterBtn} />
          </Button>
          <input type="еуче" readOnly value={amount} />М
          <Button onClick={handlePlus} theme={ThemeButton.CLEAR}>
            <IconCardCounterPlus className={cls.GoodsDescr_counterBtn} />
          </Button>
        </div>

        <div className={cls.GoodsDescr_props}>
          {element.color && (
            <p className={cls.GoodsDescr_props_color}>
              <span>Цвет:</span>Красный
              <Image
                src={element.product_info ? element.product_info.image : ""}
                alt="Product image miniature"
                className={cls.GoodsDescr_props_colorImg}
              />
            </p>
          )}
          <p className={cls.GoodsDescr_props_weight}>
            <span>Вес, кг:</span>0.10
          </p>
          <span className={cls.GoodsPrice_mobile}>{element.amount}</span>
        </div>
      </div>

      <span className={cls.GoodsPrice}>{element.amount} ₸</span>

      <div className={cls.GoodsBtns}>
        <Button theme={ThemeButton.CLEAR} className={cls.GoodsBtns_shareBtn}>
          <IconShare className={cls.GoodsBtns_shareIcon} />
          <span>поделиться</span>
        </Button>
        <Button onClick={handleDelete} theme={ThemeButton.CLEAR}>
          <IconTrash />
        </Button>
      </div>
    </li>
  );
};
