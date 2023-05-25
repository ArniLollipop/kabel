import { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import cls from "./GoodsList.module.scss";
import { GoodsListItem } from "@/layouts/CardPage/sections/GoodsList/GoodsListItem";
import MockImage from "@/assets/images/ImageMockProduct.png";
import MockImageMini from "@/assets/images/ImageMockProductMini3.png";
import { useHttp } from "@/hooks/useHttp";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { setDelivery } from "@/store/slices/CartSlice";

const cn = classNames.bind(cls);

interface GoodsListProps {
  className?: string;
}

export const GoodsList: FC<GoodsListProps> = (props) => {
  const { className } = props;
  const [cart, setCart] = useState<any>();
  const dispatch = useAppDispatch();

  const { total_amount, items } = useAppSelector((state) => state.CartSlice);

  async function getCart() {
    try {
      const temp: any = JSON.parse(localStorage.getItem("user") || "") || null;
      const res = await useHttp().get("orders/carts/" + temp.id);
      setCart(res.data.items);
      dispatch(setDelivery(res.data.delivery_price));
    } catch (err) {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    }
  }

  useEffect(() => {
    getCart();
  }, [items]);

  return (
    <ul className={cls.GoodsList}>
      {cart?.map((el: any) => {
        return <GoodsListItem element={el} getCart={getCart} />;
      })}
    </ul>
  );
};
