import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./CabinetLayout.module.scss";
import Link from "next/link";

import {
  IconCabinetBonuses,
  IconCabinetCards,
  IconCabinetDelivery,
  IconCabinetLogout,
  IconCabinetOrder,
  IconCabinetProfile,
  IconCabinetSupport,
  IconCabinetArrow,
} from "@/assets/icons";
import { ActiveCabinetPageEnum } from "@/layouts/CabinetLayot/CabinetLayout";
import { Button } from "@/UI/Button";
import { ThemeButton } from "@/UI/Button/ui/Button";

const cn = classNames.bind(cls);

interface NavigationProps {
  className?: string;
  activePage?: ActiveCabinetPageEnum;
  theme?: ThemeNavigation;
}

export const enum ThemeNavigation {
  MOBILE = "mobile",
}

export const Navigation: FC<NavigationProps> = (props) => {
  const { className, activePage, theme } = props;

  return (
    <nav className={cn(cls.nav, className, { mobile: theme === ThemeNavigation.MOBILE })}>
      <Link
        href="/cabinet/profile"
        className={cn(cls.nav_link, { active: activePage === ActiveCabinetPageEnum.PROFILE })}
      >
        <IconCabinetProfile />
        <span>Мой профиль</span>
        <IconCabinetArrow />
      </Link>

      <Link
        href="/cabinet/orders"
        className={cn(cls.nav_link, { active: activePage === ActiveCabinetPageEnum.ORDERS })}
      >
        <IconCabinetOrder />
        <span>Мои заказы</span>
        <IconCabinetArrow />
      </Link>

      <Link
        href="/cabinet/delivery"
        className={cn(cls.nav_link, { active: activePage === ActiveCabinetPageEnum.DELIVERY })}
      >
        <IconCabinetDelivery />
        <span>Адреса доставки</span>
        <IconCabinetArrow />
      </Link>

      <Link
        href="/cabinet/cards"
        className={cn(cls.nav_link, { active: activePage === ActiveCabinetPageEnum.CARDS })}
      >
        <IconCabinetCards />
        <span>Сохраненные карты</span>
        <IconCabinetArrow />
      </Link>

      <Link
        href="/cabinet/bonuses"
        className={cn(cls.nav_link, { active: activePage === ActiveCabinetPageEnum.BONUSES })}
      >
        <IconCabinetBonuses />
        <span>Накопленные бонусы</span>
        <IconCabinetArrow />
      </Link>

      <Link
        href="/cabinet/support"
        className={cn(cls.nav_link, { active: activePage === ActiveCabinetPageEnum.SUPPORT })}
      >
        <IconCabinetSupport />
        <span>Служба поддержки</span>
        <IconCabinetArrow />
      </Link>

      <div className={cn(cls.nav_logoutBtnContainer)}>
        <IconCabinetLogout fillColor="#F6BF0C" />
        <Button theme={ThemeButton.CLEAR} onClick={() => console.log("Log out button works")}>
          Выйти
        </Button>
      </div>

      <Button className={cn(cls.nav_deleteAccountBtn)} theme={ThemeButton.CLEAR}>
        Удалить аккаунт
      </Button>
    </nav>
  );
};
