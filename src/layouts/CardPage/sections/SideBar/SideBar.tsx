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
import { useTranslation } from "react-i18next";
import Link from "next/link";

const cn = classNames.bind(cls);

interface SideBarProps {
  className?: string;
  setIsOpen?: (value: boolean) => void;
}

export const SideBar: FC<SideBarProps> = (props) => {
  const { className, setIsOpen } = props;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const { total_amount, items, delivery_price, entity } = useAppSelector(
    (state) => state.CartSlice
  );

  const [length, setLength] = useState<number>(0);
  const [bonusBalance, setBonusBalance] = useState<number>(0);

  const [addresses, setAddresses] = useState<any>();
  const [times, setTimes] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);
  const [date, setDate] = useState<any>();
  const [time, setTime] = useState<any>({ time_from: "", time_to: "" });
  const [salePoints, setSalePoints] = useState<any>([]);
  const [bonus, setBonus] = useState<boolean>(false);
  const [isEntity, setEntity] = useState<boolean>(false);
  const [bin, setBin] = useState<string>(entity.bin);
  const [current_account, setCurrent_account] = useState<string>(
    entity.current_account
  );
  const [entity_address, setEntity_address] = useState<string>(
    entity.entity_address
  );
  const [name_company, setName_company] = useState<string>(entity.name_company);

  async function getTime() {
    try {
      const res = await useHttp().get("/orders/orders/get_order_times/");
      setTimes(res.data.results);
    } catch (error) {}
  }

  async function getAddresses() {
    try {
      const res = await useHttp().get("users/user_addresses/my_addresses/");
      setAddresses(res.data.results);
    } catch (error) {}
  }

  async function getSalePoints() {
    try {
      const res = await useHttp().get("products/sale_points/");

      let temp = res.data;
      temp.push({ id: 667, name: t("delivery") });
      setSalePoints(temp);
    } catch {}
  }

  async function getBonuses() {
    try {
      const res = await useHttp().get("users/users/my_bonus_card/");
      setBonusBalance(res.data.balance);
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
    getBonuses();
  }, []);

  useEffect(() => {
    setBin(entity.bin);
    setCurrent_account(entity.current_account);
    setEntity_address(entity.entity_address);
    setName_company(entity.name_company);
  }, [entity]);

  async function handleOrder(values: any) {
    try {
      if (localStorage.getItem("user")) {
        const userId = JSON.parse(localStorage.getItem("user") || "");
        let data;
        if (isEntity) {
          data = {
            items: items,
            total_amount: total_amount,
            delivery_type:
              values.selectedDeliveryOption === t("delivery")
                ? "delivery"
                : "pickup",
            pay_type:
              values.selectedPayOption === "Kaspi Pay" ? "kaspi_pay" : "card",
            user: userId.id,
            user_addresses:
              values.selectedDeliveryOption === t("delivery")
                ? ""
                : values.selectedAddress,
            is_bonus_used: bonus,
            bin: bin,
            current_account: current_account,
            entity_address: entity_address,
            name_company: name_company,
          };
        } else {
          data = {
            items: items,
            total_amount: total_amount,
            delivery_type:
              values.selectedDeliveryOption === t("delivery")
                ? "delivery"
                : "pickup",
            pay_type:
              values.selectedPayOption === "Kaspi Pay" ? "kaspi_pay" : "card",
            user: userId.id,
            user_addresses:
              values.selectedDeliveryOption === t("delivery")
                ? ""
                : values.selectedAddress,
            is_bonus_used: bonus,
          };
        }

        const res = await useHttp().post("orders/orders/create_order/", data, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        });
        dispatch(setAmount(0));
        dispatch(setItems(null));
        if (res.data.equiring_page_url) {
          window.open(res.data.equiring_page_url);
        }
        if (values.selectedPayOption === "Kaspi Pay") {
          window.open("https://pay.kaspi.kz/pay/vgfoeb1c");
        }
      }
    } catch (error) {}
  }

  return (
    <Formik
      initialValues={{
        selectedDeliveryOption: "",
        selectedPayOption: "",
        selectedAddress: "",
        is_bonus_used: false,
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
                {t("garantia")}
              </span>

              <span className={cls.SideBar_adventages_icon}>
                <IconCardReturn />
                {t("usloviaVozvrata")}
              </span>

              <span className={cls.SideBar_adventages_icon}>
                <IconCardInsurance />
                {t("straxovanie")}
              </span>

              <hr />

              <span className={cls.SideBar_adventages_item}>
                <a href="" className={cls.SideBar_adventages_link}>
                  <IconCardGeoTag />
                  {t("samovivoz")}&nbsp;
                </a>
                {t("iz")} {salePoints && salePoints.length - 1} {t("punkti")}
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
                        name.includes(t("delivery"))
                          ? cls.SideBar_adventages_link
                          : "")
                      }
                    >
                      {name === t("delivery") ? <IconCardDelivery /> : ""}
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
                {t("footer.pay")}
              </span>
              {!(values.selectedDeliveryOption === t("delivery")) && (
                <span
                  className={(cls.SideBar_paymentMethods_cards, cls.radioBtn)}
                >
                  <label className={cls.SideBar_paymentMethods_label}>
                    <IconCash className={cls.SideBar_paymentMethods_icon} />
                    <Field
                      type="radio"
                      name="selectedPayOption"
                      value={t("nalichnimi")}
                      checked={values.selectedPayOption === t("nalichnimi")}
                      onChange={handleChange}
                    />
                    {t("nalichnimi")}
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
                      {text === "Картой онлайн" ? t("cardPayOnline") : text}
                    </label>
                  </span>
                );
              })}
            </div>

            {bonusBalance > 0 && (
              <div className={cls.SideBar_paymentMethods + " pb-5"}>
                <span className={cls.SideBar_paymentMethods_title}>
                  <svg
                    className={cls.SideBar_paymentMethods_icon}
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.4626 27.0428C22.4629 27.7548 16.0488 23.2413 14.8203 23.2314C13.5918 23.2215 7.10545 27.6312 6.11746 26.9032C5.12948 26.1752 7.45218 18.6975 7.08203 17.5295C6.71188 16.3615 0.50156 11.5727 0.890578 10.4108C1.27968 9.24882 9.12936 9.14089 10.129 8.42886C11.1287 7.71692 13.7769 0.347597 15.0055 0.357432C16.2338 0.367352 18.7625 7.77832 19.7504 8.50634C20.7384 9.23428 28.5854 9.4686 28.9557 10.6366C29.3258 11.8046 23.0389 16.4929 22.6498 17.6548C22.2608 18.8167 24.4622 26.3308 23.4626 27.0428Z"
                      fill="#F6BF0C"
                    />
                  </svg>
                  {t("spendBonus")}
                </span>
                <span
                  className={
                    (cls.SideBar_paymentMethods_cards, cls.radioBtn) +
                    " items-center mb-5"
                  }
                >
                  <label
                    className={cls.SideBar_paymentMethods_label + " !mb-0"}
                  >
                    <Field
                      type="checkbox"
                      name="isBonus"
                      value={"Накоплено: 1000б"}
                      checked={bonus}
                      onChange={() => {
                        total_amount > 1000 && setBonus(!bonus);
                      }}
                    />
                    <p className="mt-[6px]">
                      {t("bonuses")}:{" "}
                      {bonus
                        ? total_amount - 1000 >= bonusBalance
                          ? 0
                          : total_amount - 1000 < bonusBalance
                          ? bonusBalance - (total_amount - 1000)
                          : bonusBalance
                        : bonusBalance}{" "}
                      b
                    </p>
                  </label>
                </span>
                {total_amount < 1000 && (
                  <p className=" font-medium text-base text-center">
                    {t("nelzya1000Bonus")}
                  </p>
                )}
              </div>
            )}

            <div
              className={
                (cls.SideBar_payment, cls.SideBar_paymentMethods + " pb-5")
              }
            >
              <span
                className={
                  (cls.SideBar_paymentMethods_cards, cls.radioBtn) +
                  " items-center mb-5"
                }
              >
                <label
                  className={
                    cls.SideBar_paymentMethods_label +
                    " !mb-0 flex items-center gap-3"
                  }
                >
                  <Field
                    type="checkbox"
                    name="isBonus"
                    value={"entity"}
                    checked={isEntity}
                    onChange={() => setEntity(!isEntity)}
                  />
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1"
                  >
                    <path
                      d="M23.25 3H16.0226C15.774 1.90575 14.9216 0 12 0C9.07838 0 8.226 1.90575 7.97738 3H0.75C0.551088 3 0.360322 3.07902 0.21967 3.21967C0.0790176 3.36032 0 3.55109 0 3.75L0 17.25C0 17.4489 0.0790176 17.6397 0.21967 17.7803C0.360322 17.921 0.551088 18 0.75 18H23.25C23.4489 18 23.6397 17.921 23.7803 17.7803C23.921 17.6397 24 17.4489 24 17.25V3.75C24 3.55109 23.921 3.36032 23.7803 3.21967C23.6397 3.07902 23.4489 3 23.25 3ZM12 1.5C13.6256 1.5 14.2425 2.3415 14.478 3H9.5205C9.75675 2.34488 10.3759 1.5 12 1.5ZM22.5 4.5V7.5H1.5V4.5H22.5ZM10.875 9H13.125V9.75H10.875V9ZM1.5 16.5V9H9.375V10.5C9.375 10.6989 9.45402 10.8897 9.59467 11.0303C9.73532 11.171 9.92609 11.25 10.125 11.25H13.875C14.0739 11.25 14.2647 11.171 14.4053 11.0303C14.546 10.8897 14.625 10.6989 14.625 10.5V9H22.5V16.5H1.5Z"
                      fill="#00ABC1"
                    />
                  </svg>

                  <p className="mt-[6px]">{t("entity")}</p>
                </label>
              </span>
              {isEntity && (
                <div className="flex items-center flex-col gap-[10px] mb-[15px] mt-[5px]">
                  <input
                    type="text"
                    placeholder="БИН"
                    value={bin}
                    className="border-none outline-none p-3 rounded-[10px] bg-[#F8F8F9] w-full font-medium text-base placeholder:text-[#C0C0C0]"
                    onChange={(e: any) => setBin(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="РАСЧЕТНЫЙ СЧЕТ (ИИК)"
                    value={current_account}
                    className="border-none outline-none p-3 rounded-[10px] bg-[#F8F8F9] w-full font-medium text-base placeholder:text-[#C0C0C0]"
                    onChange={(e: any) => setCurrent_account(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="АДРЕС ЮР ЛИЦА"
                    value={entity_address}
                    className="border-none outline-none p-3 rounded-[10px] bg-[#F8F8F9] w-full font-medium text-base placeholder:text-[#C0C0C0]"
                    onChange={(e: any) => setEntity_address(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder={t("name_company") || "НАЗВАНИЕ КОМПАНИИ"}
                    value={name_company}
                    className="border-none outline-none p-3 rounded-[10px] bg-[#F8F8F9] w-full font-medium text-base placeholder:text-[#C0C0C0]"
                    onChange={(e: any) => setName_company(e.target.value)}
                  />
                </div>
              )}

              <span className={cls.SideBar_payment_title}>{t("pay")}</span>

              <hr />

              <div className={cls.SideBar_payment_table}>
                {/* <span>Название</span>
                <span className={cls.SideBar_payment_sum}>Провод ПуГВнг (А)- LS</span> */}
                <div className="flex">
                  <span>{t("countCart")}</span>
                  <span className={cls.SideBar_payment_sum}>
                    {items ? items.length : 0}
                  </span>
                </div>
                <div className="flex">
                  <span>{t("allLength")}</span>
                  <span className={cls.SideBar_payment_sum}>{length}</span>
                </div>
                <div className="flex">
                  <span>{t("sumForPay")}</span>
                  <span className={cls.SideBar_payment_sum}>
                    {bonus
                      ? total_amount - bonusBalance >= 1000
                        ? total_amount - bonusBalance
                        : 1000
                      : total_amount}{" "}
                    ₸
                  </span>
                </div>
                <div
                  className={
                    values.selectedDeliveryOption === t("delivery")
                      ? " flex"
                      : "hidden"
                  }
                >
                  <span>{t("payDostavka")}</span>
                  <span className={cls.SideBar_payment_sum}>
                    {delivery_price === 0 ? t("free") : delivery_price + "₸"}
                  </span>
                </div>
              </div>

              {values.selectedDeliveryOption.includes(t("delivery")) && (
                <div>
                  <div className={cls.SideBar_payment_address}>
                    <IconCardGeoTag textColor="#39424B" />

                    <div>
                      <p>{t("dostavka")}</p>
                      <Link
                        href="/cabinet/delivery"
                        className="text-[#00ABC2] text-sm font-medium p-0 bg-transparent border-none cursor-pointer"
                      >
                        Добавить адрес
                      </Link>
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
                disabled={total_amount < 1000}
                type="submit"
                theme={ThemeButton.YELLOW}
                className={cls.btn}
                onClick={() => {
                  handleOrder(values);
                }}
              >
                {t("makeZakaz")}
              </Button>
              {total_amount < 1000 && (
                <p className="mt-4 font-medium text-base text-center">
                  {t("nelzya1000")}
                </p>
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
