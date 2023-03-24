// packages
import { FC } from "react";
import classNames from "classnames";
import { Form, Formik } from "formik";

// assets
import cls from "./AddOrEditDelivery.module.scss";

// components
import { InputInstance } from "@/shared/formElements/InputInstance";
import { EInputInstanceTheme } from "@/shared/formElements/InputInstance/ui/InputInstance";
import { Button, ThemeButton } from "@/UI/Button/ui/Button";

// mask
import { maskForPhone } from "@/helpers/masks";

// validation
import { deliveryAddressSchema } from "@/helpers/validation";

let cn = classNames.bind(cls);

interface AddOrEditDeliveryProps {
  className?: string;
  setIsOpen?: (value: boolean) => void;
}

export const AddOrEditDelivery: FC<AddOrEditDeliveryProps> = (props) => {
  const { className, setIsOpen } = props;

  return (
    <div className={cn(cls.AddOrEditDelivery, className)}>
      <Formik
        initialValues={{
          address: "",
          apartment: "",
          floor: "",
          home: "",
          phoneNumber: "",
        }}
        validationSchema={deliveryAddressSchema}
        onSubmit={(values) => {
          console.log("values is: ", {
            ...values,
          });
        }}
      >
        {({ values, touched, errors, handleChange, handleBlur }) => {
          const handleSaveAddOrDelivery = () => {
            const { address, apartment, floor, home, phoneNumber } = touched;
            if (
              address &&
              apartment &&
              floor &&
              home &&
              phoneNumber &&
              !errors?.address &&
              !errors?.apartment &&
              !errors?.floor &&
              !errors?.home &&
              !errors?.phoneNumber
            ) {
              setIsOpen!(false);
            }
          };

          return (
            <div className={cls.container}>
              <p>Новый адрес</p>
              <Form>
                <InputInstance
                  theme={EInputInstanceTheme.PROFILE}
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Адрес"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  errors={errors.address}
                  touched={touched.address}
                  className={cls.addressInput}
                />

                <div className={cls.container_ApNFlNHmInputs}>
                  <InputInstance
                    theme={EInputInstanceTheme.PROFILE}
                    type="number"
                    id="apartment"
                    name="apartment"
                    placeholder="Квартира"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.apartment}
                    errors={errors.apartment}
                    touched={touched.apartment}
                    className={cls.apartmentInput}
                  />

                  <InputInstance
                    theme={EInputInstanceTheme.PROFILE}
                    type="number"
                    id="floor"
                    name="floor"
                    placeholder="Этаж"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.floor}
                    errors={errors.floor}
                    touched={touched.floor}
                    className={cls.floorInput}
                  />

                  <InputInstance
                    theme={EInputInstanceTheme.PROFILE}
                    type="number"
                    id="home"
                    name="home"
                    placeholder="Дом"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.home}
                    errors={errors.home}
                    touched={touched.home}
                    className={cls.homeInput}
                  />
                </div>

                <InputInstance
                  mask={maskForPhone}
                  theme={EInputInstanceTheme.PROFILE}
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="+7 (___) ___ __ __"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                  errors={errors.phoneNumber}
                  touched={touched.phoneNumber}
                  className={cls.phoneNumberInput}
                />

                <div className={cls.container_BtnContainer}>
                  <Button
                    theme={ThemeButton.CANCEL}
                    onClick={() => setIsOpen!(false)}
                    type="button"
                  >
                    Отменить
                  </Button>

                  <Button
                    onClick={handleSaveAddOrDelivery}
                    type="submit"
                    theme={ThemeButton.YELLOW}
                  >
                    Сохранить
                  </Button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};
