import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./OrderHistoryCard.module.scss";
import { ordersDataI } from "@/data/OrdersData";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const cn = classNames.bind(cls);

interface orderHistoryCardProps extends ordersDataI {
  className?: string;
  items?: any;
  created_at?: string;
}

export const OrderHistoryCard: FC<orderHistoryCardProps> = (props) => {
  const { t } = useTranslation();
  const { className, img, name, descr, date, status, id, items, created_at } =
    props;

  return (
    <Link
      href={`/cabinet/orders/${id}`}
      className={cn(cls.orderHistoryCard, className)}
    >
      <Image
        className={cls.img}
        src={items[0].product_info.image ? items[0].product_info.image : ""}
        alt="order img"
        width={100}
        height={100}
      />
      <p className={cls.descr}>{items[0].product_info.name}</p>
      <span className={cls.status}>{t("dead")}</span>
      <span className={cls.date}>Дата: {created_at?.split("T")[0]}</span>
    </Link>
  );
};
