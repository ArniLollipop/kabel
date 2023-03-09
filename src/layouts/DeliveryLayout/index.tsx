import { FC, ReactNode } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { MainLayout } from "@/layouts/MainLayout";
import Link from "next/link";
import { IconCabinetArrow } from "@/assets/icons";
import { Title } from "@/UI/Title/Title";

const cn = classNames.bind(cls);

export const enum ActivePayDelPageEnum {
  DELIVERY = "delivery",
  PAYMENT = "payment",
}

interface DeliveryLayoutProps {
  className?: string;
  children: ReactNode;
  activePage: ActivePayDelPageEnum;
  title: string;
}

export const DeliveryLayout: FC<DeliveryLayoutProps> = (props) => {
  const { className, children, activePage, title } = props;

  return (
    <div className={cn(cls.deliveryLayout)}>
      <Title>Оплата и доставка</Title>

      <div className={cls.deliveryLayout_wrapper}>
        <nav className={cls.deliveryLayout_nav}>
          <div className={cls.deliveryLayout_navWrapper}>
            <Link
              href={`/pay-del/${ActivePayDelPageEnum.PAYMENT}`}
              className={cn(cls.deliveryLayout_link, {
                active: activePage === ActivePayDelPageEnum.PAYMENT,
              })}
            >
              <span>Оплата</span>
              <IconCabinetArrow />
            </Link>

            <Link
              href={`/pay-del/${ActivePayDelPageEnum.DELIVERY}`}
              className={cn(cls.deliveryLayout_link, {
                active: activePage === ActivePayDelPageEnum.DELIVERY,
              })}
            >
              <span>Доставка</span>
              <IconCabinetArrow />
            </Link>
          </div>
        </nav>

        <div className={cls.deliveryLayout_content}>
          <span className={cls.deliveryLayout_title}>{title}</span>

          <div className={cn(cls.deliveryLayout_contentWrapper, className)}>{children}</div>
        </div>
      </div>
    </div>
  );
};
