import { FC } from "react";
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

const cn = classNames.bind(cls);

interface SideBarProps {
  className?: string;
  setIsOpen?: (value: boolean) => void;
}

export const SideBar: FC<SideBarProps> = (props) => {
  const { className, setIsOpen } = props;

  return (
    <Formik
      initialValues={{ selectedDeliveryOption: "Улица Шевченко", selectedPayOption: "Kaspi Pay" }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
          <div className={cn(cls.SideBar, className)}>
            <div className={cls.SideBar_adventages}>
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
                из 2 пунктов
              </span>

              {CardDeliveryData.map((option) => {
                const {
                  id,
                  text,
                  cardDeliveryIconBus: CardDeliveryIconBus,
                  cardDeliveryIconTenge: CardDeliveryIconTenge,
                } = option;

                return (
                  <span key={id} className={(cls.SideBar_adventages_item, cls.radioBtn)}>
                    <label
                      className={
                        (cls.SideBar_adventages,
                        text.includes("Доставка") ? cls.SideBar_adventages_link : "")
                      }
                    >
                      {CardDeliveryIconBus && <CardDeliveryIconBus />}
                      <Field
                        type="radio"
                        name="selectedDeliveryOption"
                        value={text}
                        checked={values.selectedDeliveryOption === text}
                        onChange={handleChange}
                      />
                      {text}
                      {CardDeliveryIconTenge && <CardDeliveryIconTenge />}
                    </label>
                  </span>
                );
              })}
            </div>

            <div className={cls.SideBar_paymentMethods}>
              <span className={cls.SideBar_paymentMethods_title}>
                <IconSidebarPaymentMethods className={cls.SideBar_paymentMethods_icon} />
                Способы оплаты
              </span>

              {CardPayData.map((option) => {
                const { id, text, cardPayIcon: CardPayIcon } = option;
                return (
                  <span key={id} className={(cls.SideBar_paymentMethods_cards, cls.radioBtn)}>
                    <label className={cls.SideBar_paymentMethods_label}>
                      <CardPayIcon className={cls.SideBar_paymentMethods_icon} />
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
                <span>Название</span>
                <span className={cls.SideBar_payment_sum}>Провод ПуГВнг (А)- LS</span>
                <span>Товар</span>
                <span className={cls.SideBar_payment_sum}>3 м</span>
                <span>Сумма к оплате</span>
                <span className={cls.SideBar_payment_sum}>500₸</span>
                <span>Стоимость доставки</span>
                <span className={cls.SideBar_payment_sum}>2450₸</span>
              </div>

              {values.selectedDeliveryOption.includes("Доставка") && (
                <div className={cls.SideBar_payment_address}>
                  <IconCardGeoTag textColor="#39424B" />

                  <div>
                    <p>Адрес доставки</p>
                    <small>New Esentai town, кв. 15</small>
                    <br />
                    <Button
                      className={cls.SideBar_payment_btn}
                      type="button"
                      theme={ThemeButton.CLEAR}
                      onClick={() => setIsOpen!(true)}
                    >
                      Изменить адрес
                    </Button>
                  </div>
                </div>
              )}

              <hr />

              {values.selectedDeliveryOption.includes("Доставка") && (
                <div className={cls.SideBar_payment_datePicker}>
                  <h4>Дата доставки</h4>
                  <input type="date" />

                  <h4>Время доставки</h4>

                  <div className={cls.SideBar_payment_datePicker_btnContainer}>
                    <Button type="button" theme={ThemeButton.YELLOW}>
                      14:00 - 15:00
                    </Button>

                    <Button
                      className={cls.SideBar_payment_datePicker_defaultBtn}
                      type="button"
                      theme={ThemeButton.CLEAR}
                    >
                      15:00 - 16:00
                    </Button>
                    <Button
                      className={cls.SideBar_payment_datePicker_defaultBtn}
                      type="button"
                      theme={ThemeButton.CLEAR}
                    >
                      17:00 - 18:00
                    </Button>
                    <Button
                      className={cls.SideBar_payment_datePicker_defaultBtn}
                      type="button"
                      theme={ThemeButton.CLEAR}
                    >
                      18:00 - 19:00
                    </Button>
                  </div>
                </div>
              )}

              <Button type="submit" theme={ThemeButton.YELLOW} className={cls.btn}>
                Оформить заказ
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
