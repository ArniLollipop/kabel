import { FC } from 'react';
import classNames from 'classnames/bind';
import cls from './index.module.scss';
import { useRouter } from 'next/router';
import { ordersData } from '@/data/OrdersData';
import { MainLayout } from '@/layouts/MainLayout';
import { ActiveCabinetPageEnum, CabinetLayout } from '@/layouts/CabinetLayot/CabinetLayout';
import Image from 'next/image';
import Link from 'next/link';

const cn = classNames.bind(cls);

interface OrderCardProps {
  className?: string;
}

export default function OrderCard(props: OrderCardProps) {
  const { className } = props;
  const { query, asPath } = useRouter();

  const {
    adress,
    date,
    deliveryCost,
    deliveryMethod,
    descr,
    goodCost,
    img,
    name,
    paymentMethod,
    phoneNumber,
    status,
  } = ordersData.filter((or) => or.id === 3)[0];

  return (
    <CabinetLayout className={cn(cls.orders)} activePage={ActiveCabinetPageEnum.ORDERS}>
      <div className={cls.orders_wrapper}>
        <h2 className={cls.orders_title}>Мои заказы</h2>
        <span className={cls.orders_subTitle}>Свежие</span>
        <div className={cn(cls.orderCard, className)}>
          <Image className={cls.orderCard_img} src={img} alt="order img" width={100} height={100} />
          <h1 className={cls.orderCard_title}>{name}</h1>
          <p className={cls.orderCard_descr}>{descr} </p>

          <div className={cls.orderCard_delivery}>
            <span className={cn(cls.bold, cls.title)}>Адрес доставки</span>
            <span>{name}</span>
            <span>{adress[0]}</span>
            <span>{adress[1]}</span>
            <span>{phoneNumber}</span>
            <span className={cn(cls.bold, cls.title)}>Способ доставки</span>
            <span>{deliveryMethod}</span>
            <span className={cn(cls.bold, cls.title)}>Способ оплаты</span>
            <span>{paymentMethod}</span>
            <span className={cn(cls.bold, cls.title, cls.border)}>Информация об оплате</span>
            <span>
              Стоимость товара: <span className={cls.bold}>{goodCost} ₸</span>
            </span>
            <span>
              Стоимость доставки: <span className={cls.bold}>{deliveryCost} ₸</span>
            </span>
            <span>
              Статус оплаты: <span className={cls.bold}>{status}</span>
            </span>

            <span className={cls.date}>Дата: {date}</span>
          </div>

          <Link className={cls.backLink} href={asPath}>
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 16.5L1.25 9L8.75 1.5"
                stroke="#00ABC2"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </CabinetLayout>
  );
}
