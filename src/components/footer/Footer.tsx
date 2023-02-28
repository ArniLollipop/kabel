import { FC } from "react";
import classNames from "classnames";
import cls from "./Footer.module.scss";
import { IconLogo } from "@/assets/icons";
import IconPaymentKaspi from "@/assets/icons/IconPaymentKaspi.svg";
import IconPaymentVisa from "@/assets/icons/IconPaymentVisa.svg";
import IconPaymentMC from "@/assets/icons/IconPaymentMC.svg";
import Image from "next/image";

import {
  IconMobileMenuCard,
  IconMobileMenuHome,
  IconMobileMenuProduct,
  IconMobileMenuServices,
  IconMobileMenuMore,
} from "@/assets/icons";
import Link from "next/link";

let cn = classNames.bind(cls);

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = (props) => {
  const { className } = props;

  return (
    <>
      <div className={cls.Footer}>
        <nav className={cls.footerNav}>
          <IconLogo className={cls.footerNav_logo} textColor="#fff" />

          <ul className={cls.footerNav_list}>
            <li className={cls.footerNav_listItem}>
              <a href="#">О компании</a>
            </li>
            <li className={cls.footerNav_listItem}>
              <a href="#">Продукция</a>
            </li>
            <li className={cls.footerNav_listItem}>
              <a href="#">Сервисы</a>
            </li>
            <li className={cls.footerNav_listItem}>
              <a href="#">Новости</a>
            </li>
            <li className={cls.footerNav_listItem}>
              <a href="#">Оплата и доставка</a>
            </li>
            <li className={cls.footerNav_listItem}>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </nav>

        <div className={cls.footerInfo}>
          <ul className={cls.footerInfo_table}>
            <li className={cls.footerInfo_tableCol}>
              <h4 className={cls.footerInfo_tableColTitle}>Адрес</h4>
              <span className={cn(cls.footerInfo_tableColRow, cls.footerInfo_withAdressIcon)}>
                Алматы ул. Тлендиева 94/94А <br />
                склад: ул. Бирлик 9
              </span>
              <a
                href="mailto: almaty-kazkabel@mail.ru"
                className={cn(cls.footerInfo_tableColRow, cls.footerInfo_withEmailIcon)}
              >
                almaty-kazkabel@mail.ru
              </a>
            </li>

            <li className={cls.footerInfo_tableCol}>
              <h4 className={cls.footerInfo_tableColTitle}>Время работы</h4>
              <span className={cls.footerInfo_tableColRow}>Пн-пт с 9:00 до 18:00</span>
              <span className={cls.footerInfo_tableColRow}>Сб с 9:00 до 15:30</span>
              <span className={cls.footerInfo_tableColRow}>Обед с 13:00-14:00</span>
            </li>

            <li className={cls.footerInfo_tableCol}>
              <h4 className={cls.footerInfo_tableColTitle}>Телефоны</h4>
              <div className={cls.footerInfo_tableColPhones}>
                <a href="tel:+77273014798" className={cls.footerInfo_tableColRow}>
                  +7 727 301 47 98
                </a>
                <a href="tel:88000704798" className={cls.footerInfo_tableColRow}>
                  8 800 070 47 98
                </a>
                <a href="tel:+77273554798" className={cls.footerInfo_tableColRow}>
                  +7 727 355 47 98
                </a>
                <a
                  href="https://wa.me/77003014798"
                  target="_blank"
                  className={cls.footerInfo_tableColRow}
                >
                  +7 700 301 47 98
                </a>
              </div>
              <span> Бесплатно по РК</span>
            </li>

            <li className={cls.footerInfo_tableCol}>
              <h4 className={cls.footerInfo_tableColTitle}>Способы оплаты</h4>

              <div className={cls.footerInfo_payments}>
                <Image src={IconPaymentVisa} alt="img" />
                <Image src={IconPaymentMC} alt="img" />
                <Image src={IconPaymentKaspi} alt="img" />
              </div>
            </li>
          </ul>
          <span className={cls.footerInfo_protected}>© 2023 Все права защищены</span>
        </div>
      </div>

      <div className={cls.FooterMobile}>
        <Link href="/" className={cls.FooterMobile_navMenuItem}>
          <IconMobileMenuHome />
          <span>Главная</span>
        </Link>

        <Link href="/catalog" className={cls.FooterMobile_navMenuItem}>
          <IconMobileMenuProduct />
          <span>Продукция</span>
        </Link>

        <Link href="/services" className={cls.FooterMobile_navMenuItem}>
          <IconMobileMenuServices />
          <span>Сервисы</span>
        </Link>

        <Link href="/card" className={cls.FooterMobile_navMenuItem}>
          <IconMobileMenuCard />
          <span>Корзина</span>
        </Link>

        <Link href="" className={cls.FooterMobile_navMenuItem}>
          <IconMobileMenuMore />
          <span>Еще</span>
        </Link>
      </div>
    </>
  );
};
