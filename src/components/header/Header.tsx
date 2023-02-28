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

interface HeaderProps {
  className?: string;
}
export const Header: FC<HeaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={cls.Header}>
      <ul className={cls.contacts_list}>
        <li className={cls.contacts_list_mobileLogo}>
          <a href="#">
            <IconLogo width="126" height="47" />
          </a>
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
          <a href="" className={cls["card-link"]}>
            <IconCard className={cls["icon"]} />
            <span>1450 ₸</span>
          </a>
        </li>

        <li className={cls.contacts_list_user}>
          <a href="" className={cls["user-link"]}>
            <IconUserCabinet className={cls["icon"]} />
            <span>Личный кабинет</span>
          </a>
        </li>
      </ul>

      <nav className={cls.nav}>
        <a className={cls.nav_link_logo} href="">
          <IconLogo className={cls.nav_logo} />
        </a>

        <ul className={cls.nav_list}>
          <li className={cls.nav_list_item}>
            <a href="#">О компании</a>
          </li>
          <li className={cls.nav_list_item}>
            <a href="#">Продукция</a>
          </li>
          <li className={cls.nav_list_item}>
            <a href="/services">Сервисы</a>
          </li>
          <li className={cls.nav_list_item}>
            <a href="#">Новости</a>
          </li>
          <li className={cls.nav_list_item}>
            <a href="#">Оплата и доставка</a>
          </li>
          <li className={cls.nav_list_item}>
            <a href="#">Контакты</a>
          </li>
        </ul>

        <input type="text" placeholder="Поиск по имени товара" className={cls.nav_search} />
      </nav>
    </div>
  );
};
