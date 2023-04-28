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
import nullImg from "@/assets/images/nullImg.webp";
import { useAppSelector } from "@/hooks/store";
// import { Router } from "next/router";
import { useRouter } from "next/router";
import Link from "next/link";

const cn = classNames.bind(cls);

interface CatalogItemPageProps extends productI {
  className?: string;
}

export const CatalogItemPage: FC<CatalogItemPageProps> = (props) => {
  const { className } = props;
  const { items } = useAppSelector((state) => state.CartSlice);

  const [count, setCount] = useState<number>(0);

  const { push } = useRouter();

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

  return (
    <div className={cn(cls.CatalogItemPage)}>
      <div className={cls.CatalogItemPage_wrapper}>
        <div className={cls.CatalogItemPage_itemCard}>
          <div className={cls.card}>
            <h1 className={cls.card_title}>{props.name}</h1>

            <span className={cls.card_code}>Код товара: {props.code}</span>

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
                      <IconCardItemInStock />В наличии
                    </>
                  ) : (
                    <>
                      <IconCardItemOutOfStock />
                      Под заказ
                    </>
                  )}
                </div>

                {/* Выбор цветов */}
                <div className={cls.card_colors}>
                  <h3 className={cls.card_subTitle}>Цвет</h3>
                  <div className="">
                    {props.colors_info.map(({ image: src }, i) => (
                      <Image
                        src={src}
                        alt="image mini"
                        width={35}
                        height={35}
                        key={i}
                      />
                    ))}
                  </div>
                </div>

                {/* Описание / Характеристики */}
                <div className={cls.pcDescr}>
                  <h3 className={cls.card_subTitle}>Описание</h3>
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
                                <span>Все характеристики</span>
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
                          <span>Развернуть описание</span>
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
                <span>%</span>
                <span>Скидки при заказе от 10000 тг.</span>
              </p>

              <span className={cls.buyActions_price}>{props.cost} ₸</span>

              <Button
                onClick={() => push("/card")}
                className={cls.buyActions_btn}
                theme={ThemeButton.CARD}
              >
                {count > 0 && (
                  <p className={cls.buyActions_btn__count}>{count}</p>
                )}
                В корзину
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

              <div className={cls.buyActions_secondaruBtns}>
                <Button className={cls.secondaryBtn} theme={ThemeButton.CLEAR}>
                  <IconShare />
                  Поделиться
                </Button>
              </div>
            </div>

            <div className={cls.delivery}>
              <span>Данные о доставке:</span>
              <span>Самовывоз</span>
              <span>Курьером от 500 тг.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
