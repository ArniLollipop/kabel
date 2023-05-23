import { FC, useState } from "react";
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
  IconCabinetFlag,
} from "@/assets/icons";
import { ActiveCabinetPageEnum } from "@/layouts/CabinetLayot/CabinetLayout";
import { Button } from "@/UI/Button";
import { ThemeButton } from "@/UI/Button/ui/Button";

import { logOut } from "@/store/slices/AuthSlice";
import { useAppDispatch } from "@/hooks/store";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { setAmount, setItems } from "@/store/slices/CartSlice";

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
  const { t } = useTranslation();
  const [modal, setModal] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const logoutHandler = () => {
    dispatch(logOut());
    dispatch(setAmount(0));
    dispatch(setItems([]));
    localStorage.clear();
    router.push("/");
  };

  return (
    <nav
      className={cn(cls.nav, className, {
        mobile: theme === ThemeNavigation.MOBILE,
      })}
    >
      <div
        onClick={() => setModal(false)}
        className={
          modal
            ? "fixed top-0 left-0 bg-black bg-opacity-40 w-full h-[100vh] z-[1000] transition-all duration-300"
            : "fixed top-0 left-0 bg-transparent bg-opacity-40 w-0 h-[100vh] z-[1000] transition-all duration-300"
        }
      ></div>
      <div
        className={
          modal
            ? cls.modal_inner
            : "fixed top-0 -translate-y-1/2 w-0 -left-[50%] transition-all duration-300"
        }
      >
        <p className="text-center font-semibold text-xl">
          Вы уверены что хотите выйти?
        </p>
        <button
          onClick={logoutHandler}
          className="bg-[#F6BF0C] py-2 px-5 rounded-[5px] border-none text-white mx-auto mt-4 block font-semibold text-lg cursor-pointer"
        >
          Да
        </button>
      </div>
      <Link
        href="/cabinet/profile"
        className={cn(cls.nav_link, {
          active: activePage === ActiveCabinetPageEnum.PROFILE,
        })}
      >
        <IconCabinetProfile />
        <span>{t("myProfile")}</span>
        <IconCabinetArrow />
      </Link>

      <Link
        href="/cabinet/orders"
        className={cn(cls.nav_link, {
          active: activePage === ActiveCabinetPageEnum.ORDERS,
        })}
      >
        <IconCabinetOrder />
        <span>{t("myOrders")}</span>
        <IconCabinetArrow />
      </Link>

      <Link
        href="/cabinet/delivery"
        className={cn(cls.nav_link, {
          active: activePage === ActiveCabinetPageEnum.DELIVERY,
        })}
      >
        <IconCabinetDelivery />
        <span>{t("addresses")}</span>
        <IconCabinetArrow />
      </Link>

      <Link
        href="/cabinet/bonuses"
        className={cn(cls.nav_link, {
          active: activePage === ActiveCabinetPageEnum.BONUSES,
        })}
      >
        <IconCabinetBonuses />
        <span>{t("bonuses")}</span>
        <IconCabinetArrow />
      </Link>

      <Link
        href="/cabinet/currency"
        className={cn(cls.nav_link, {
          active: activePage === ActiveCabinetPageEnum.CURRENCY,
        })}
      >
        <IconCabinetFlag />
        <span>Валюта и ЛБМ</span>
        <IconCabinetArrow />
      </Link>

      <Link
        href="/cabinet/support"
        className={cn(cls.nav_link, {
          active: activePage === ActiveCabinetPageEnum.SUPPORT,
        })}
      >
        <IconCabinetSupport />
        <span>{t("support")}</span>
        <IconCabinetArrow />
      </Link>

      <div className={cn(cls.nav_logoutBtnContainer)}>
        <IconCabinetLogout fillColor="#F6BF0C" />
        <Button theme={ThemeButton.CLEAR} onClick={() => setModal(true)}>
          {t("leave")}
        </Button>
      </div>

      <Button
        className={cn(cls.nav_deleteAccountBtn) + " hidden"}
        theme={ThemeButton.CLEAR}
      >
        {t("deleteAccount")}
      </Button>
    </nav>
  );
};
