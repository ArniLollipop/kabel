import { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import cls from "./CatalogItemPage.module.scss";
import Image from "next/image";
import { IconCardItemInStock, IconCardItemOutOfStock } from "@/assets/icons";
import { Button, ThemeButton } from "@/UI/Button/ui/Button";
import { IconShare } from "@/assets/icons";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { productI } from "@/types/ProductTypes";
import nullImg from "@/assets/images/nullImg.png";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
// import { Router } from "next/router";
import { useRouter } from "next/router";
import Link from "next/link";
import { setAmount, setItems } from "@/store/slices/CartSlice";
import { useHttp } from "@/hooks/useHttp";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const cn = classNames.bind(cls);

interface CatalogItemPageProps extends productI {
  className?: string;
}

export const CatalogItemPage: FC<CatalogItemPageProps> = (props) => {
  const { className } = props;
  const { items } = useAppSelector((state) => state.CartSlice);

  const [count, setCount] = useState<number>(0);

  const { push } = useRouter();

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [cart, setCart] = useState<number>(0);
  const [cartChange, setCartChange] = useState<number>(0);
  const router = useRouter();

  const plus = () => setCart((prev) => prev + 1);
  const minus = () => cart > 1 && setCart((prev) => prev - 1);

  const [sum, setSum] = useState<number>(props.cost * cart);

  async function handleAddCart(e: any) {
    if (props.availability === "в наличии") {
      e.stopPropagation();
      try {
        const res = await useHttp().post(
          "orders/carts/add_to_cart/",
          {
            product: props.code,
            color: imageName,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          }
        );
        dispatch(setAmount(res.data.result.total_amount));
        dispatch(setItems(res.data.result.items));
      } catch (err) {
        window.location.replace("/auth");
      }
    }
  }

  async function handleMinus(e: any) {
    e.stopPropagation();
    try {
      const res = await useHttp().post(
        "orders/carts/reduce_from_cart/",
        {
          product: props.code,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      dispatch(setAmount(res.data.result.total_amount));
      minus();
    } catch (err) {}
  }

  async function handleChangeCount(count: any) {
    try {
      if (
        parseInt(count) > 1 &&
        parseInt(count) <= props.remains &&
        parseInt(count) <= 99999
      ) {
        const res = await useHttp().post(
          "orders/carts/add_to_cart/",
          {
            product: props.code,
            length: parseInt(count),
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          }
        );
        setCart(parseInt(count));
        dispatch(setAmount(res.data.result.total_amount));
      }
      setCartChange(parseInt(count));
    } catch {}
  }

  async function handlePlus(e: any) {
    e.stopPropagation();
    if (cartChange < props.remains) {
      try {
        const res = await useHttp().post(
          "orders/carts/add_to_cart/",
          {
            product: props.code,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          }
        );
        dispatch(setAmount(res.data.result.total_amount));
        plus();
      } catch (err) {}
    }
  }

  function handleStop(e: any) {
    e.stopPropagation();
  }

  useEffect(() => {
    setCart(0);
    if (items) {
      items.map((el: any) => {
        if (el.product_info.code === props.code) {
          setCart(el.length);
        }
      });
    }
  }, [items]);

  useEffect(() => {
    setCartChange(cart);
    setSum(cart * props.cost);
  }, [cart]);

  function handleClick() {
    router.push("/catalog/" + props.code);
  }

  useEffect(() => {
    setCount(0);
    if (items) {
      items.map((el: any) => {
        if (el.product_info.code === props.code) {
          setCount(el.length);
        }
      });
    }
  }, []);

  const [imageName, setImageName] = useState<string>(
    props.colors_info[0]?.color_name || ""
  );

  const renderCharList = (start?: number, end?: number) => {
    const startPoint = start ? start : 0;
    const endPoint = end ? end : props.characteristics_info.length;

    return (
      <ul className={cls.card_charList}>
        {props.characteristics_info
          .slice(startPoint, endPoint)
          .map(({ key, value, id }) => (
            <li className={cls.card_descrItem} key={id}>
              <span className={cls.card_descrCategoryName}>{key}</span>
              <span className={cls.card_descrCategoryVal}>{value}</span>
            </li>
          ))}
      </ul>
    );
  };

  function handleCopyToClipboard() {
    navigator.clipboard
      .writeText(`https://cable.kz/catalog/${props.code}`)
      .then(() => {
        toast(t("copyOk"), {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }

  return (
    <div className={cn(cls.CatalogItemPage)}>
      <div className={cls.CatalogItemPage_wrapper}>
        <div className={cls.CatalogItemPage_itemCard}>
          <div className={cls.card}>
            <h1 className={cls.card_title}>{props.name}</h1>

            <span className={cls.card_code}>
              {t("tovarCode")}: {props.code}
            </span>

            <div className={cls.card_content}>
              {/* Картинка товара */}
              <Image
                className={cls.card_img}
                src={props.image || nullImg}
                alt="Card image"
                width={500}
                height={500}
              />

              <div className={cls.card_contentDescr}>
                {/* Наличие */}
                <div
                  className={cn({
                    inStock: props.availability === "в наличии",
                    outStock: props.availability === "под заказ",
                  })}
                >
                  {props.availability === "в наличии" ? (
                    <>
                      <IconCardItemInStock />
                      {t("estUNas")}
                    </>
                  ) : (
                    <>
                      <IconCardItemOutOfStock />
                      {t("podZakaz")}
                    </>
                  )}
                </div>

                {/* Выбор цветов */}
                <div className={cls.card_colors}>
                  <h3 className={cls.card_subTitle}>Цвет</h3>
                  <div className=" flex items-center !justify-normal gap-2 flex-wrap">
                    {props.colors_info.map((el: any) => (
                      <button
                        onClick={() => setImageName(el.color_name)}
                        className={
                          imageName === el.color_name
                            ? "p-1 bg-transparent border border-solid border-black rounded-full overflow-hidden flex items-center !justify-center transition-all duration-300"
                            : "p-1 bg-transparent border border-solid border-[#E1E1E1] rounded-full overflow-hidden flex items-center !justify-center transition-all duration-300"
                        }
                      >
                        <Image
                          src={el.image}
                          alt="image mini"
                          width={35}
                          height={35}
                          key={el.color_name}
                          className=" rounded-full !h-[35px] !w-[35px] overflow-hidden"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Описание / Характеристики */}
                <div className={cls.pcDescr}>
                  <h3 className={cls.card_subTitle}>{t("description")}</h3>
                  {/* Описание */}
                  <p className={cls.card_descr}>{props.description}</p>

                  {/* Характеристики */}

                  {props.characteristics_info.length > 5 ? (
                    <>
                      {renderCharList(0, 5)}
                      <Accordion className={cls.char}>
                        <AccordionItem>
                          {({ open }: { open: boolean }) => (
                            <>
                              <AccordionHeader className={cls.char_accTitle}>
                                <span>{t("allCharackteristik")}</span>
                                <svg
                                  width="9"
                                  height="15"
                                  viewBox="0 0 9 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className={cn(cls.char_accIcon, {
                                    char_accIconActive: open,
                                  })}
                                >
                                  <path
                                    d="M1.56992 13.7962L7.55693 7.78319L1.54396 1.79619"
                                    stroke="#00ABC2"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </AccordionHeader>
                              <AccordionBody className={cls.char_accList}>
                                {renderCharList(
                                  5,
                                  props.characteristics_info.length
                                )}
                              </AccordionBody>
                            </>
                          )}
                        </AccordionItem>
                      </Accordion>
                    </>
                  ) : (
                    renderCharList()
                  )}
                </div>

                <Accordion className={cls.mobileDescr}>
                  <AccordionItem>
                    {({ open }: { open: boolean }) => (
                      <>
                        <AccordionHeader className={cls.char_accTitle}>
                          <span>{t("razvernutOpisanie")}</span>
                          <svg
                            width="9"
                            height="15"
                            viewBox="0 0 9 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={cn(cls.char_accIcon, {
                              char_accIconActive: open,
                            })}
                          >
                            <path
                              d="M1.56992 13.7962L7.55693 7.78319L1.54396 1.79619"
                              stroke="#00ABC2"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </AccordionHeader>
                        <AccordionBody
                          className={cn(cls.char_accList, cls.mobileDescr_body)}
                        >
                          <p className={cls.card_descr}>{props.description}</p>
                          {renderCharList()}
                        </AccordionBody>
                      </>
                    )}
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>

          <div className={cls.info}>
            <div className={cls.buyActions}>
              <p className={cls.buyActions_discont}>
                <span className="!text-base">{t("saleFromAll")}</span>
              </p>

              <span className={cls.buyActions_price}>{props.cost} ₸</span>
              {cartChange ? (
                <div onClick={handleStop} className={cls.cartBtn}>
                  <button
                    onClick={(e: any) => {
                      cart > 1 && handleMinus(e);
                    }}
                    className={cls.cartMinus}
                  >
                    <svg
                      width="20"
                      height="2"
                      viewBox="0 0 20 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1H19"
                        stroke="#00ABC2"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                  <div className="flex items-center">
                    <input
                      className={
                        cls.cartCounter +
                        " w-[60px] outline-none border-none font-bold bg-transparent"
                      }
                      min={1}
                      max={1000}
                      type="number"
                      value={cartChange}
                      onChange={(e: any) => {
                        handleChangeCount(e.target.value);
                      }}
                    />
                    <p className={cls.cartCounter}> м</p>
                  </div>
                  <button
                    onClick={(e: any) => {
                      cart < 1000 && handlePlus(e);
                    }}
                    className={cls.cartPlus}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5V19"
                        stroke="#00ABC2"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 12H19"
                        stroke="#00ABC2"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <Button
                  onClick={handleAddCart}
                  className={cls.buyActions_btn}
                  theme={ThemeButton.CARD}
                >
                  {count > 0 && (
                    <p className={cls.buyActions_btn__count}>{count}</p>
                  )}
                  {t("toCart")}
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="3.25"
                      cy="18.692"
                      rx="2.25"
                      ry="2.21156"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <ellipse
                      cx="15.625"
                      cy="18.692"
                      rx="2.25"
                      ry="2.21156"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.625 16.4809H3.25V1H1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.25 3.21094L19 4.31672L17.875 12.0572H3.25"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              )}
              <p className=" text-sm font-medium mt-1 sm:text-base text-center">
                {t("canBuy")}{" "}
                <span className="text-red-500">
                  {props.remains - cartChange} м
                </span>
              </p>

              <div className={cls.buyActions_secondaruBtns}>
                <Button
                  onClick={handleCopyToClipboard}
                  className={cls.secondaryBtn}
                  theme={ThemeButton.CLEAR}
                >
                  <IconShare />
                  {t("share")}
                </Button>
              </div>
            </div>

            <div className={cls.delivery}>
              <span>{t("dannieZakaza")}:</span>
              <span>Самовывоз</span>
              <span>{t("cura2000")}.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
