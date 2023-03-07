import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./OrderHistoryCard.module.scss";
import { ordersDataI } from "@/data/OrdersData";
import Image from "next/image";
import Link from "next/link";

const cn = classNames.bind(cls);

interface orderHistoryCardProps extends ordersDataI {
  className?: string;
}

export const OrderHistoryCard: FC<orderHistoryCardProps> = (props) => {
  const { className, img, name, descr, date, status, id } = props;

  return (
    <Link href={`/cabinet/orders/${id}`} className={cn(cls.orderHistoryCard, className)}>
      <Image className={cls.img} src={img} alt="order img" width={100} height={100} />
      <h2 className={cls.name}>{name}</h2>
      <p className={cls.descr}>{descr}</p>
      <span className={cls.status}>{status}</span>
      <span className={cls.date}>Дата: {date}</span>
    </Link>
  );
};
