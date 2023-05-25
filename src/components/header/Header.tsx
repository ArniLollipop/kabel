import { FC, useEffect, useState } from "react";
import cls from "./Header.module.scss";
import {
  IconPhone,
  IconCard,
  IconGeoTag,
  IconUserCabinet,
  IconWhatsApp,
  IconLogo,
  IconCabinetArrow,
} from "@/assets/icons";
import Link from "next/link";
import classNames from "classnames/bind";
import { useAppSelector, useAppDispatch } from "@/hooks/store";
import IconHeaderCatalogCuprum from "@/assets/icons/IconHeaderCatalogCuprum.svg";
import Image from "next/image";
import { useHttp } from "@/hooks/useHttp";
import { CartService } from "@/services/Cart.service";
import { setAmount, setItems } from "@/store/slices/CartSlice";
import KZ from "@/assets/images/kz.png";
import RU from "@/assets/images/Russia.webp";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { setQuery } from "@/store/slices/ProductSlice";

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

interface CategoriesDataI {
  name: string;
  icon: string;
  image: string;
  subcategory_set: { name: string }[];
}

interface HeaderProps {
  className?: string;
  activePage?: ActiveHeaderPage;
}

export const Header: FC<HeaderProps> = (props) => {
  const { activePage } = props;
  const dispatch = useAppDispatch();
  const [categories, setCategories] = useState<any>();
  const { user: authUser, isLoggedIn } = useAppSelector(
    (state) => state.AuthSlice
  );
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<string>("");
  const [isResultOpen, setResultOpen] = useState<boolean>(false);
  const [searchRes, setSearchRes] = useState<any>();

  const [activeCat, setActiveCat] = useState<string>("");
  const { user: first_name } = useAppSelector((state) => state.ProfileSlice);

  const { t } = useTranslation();

  async function getCart() {
    try {
      const res = await CartService().getCartInfo();
      dispatch(setAmount(res.total_amount));
      dispatch(setItems(res.items));
      console.log("====================================");
      console.log(res);
      console.log("====================================");
    } catch (error) {}
  }

  async function getCategories() {
    try {
      let res = await useHttp().get("products/categories/");
      setCategories(res.data.results);
    } catch (err) {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    }
  }

  async function getSearchResults(searhInput: string) {
    try {
      console.log(searhInput, "qweqweqweqweqw");

      const res = await useHttp().get("/products/products/", {
        params: { search: searhInput },
      });
      setSearchRes(res.data.results);
    } catch {}
  }

  function inputCheck(e: any) {
    if (e.target.value === "") {
      setResultOpen(false);
    } else {
      getSearchResults(e.target.value);
      setResultOpen(true);
    }
  }

  const { total_amount } = useAppSelector((state) => state.CartSlice);

  useEffect(() => {
    getCategories();
    getCart();
  }, []);

  return (
    <div className={cls.Header} onClick={() => setResultOpen(false)}>
      <div className="w-full bg-white">
        <div className={cls.Header_wrapper}>
          <ul className={cls.contacts_list}>
            <li className={cls.contacts_list_mobileLogo}>
              <Link href="/">
                <IconLogo
                  width="150"
                  height="100"
                  className="h-[50px] overflow-hidden"
                />
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
              <span className={cls["phone-descr"]}>
                {t("header.free") ? t("header.free") : ""}

                {}
              </span>

              <a
                href="tel:+77273014798"
                className={(cls["phone"], cls["phone-secondary"])}
              >
                +7 727 301 47 98
              </a>

              <a
                href="tel:+77273554798"
                className={(cls["phone"], cls["phone-secondary"])}
              >
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
                <span>{total_amount} ₸</span>
              </Link>
            </li>

            <li className={cls.contacts_list_user}>
              <Link
                href={isLoggedIn ? "/cabinet/profile" : "/auth"}
                className={cls["user-link"]}
              >
                <IconUserCabinet className={cls["icon"]} />
                {/* @ts-ignore */}
                <span>
                  {}

                  {first_name || authUser?.first_name || t("header.free")}
                </span>
              </Link>
            </li>
            <li className={cls.language_block}>
              <button
                onClick={() => setOpen(!open)}
                className={
                  cls.language_btn +
                  " flex items-center text-[#39424B] font-medium"
                }
              >
                {t("lang")}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={
                    open
                      ? "rotate-180 transition-all duration-300"
                      : "transition-all duration-300"
                  }
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#39424B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              {open && (
                <div className={cls.language_choices}>
                  <button
                    onClick={() => {
                      changeLanguage("kz");
                      location.reload();
                    }}
                    className={cls.language_choice}
                  >
                    KZ
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage("ru");
                      location.reload();
                    }}
                    className={cls.language_choice}
                  >
                    RU
                  </button>
                </div>
              )}
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
                <Link href="/about">
                  {t("list.company") ? t("list.company") : ""}
                  {}
                </Link>
              </li>
              <li className={cn(cls.nav_list_item, cls.catalogLink)}>
                <Link
                  onMouseEnter={() => setActiveCat(categories[0].name || "")}
                  href="/catalog"
                  className="peer"
                >
                  {t("list.product") ? t("list.product") : ""}

                  {}
                </Link>
                <div
                  className={
                    activeCat === ""
                      ? cn(cls.hovered) + " !-translate-y-[100%]"
                      : cn(cls.hovered) + " "
                  }
                >
                  <div className="absolute left-1/2 !-translate-x-1/2 max-w-[1400px] w-full">
                    <nav className={cls.hovered_nav}>
                      {categories?.map((cat: any) => (
                        <Link
                          onClick={() => {
                            localStorage.setItem(
                              "cat",
                              JSON.stringify({
                                cat: cat.name,
                                subcat: "",
                              })
                            );
                            setActiveCat("");
                          }}
                          className={
                            activeCat === cat.name
                              ? cls.hovered_navLink + " bg-[#f6bf0c]"
                              : cls.hovered_navLink
                          }
                          href={"/catalog"}
                          onMouseEnter={() => setActiveCat(cat.name)}
                          key={cat.name}
                        >
                          <Image
                            src={cat.icon}
                            alt="icon"
                            width={10}
                            height={15}
                          />
                          <p className={cls.text}> {cat.name} </p>
                          <IconCabinetArrow
                            className={
                              activeCat === cat.name
                                ? cls.hovered_arrowIcon + " !stroke-[#fff]"
                                : cls.hovered_arrowIcon
                            }
                          />

                          <div
                            className={cn(cls.hovered_content, {
                              visible: activeCat === cat.name,
                            })}
                          >
                            {cat.subcategory_set.map((subcat: any) => (
                              <Link
                                onClick={() => {
                                  dispatch(setQuery(subcat.name));
                                  setCookie(
                                    null,
                                    "queries",
                                    JSON.stringify({
                                      subcategory: [subcat.name],
                                      section: [],
                                      core_number: [],
                                      availability: "",
                                      ordering: "cost",
                                    })
                                  );
                                  setActiveCat("");
                                }}
                                className={cls.hovered_contentLink}
                                href={`/catalog`}
                                key={subcat.name}
                              >
                                {subcat.name}
                              </Link>
                            ))}
                          </div>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </li>

              <li
                className={cn(cls.nav_list_item, {
                  active: activePage === ActiveHeaderPage.SERVICES,
                })}
              >
                <Link href="/services">
                  {t("list.services") ? t("list.services") : ""}

                  {}
                </Link>
              </li>

              <li
                className={cn(cls.nav_list_item, {
                  active: activePage === ActiveHeaderPage.NEWS,
                })}
              >
                <Link href="/news">
                  {t("list.news") ? t("list.news") : ""}

                  {}
                </Link>
              </li>

              <li
                className={cn(cls.nav_list_item, {
                  active: activePage === ActiveHeaderPage.PAY_DEL,
                })}
              >
                <Link href="/pay-del/payment">
                  {t("list.payment") ? t("list.payment") : ""}

                  {}
                </Link>
              </li>

              <li
                className={cn(cls.nav_list_item, {
                  active: activePage === ActiveHeaderPage.CONTACTS,
                })}
              >
                <Link href="/contacts">
                  {t("list.contacts") ? t("list.contacts") : ""}

                  {}
                </Link>
              </li>
            </ul>
            <div className={cls.search}>
              <input
                type="text"
                placeholder={t("findTovar") || "Поиск по имени товара"}
                className={cls.nav_search}
                onChange={(e: any) => inputCheck(e)}
              />
              {isResultOpen && (
                <div className={cls.search__results}>
                  {searchRes &&
                    searchRes?.map((el: any) => {
                      return (
                        <Link
                          href={"/catalog/" + el.code}
                          className={cls.search__result}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.5 14.9258L11.5 10.9258M7.5 12.9258C4.18629 12.9258 1.5 10.2395 1.5 6.92578C1.5 3.61207 4.18629 0.925781 7.5 0.925781C10.8137 0.925781 13.5 3.61207 13.5 6.92578C13.5 10.2395 10.8137 12.9258 7.5 12.9258Z"
                              stroke="#00ABC2"
                            />
                          </svg>
                          {el.name}
                        </Link>
                      );
                    })}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
