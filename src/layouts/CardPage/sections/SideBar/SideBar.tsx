import { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import cls from "./SideBar.module.scss";
import {
  IconCardGarant,
  IconCardInsurance,
  IconCardReturn,
  IconCardGeoTag,
  IconSidebarPaymentMethods,
} from "@/assets/icons";
import { Button, ThemeButton } from "@/UI/Button/ui/Button";
import { Field, Form, Formik } from "formik";
import { CardDeliveryData, CardPayData } from "@/data/CardRadiobuttonsData";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { useHttp } from "@/hooks/useHttp";
import { setAmount, setItems } from "@/store/slices/CartSlice";
import {
  IconCardDelivery,
  IconSideBarCard,
  IconSideBarKaspi,
  IconCardTenge,
  IconCash,
} from "@/assets/icons/cardIcons";

const cn = classNames.bind(cls);

interface SideBarProps {
  className?: string;
  setIsOpen?: (value: boolean) => void;
}

export const SideBar: FC<SideBarProps> = (props) => {
  const { className, setIsOpen } = props;

  const dispatch = useAppDispatch();
  const { total_amount, items } = useAppSelector((state) => state.CartSlice);

  const [length, setLength] = useState<number>(0);

  const [addresses, setAddresses] = useState<any>();
  const [times, setTimes] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);
  const [date, setDate] = useState<any>();
  const [time, setTime] = useState<any>({ time_from: "", time_to: "" });
  const [salePoints, setSalePoints] = useState<any>([]);

  async function getTime() {
    try {
      const res = await useHttp().get("/orders/orders/get_order_times/");
      setTimes(res.data.results);
    } catch (error) {}
  }

  async function getAddresses() {
    try {
      const res = await useHttp().get("users/user_addresses/");
      setAddresses(res.data.results);
    } catch (error) {}
  }

  async function getSalePoints() {
    try {
      const res = await useHttp().get("products/sale_points/");

      let temp = res.data;
      temp.push({ id: 667, name: "Доставка" });
      setSalePoints(temp);
    } catch {}
  }

  useEffect(() => {
    setLength(0);
    if (items) {
      items.map((el: any) => {
        setLength((prev) => prev + el.length);
      });
    }
  }, [items, total_amount]);

  useEffect(() => {
    getTime();
    getAddresses();
    getSalePoints();
  }, []);

  async function handleOrder(values: any) {
    try {
      if (localStorage.getItem("user")) {
        const userId = JSON.parse(localStorage.getItem("user") || "");

        const data = {
          items: items,
          total_amount: total_amount,
          delivery_type:
            values.selectedDeliveryOption === "Доставка"
              ? "delivery"
              : "pickup",
          pay_type:
            values.selectedPayOption === "Kaspi Pay" ? "kaspi_pay" : "card",
          user: userId.id,
          user_addresses:
            values.selectedDeliveryOption === "Доставка"
              ? ""
              : values.selectedAddress,
        };
        const res = await useHttp().post("orders/orders/create_order/", data, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        });
        dispatch(setAmount(0));
        dispatch(setItems(null));
        window.location.href = res.data.equiring_page_url;
      }
    } catch (error) {}
  }

  return (
    <Formik
      initialValues={{
        selectedDeliveryOption: "",
        selectedPayOption: "",
        selectedAddress: "",
        // address: "",
        // apartment: 0,
        // floor: 0,
        // house: 0,
        // id: 0,
        // is_default: true,
        // phone_number: "",
        // user: 0,
      }}
      onSubmit={(values) => {
        console.log("====================================");
        console.log(values);
        console.log("====================================");
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
          <div className={cn(cls.SideBar, className)}>
            <div className={cls.SideBar_adventages + " " + cls.mb}>
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
                из {salePoints && salePoints.length - 1} пунктов
              </span>

              {salePoints?.map((option: any) => {
                const { id, name } = option;

                return (
                  <span
                    key={id}
                    className={(cls.SideBar_adventages_item, cls.radioBtn)}
                  >
                    <label
                      className={
                        (cls.SideBar_adventages,
                        name.includes("Доставка")
                          ? cls.SideBar_adventages_link
                          : "")
                      }
                    >
                      {name === "Доставка" ? <IconCardDelivery /> : ""}
                      <Field
                        type="radio"
                        name="selectedDeliveryOption"
                        value={name}
                        checked={values.selectedDeliveryOption === name}
                        onChange={handleChange}
                      />
                      {name}
                    </label>
                  </span>
                );
              })}
            </div>

            <div className={cls.SideBar_paymentMethods}>
              <span className={cls.SideBar_paymentMethods_title}>
                <IconSidebarPaymentMethods
                  className={cls.SideBar_paymentMethods_icon}
                />
                Способы оплаты
              </span>
              {!(values.selectedDeliveryOption === "Доставка") && (
                <span
                  className={(cls.SideBar_paymentMethods_cards, cls.radioBtn)}
                >
                  <label className={cls.SideBar_paymentMethods_label}>
                    <IconCash className={cls.SideBar_paymentMethods_icon} />
                    <Field
                      type="radio"
                      name="selectedPayOption"
                      value={"Наличными"}
                      checked={values.selectedPayOption === "Наличными"}
                      onChange={handleChange}
                    />
                    Наличными
                  </label>
                </span>
              )}

              {CardPayData.map((option) => {
                const { id, text, cardPayIcon: CardPayIcon } = option;
                return (
                  <span
                    key={id}
                    className={(cls.SideBar_paymentMethods_cards, cls.radioBtn)}
                  >
                    <label className={cls.SideBar_paymentMethods_label}>
                      <CardPayIcon
                        className={cls.SideBar_paymentMethods_icon}
                      />
                      <Field
                        type="radio"
                        name="selectedPayOption"
                        value={text}
                        checked={values.selectedPayOption === text}
                        onChange={handleChange}
                      />
                      {text}
                    </label>
                  </span>
                );
              })}
            </div>
            <div className={cls.SideBar_payment}>
              <span className={cls.SideBar_payment_title}>Оплата</span>

              <hr />

              <div className={cls.SideBar_payment_table}>
                {/* <span>Название</span>
                <span className={cls.SideBar_payment_sum}>Провод ПуГВнг (А)- LS</span> */}
                <div className="flex">
                  <span>Количество</span>
                  <span className={cls.SideBar_payment_sum}>
                    {items ? items.length : 0}
                  </span>
                </div>
                <div className="flex">
                  <span>Общая Длина</span>
                  <span className={cls.SideBar_payment_sum}>{length}</span>
                </div>
                <div className="flex">
                  <span>Сумма к оплате</span>
                  <span className={cls.SideBar_payment_sum}>
                    {total_amount} ₸
                  </span>
                </div>
                <div className="flex">
                  <span>Стоимость доставки</span>
                  <span className={cls.SideBar_payment_sum}>
                    {values.selectedDeliveryOption.includes("Доставка")
                      ? "500"
                      : 0}{" "}
                    ₸
                  </span>
                </div>
              </div>

              {values.selectedDeliveryOption.includes("Доставка") && (
                <div>
                  <div className={cls.SideBar_payment_address}>
                    <IconCardGeoTag textColor="#39424B" />

                    <div>
                      <p>Адрес доставки</p>
                    </div>
                  </div>
                  <div className={cls.SideBar_adventages + " " + cls.address}>
                    {addresses &&
                      addresses?.map((el: any) => {
                        return (
                          <span
                            key={el.id}
                            className={
                              (cls.SideBar_paymentMethods_cards, cls.radioBtn)
                            }
                          >
                            <label
                              onClick={() =>
                                console.log(values.selectedAddress, el.id)
                              }
                              className={cls.SideBar_paymentMethods_label}
                            >
                              <Field
                                type="radio"
                                name="selectedAddress"
                                value={el.id.toString()}
                                checked={
                                  values.selectedAddress === el.id.toString()
                                }
                                onChange={handleChange}
                              />
                              {el.address}
                            </label>
                          </span>
                        );
                      })}
                  </div>
                </div>
              )}

              <hr />

              {/* {values.selectedDeliveryOption.includes("Доставка") && (
                <div className={cls.SideBar_payment_datePicker}>
                  <h4>Дата доставки</h4>
                  <div className={cls.dateSelect}>
                    <div onClick={() => setOpen(!open)} className={cls.dateBtn}>
                      {!date ? "Выбрать дату" : date.date}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="#39424B"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    {open && (
                      <div className={cls.dateChoices}>
                        {times.map((el: any) => {
                          return (
                            <div
                              onClick={() => {
                                setDate(el);
                                setOpen(false);
                                setTime({
                                  time_from: "",
                                  time_to: "",
                                });
                              }}
                              className={cls.dateChoice}
                            >
                              {el.date}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <h4>Время доставки</h4>
                  {date && (
                    <div
                      className={cls.SideBar_payment_datePicker_btnContainer}
                    >
                      {date &&
                        date.times.map((el: any) => {
                          return (
                            <Button
                              onClick={() => {
                                setTime({
                                  time_from: el.time_from,
                                  time_to: el.time_to,
                                });
                              }}
                              type="button"
                              theme={ThemeButton.CLEAR}
                              className={
                                time.time_from !== el.time_from
                                  ? cls.SideBar_payment_datePicker_defaultBtn
                                  : cls.SideBar_payment_datePicker_pickedBtn
                              }
                            >
                              {el.time_from}-{el.time_to}
                            </Button>
                          );
                        })}
                    </div>
                  )}
                </div>
              )} */}

              <Button
                disabled={total_amount === 0}
                type="submit"
                theme={ThemeButton.YELLOW}
                className={cls.btn}
                onClick={() => {
                  handleOrder(values);
                }}
              >
                Оформить заказ
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
