import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./Footer.module.scss";
import { IconLogo } from "@/assets/icons";
import IconPaymentKaspi from "@/assets/icons/IconPaymentKaspi.svg";
import IconPaymentVisa from "@/assets/icons/IconPaymentVisa.svg";
import IconPaymentMC from "@/assets/icons/IconPaymentMC.svg";
import Image from "next/image";

import { useTranslation } from "react-i18next";

import {
  IconMobileMenuCard,
  IconMobileMenuHome,
  IconMobileMenuProduct,
  IconMobileMenuServices,
  IconMobileMenuMore,
} from "@/assets/icons";
import Link from "next/link";
import { ActiveHeaderPage } from "@/components/header/Header";

import { useAppSelector } from "@/hooks/store";

let cn = classNames.bind(cls);

interface FooterProps {
  className?: string;
  activePage?: ActiveHeaderPage;
}

export const Footer: FC<FooterProps> = (props) => {
  const { className, activePage } = props;

  const { t } = useTranslation();

  const { isLoggedIn } = useAppSelector((state) => state.AuthSlice);

  return (
    <>
      <div className={cls.Footer}>
        <nav className={cls.footerNav}>
          <IconLogo className={cls.footerNav_logo} textColor="#fff" />

          <ul className={cls.footerNav_list}>
            <li
              className={cn(cls.footerNav_listItem, {
                active: activePage === ActiveHeaderPage.ABOUT,
              })}
            >
              <Link href="/about">
                {t("list.company") ? t("list.company") : ""}
              </Link>
            </li>
            <li
              className={cn(cls.footerNav_listItem, {
                active: activePage === ActiveHeaderPage.CATALOG,
              })}
            >
              <Link href="/catalog">
                {t("list.product") ? t("list.product") : ""}
                {}
              </Link>
            </li>
            <li
              className={cn(cls.footerNav_listItem, {
                active: activePage === ActiveHeaderPage.SERVICES,
              })}
            >
              <Link href="/services">
                {t("list.services") ? t("list.services") : ""}

                {}
              </Link>
            </li>
            <li
              className={cn(cls.footerNav_listItem, {
                active: activePage === ActiveHeaderPage.NEWS,
              })}
            >
              <Link href="/news">
                {t("list.news") ? t("list.news") : ""}

                {}
              </Link>
            </li>
            <li
              className={cn(cls.footerNav_listItem, {
                active: activePage === ActiveHeaderPage.PAY_DEL,
              })}
            >
              <Link href="/pay-del/payment">
                {t("list.payment") ? t("list.payment") : ""}

                {}
              </Link>
            </li>
            <li
              className={cn(cls.footerNav_listItem, {
                active: activePage === ActiveHeaderPage.CONTACTS,
              })}
            >
              <Link href="/contacts">
                {t("list.contacts") ? t("list.contacts") : ""}

                {}
              </Link>
            </li>
            <li
              className={cn(cls.footerNav_listItem, {
                active: activePage === ActiveHeaderPage.CONTACTS,
              })}
            >
              <Link href="/politics">
                {t("footer.politics") ? t("footer.politics") : ""}

                {}
              </Link>
            </li>
          </ul>
        </nav>

        <div className={cls.footerInfo}>
          <ul className={cls.footerInfo_table}>
            <li className={cls.footerInfo_tableCol}>
              <h4 className={cls.footerInfo_tableColTitle}>Адрес</h4>
              <span
                className={cn(
                  cls.footerInfo_tableColRow,
                  cls.footerInfo_withAdressIcon
                )}
              >
                Алматы ул. Тлендиева 94/94А <br />
                склад: ул. Бирлик 9
              </span>
              <a
                href="mailto: info@cable.kz"
                className={cn(
                  cls.footerInfo_tableColRow,
                  cls.footerInfo_withEmailIcon
                )}
              >
                info@cable.kz
              </a>
            </li>

            <li className={cls.footerInfo_tableCol}>
              <h4 className={cls.footerInfo_tableColTitle}>
                {t("footer.time") ? t("footer.time") : ""}

                {}
              </h4>
              <span className={cls.footerInfo_tableColRow}>
                Пн-пт с 9:00 до 18:00
              </span>
              <span className={cls.footerInfo_tableColRow}>
                Сб с 9:00 до 15:30
              </span>
              <span className={cls.footerInfo_tableColRow}>
                Обед с 13:00-14:00
              </span>
            </li>

            <li className={cls.footerInfo_tableCol}>
              <h4 className={cls.footerInfo_tableColTitle}>
                {t("footer.phones") ? t("footer.phones") : ""}

                {}
              </h4>
              <div className={cls.footerInfo_tableColPhones}>
                <a
                  href="tel:+77273014798"
                  className={cls.footerInfo_tableColRow}
                >
                  +7 727 301 47 98
                </a>
                <a
                  href="tel:88000704798"
                  className={cls.footerInfo_tableColRow}
                >
                  8 800 070 47 98
                </a>
                <a
                  href="tel:+77273554798"
                  className={cls.footerInfo_tableColRow}
                >
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
              <span>
                {t("footer.free") ? t("footer.free") : ""}

                {}
              </span>
            </li>

            <li className={cls.footerInfo_tableCol}>
              <h4 className={cls.footerInfo_tableColTitle}>
                {" "}
                {t("footer.pay") ? t("footer.pay") : ""}
                {}
              </h4>

              <div className={cls.footerInfo_payments}>
                <Image src={IconPaymentVisa} alt="img" />
                <Image src={IconPaymentMC} alt="img" />
                <Image src={IconPaymentKaspi} alt="img" />
              </div>
            </li>
          </ul>
          <span className={cls.footerInfo_protected}>
            © 2023 {t("footer.private") ? t("footer.private") : ""}
            {}
          </span>
        </div>
      </div>

      {/* Mobile implementation */}
      <div className={cls.FooterMobile}>
        <Link
          href="/"
          className={cn(cls.FooterMobile_navMenuItem, {
            active: activePage === ActiveHeaderPage.MAIN,
          })}
        >
          <IconMobileMenuHome
            textColor={
              activePage === ActiveHeaderPage.MAIN ? "#00abc2" : "#4F4F4F"
            }
          />
          <span>
            {t("footer.main") ? t("footer.main") : ""}

            {}
          </span>
        </Link>

        <Link
          href="/catalog"
          className={cn(cls.FooterMobile_navMenuItem, {
            active: activePage === ActiveHeaderPage.CATALOG,
          })}
        >
          <IconMobileMenuProduct
            textColor={
              activePage === ActiveHeaderPage.CATALOG ? "#00abc2" : "#4F4F4F"
            }
          />
          <span>
            {t("list.product") ? t("list.product") : ""}

            {}
          </span>
        </Link>

        <Link
          href="/services"
          className={cn(cls.FooterMobile_navMenuItem, {
            active: activePage === ActiveHeaderPage.SERVICES,
          })}
        >
          <IconMobileMenuServices
            textColor={
              activePage === ActiveHeaderPage.SERVICES ? "#00abc2" : "#4F4F4F"
            }
          />
          <span>
            {t("list.services") ? t("list.services") : ""}

            {}
          </span>
        </Link>

        <Link
          href="/card"
          className={cn(cls.FooterMobile_navMenuItem, {
            active: activePage === ActiveHeaderPage.CARD,
          })}
        >
          <IconMobileMenuCard
            textColor={
              activePage === ActiveHeaderPage.CARD ? "#00abc2" : "#4F4F4F"
            }
          />
          <span>
            {t("footer.cart") ? t("footer.cart") : ""}

            {}
          </span>
        </Link>

        <Link
          href={isLoggedIn ? "/cabinet" : "/auth"}
          className={cn(cls.FooterMobile_navMenuItem, {
            active: activePage === ActiveHeaderPage.CABINET,
          })}
        >
          <IconMobileMenuMore
            textColor={
              activePage === ActiveHeaderPage.CABINET ? "#00abc2" : "#4F4F4F"
            }
          />
          <span>
            {t("footer.profile") ? t("footer.profile") : ""}
            {}{" "}
          </span>
        </Link>
      </div>
    </>
  );
};
