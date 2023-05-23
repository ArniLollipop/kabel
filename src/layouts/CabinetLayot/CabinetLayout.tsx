import { FC, ReactNode } from "react";
import classNames from "classnames/bind";
import cls from "./CabinetLayout.module.scss";
import { MainLayout } from "@/layouts/MainLayout";
import { Navigation } from "@/layouts/CabinetLayot/Navigation";

const cn = classNames.bind(cls);

export const enum ActiveCabinetPageEnum {
  PROFILE = "profile",
  ORDERS = "orders",
  DELIVERY = "delivery",
  CARDS = "cards",
  BONUSES = "bonuses",
  SUPPORT = "support",
  CURRENCY = "currency",
}

interface CabinetLayoutProps {
  className?: string;
  activePage: ActiveCabinetPageEnum;
  children: ReactNode;
}

export const CabinetLayout: FC<CabinetLayoutProps> = (props) => {
  const { children, className, activePage } = props;

  return (
    <MainLayout>
      <div className={cn(cls.CabinetLayout)}>
        <div className={cls.CabinetLayout_wrapper}>
          <Navigation activePage={activePage} />

          <div className={cn(cls.content, className)}>{children}</div>
        </div>
      </div>
    </MainLayout>
  );
};
