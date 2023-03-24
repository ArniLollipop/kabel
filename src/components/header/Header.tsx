import { FC } from "react";
import cls from "./Header.module.scss";
import {
  IconPhone,
  IconCard,
  IconGeoTag,
  IconUserCabinet,
  IconWhatsApp,
  IconLogo,
} from "@/assets/icons";
import Link from "next/link";
import classNames from "classnames/bind";
import { useAppSelector } from "@/hooks/store";

const cn = classNames.bind(cls);

export const enum ActiveHeaderPage {
  ABOUT = "about",
  CATALOG = "catalog",
  SERVICES = "services",
  NEWS = "news",
  PAY_DEL = "pay_del",
  CONTACTS = "contacts",
  MAIN = "main",
  CARD = "card",
  CABINET = "more",
}

interface HeaderProps {
  className?: string;
  activePage?: ActiveHeaderPage;
}

export const Header: FC<HeaderProps> = (props) => {
  const { className, activePage } = props;
  const { user: authUser, isLoggedIn } = useAppSelector((state) => state.AuthSlice);
  const { user: profileUser } = useAppSelector((state) => state.ProfileSlice);

  return (
    <div className={cls.Header}>
      <ul className={cls.contacts_list}>
        <li className={cls.contacts_list_mobileLogo}>
          <Link href="/">
            <IconLogo width="126" height="47" />
          </Link>
        </li>

        <li className={cls.contacts_list_geoTag}>
          <a href="" className={cls["link"]}>
            <IconGeoTag className={cls["icon"]} />
            <span className={cls["city"]}>Алматы</span>
          </a>
        </li>

        <li className={cls.contacts_list_contacts}>
          <a href="tel:+78000704798" className={cls["main-phone"]}>
            <IconPhone className={cls["icon"]} />
            <span className={cls["phone"]}>8 800 070 47 98</span>
          </a>
          <span className={cls["phone-descr"]}>Бесплатно по РК</span>

          <a href="tel:+77273014798" className={(cls["phone"], cls["phone-secondary"])}>
            +7 727 301 47 98
          </a>

          <a href="tel:+77273554798" className={(cls["phone"], cls["phone-secondary"])}>
            +7 727 355 47 98
          </a>

          <a
            href="https://wa.me/77003014798"
            target="_blank"
            className={(cls["phone"], cls["phone-secondary"])}
          >
            +7 700 301 47 98
            <IconWhatsApp />
          </a>
        </li>

        <li className={cls.contacts_list_card}>
          <Link href="/card" className={cls["card-link"]}>
            <IconCard className={cls["icon"]} />
            <span>1450 ₸</span>
          </Link>
        </li>

        <li className={cls.contacts_list_user}>
          <Link href={isLoggedIn ? "/cabinet/profile" : "/auth"} className={cls["user-link"]}>
            <IconUserCabinet className={cls["icon"]} />
            {/* @ts-ignore */}
            <span>{profileUser?.first_name || authUser?.first_name || "Личный кабинет"}</span>
          </Link>
        </li>
      </ul>

      <nav className={cls.nav}>
        <Link href="/" className={cls.nav_linkLogo}>
          <IconLogo className={cls.nav_logo} />
        </Link>

        <ul className={cls.nav_list}>
          <li
            className={cn(cls.nav_list_item, {
              active: activePage === ActiveHeaderPage.ABOUT,
            })}
          >
            <Link href="/about">О компании</Link>
          </li>

          <li
            className={cn(cls.nav_list_item, {
              active: activePage == ActiveHeaderPage.CATALOG,
            })}
          >
            <Link href="/catalog">Продукция</Link>
          </li>

          <li
            className={cn(cls.nav_list_item, {
              active: activePage === ActiveHeaderPage.SERVICES,
            })}
          >
            <Link href="/services">Сервисы</Link>
          </li>

          <li
            className={cn(cls.nav_list_item, {
              active: activePage === ActiveHeaderPage.NEWS,
            })}
          >
            <Link href="/news">Новости</Link>
          </li>

          <li
            className={cn(cls.nav_list_item, {
              active: activePage === ActiveHeaderPage.PAY_DEL,
            })}
          >
            <Link href="/pay-del/payment">Оплата и доставка</Link>
          </li>

          <li
            className={cn(cls.nav_list_item, {
              active: activePage === ActiveHeaderPage.CONTACTS,
            })}
          >
            <Link href="/contacts">Контакты</Link>
          </li>
        </ul>

        <input type="text" placeholder="Поиск по имени товара" className={cls.nav_search} />
      </nav>
    </div>
  );
};
