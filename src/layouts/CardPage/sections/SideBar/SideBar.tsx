import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./SideBar.module.scss";
import {
  IconCardDelivery,
  IconCardGarant,
  IconCardInsurance,
  IconCardReturn,
  IconCardGeoTag,
  IconSideBarCard,
  IconSideBarKaspi,
  IconSidebarPaymentMethods,
} from "@/assets/icons";
import { Button, ThemeButton } from "@/UI/Button/Button";

const cn = classNames.bind(cls);

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(cls.SideBar, className)}>
      <div className={cls.SideBar_adventages}>
        <span className={cls.SideBar_adventages_icon}>
          <IconCardGarant />
          Гарантия качества
        </span>

        <span className={cls.SideBar_adventages_icon}>
          <IconCardReturn />
          Условия возврата
        </span>

        <span className={cls.SideBar_adventages_icon}>
          <IconCardInsurance />
          Страхование
        </span>

        <hr />

        <span className={cls.SideBar_adventages_item}>
          <a href="" className={cls.SideBar_adventages_link}>
            <IconCardGeoTag />
            Самовывоз&nbsp;
          </a>
          из 2 пунктов
        </span>

        <span className={cls.SideBar_adventages_item}>
          <a href="" className={cls.SideBar_adventages_link}>
            <IconCardDelivery />
            Доставка&nbsp;
          </a>
          500₸
        </span>
      </div>

      <div className={cls.SideBar_paymentMethods}>
        <span className={cls.SideBar_paymentMethods_title}>
          <IconSidebarPaymentMethods className={cls.SideBar_paymentMethods_icon} />
          Способы оплаты
        </span>
        <span className={cls.SideBar_paymentMethods_card}>
          <IconSideBarCard className={cls.SideBar_paymentMethods_icon} />
          Картой онлайн
        </span>
        <span className={cls.SideBar_paymentMethods_kaspi}>
          <IconSideBarKaspi className={cls.SideBar_paymentMethods_icon} />
          Kaspi Pay
        </span>
      </div>

      <div className={cls.SideBar_payment}>
        <span className={cls.SideBar_payment_title}>Оплата</span>

        <hr />

        <div className={cls.SideBar_payment_table}>
          <span>Товар</span>
          <span className={cls.SideBar_payment_sum}>3 м</span>
          <span>Сумма к оплате</span>
          <span className={cls.SideBar_payment_sum}>500₸</span>
          <span>Стоимость доставки</span>
          <span className={cls.SideBar_payment_sum}>2450₸</span>
        </div>

        <Button theme={ThemeButton.YELLOW} className={cls.btn}>
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};
