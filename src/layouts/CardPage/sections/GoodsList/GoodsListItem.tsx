import { FC, useEffect, useState } from "react";
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
import NullImg from "@/assets/images/nullImg.webp";

const cn = classNames.bind(cls);

interface GoodsListItemProps {
  element?: any;
  getCart: () => void;
}

export const GoodsListItem: FC<GoodsListItemProps> = (props) => {
  const { element, getCart } = props;
  const dispatch = useAppDispatch();

  const [amount, setCount] = useState<number>(element.length);
  const [cartChange, setCartChange] = useState<number>();

  const plus = () => setCount((prev) => prev + 1);
  const minus = () => amount > 1 && setCount((prev) => prev - 1);

  async function handleMinus(e: any) {
    e.stopPropagation();
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
      minus();
    } catch (err) {}
  }

  async function handleChangeCount(count: any) {
    try {
      if (parseInt(count) > 0) {
        const res = await useHttp().post(
          "orders/carts/add_to_cart/",
          {
            product: element.product_info.code,
            length: count,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          }
        );
        setCount(parseInt(count));
        dispatch(setAmount(res.data.result.total_amount));
        getCart();
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
          product: element.product_info.code,
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
    setCartChange(amount);
  }, [amount]);

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

  console.log("====================================");
  console.log();
  console.log("====================================");

  return (
    <li className={cn(cls.GoodsListItem)}>
      <Image
        src={element.product_info.image || NullImg}
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
          <input
            type="number"
            min={1}
            max={50}
            value={cartChange}
            onChange={(e) => handleChangeCount(e.target.value)}
          />
          М
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
