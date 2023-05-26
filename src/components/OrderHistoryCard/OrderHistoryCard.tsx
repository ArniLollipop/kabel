import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./OrderHistoryCard.module.scss";
import { ordersDataI } from "@/data/OrdersData";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const cn = classNames.bind(cls);

interface orderHistoryCardProps extends ordersDataI {
  className?: string;
  items?: any;
  created_at?: string;
  pay_type?: string;
  delivery_type?: string;
  order_date?: any;
  order_time_from?: string;
  is_delivered?: boolean;
  updated_at?: string;
}

export const OrderHistoryCard: FC<orderHistoryCardProps> = (props) => {
  const { t } = useTranslation();
  const {
    className,
    img,
    name,
    descr,
    date,
    status,
    id,
    items,
    created_at,
    pay_type,
    delivery_type,
    order_date,
    order_time_from,
    is_delivered,
    updated_at,
  } = props;

  return (
    <Link
      href={`/cabinet/orders/${id}`}
      className={cn(cls.orderHistoryCard, className)}
    >
      <p className={cls.number}>
        {t("nomerZakaza")}: №{id}
      </p>
      {order_date ? order_date : "asdasd"}
      <p className={cls.weight__text}>{t("sposobOplata")}</p>
      <p className={cls.text}>
        Оплата: {pay_type === "card" ? "Картой (онлайн)" : t("nalichnimi")}{" "}
      </p>
      <p className={cls.text}>
        {delivery_type === "pickup" ? "Самовывоз" : t("dostavkaCura")}
      </p>
      <p className={cls.weight__text}>{t("dostavka")}</p>
      <p className={cls.text}>{t("dostavkaCura")}</p>
      <p className={cls.weight__text}>Товары</p>
      <p className={cls.text}>{items.length} шт.</p>
      <div className={cls.order_info}>
        <p className={cls.text}>
          Статус: {is_delivered ? t("dead") : t("noDead")}{" "}
        </p>
        <p className={cls.text}>
          {t("time")}: {updated_at?.split("T")[1].split(":")[0]} :{" "}
          {updated_at?.split("T")[1].split(":")[1]}
        </p>
        <p className={cls.text}>Дата: {updated_at?.split("T")[0]} </p>
      </div>
    </Link>
  );
};
