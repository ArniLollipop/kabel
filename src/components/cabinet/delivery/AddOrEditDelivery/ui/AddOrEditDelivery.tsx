// packages
import { FC, useEffect } from "react";
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

import { useHttp } from "@/hooks/useHttp";
import { useAppSelector } from "@/hooks/store";

let cn = classNames.bind(cls);

interface AddOrEditDeliveryProps {
  className: string;
  setIsOpen: any;
  address: String;
  apartment: Number;
  floor: Number;
  house: Number;
  phone_number: Number;
  id: Number;
}

export const AddOrEditDelivery: FC<AddOrEditDeliveryProps> = (props) => {
  const { user: authUser } = useAppSelector((state) => state.AuthSlice);
  const {
    className,
    setIsOpen,
    address,
    apartment,
    floor,
    house,
    phone_number,
    id,
  } = props;

  useEffect(() => {
    const temp = document.querySelector(
      "#setAddress"
    ) as HTMLInputElement | null;
    if (temp) {
      temp.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  return (
    <div id="setAddress" className={cn(cls.AddOrEditDelivery, className)}>
      <Formik
        initialValues={{
          address: address ? address : "",
          apartment: apartment ? apartment : 0,
          floor: floor ? floor : 0,
          house: house ? house : 0,
          phone_number: phone_number ? phone_number : "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={deliveryAddressSchema}
      >
        {({ values, touched, errors, handleChange, handleBlur }) => {
          const handleSaveAddOrDelivery = async () => {
            const { address, apartment, floor, house, phone_number } = touched;
            if (
              address &&
              apartment &&
              floor &&
              house &&
              phone_number &&
              !errors?.address &&
              !errors?.apartment &&
              !errors?.floor &&
              !errors?.house &&
              !errors?.phone_number
            ) {
              if (address && authUser?.id) {
                await useHttp()
                  .put("users/user_addresses/" + id + "/", {
                    ...values,
                    user: authUser?.id,
                  })
                  .then(() => {
                    setIsOpen(false);
                  });
              } else if (authUser?.id) {
                await useHttp()
                  .post(
                    "users/user_addresses/",
                    {
                      ...values,
                      user: authUser?.id,
                    },
                    {
                      headers: {
                        Authorization:
                          "Bearer " + localStorage.getItem("access_token"),
                      },
                    }
                  )
                  .then(() => {
                    setIsOpen(false);
                  });
              }
            }
          };

          return (
            <div className={cls.container}>
              <p>{address ? "Изменить адрес" : "Новый адрес"}</p>
              <Form>
                <InputInstance
                  theme={EInputInstanceTheme.PROFILE}
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Адрес"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address as string}
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
                    value={values.apartment as number}
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
                    value={values.floor as number}
                    errors={errors.floor}
                    touched={touched.floor}
                    className={cls.floorInput}
                  />

                  <InputInstance
                    theme={EInputInstanceTheme.PROFILE}
                    type="number"
                    id="house"
                    name="house"
                    placeholder="Дом"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.house as number}
                    errors={errors.house}
                    touched={touched.house}
                    className={cls.homeInput}
                  />
                </div>

                <InputInstance
                  mask={maskForPhone}
                  theme={EInputInstanceTheme.PROFILE}
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  placeholder="+7 (___) ___ __ __"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone_number as number}
                  errors={errors.phone_number}
                  touched={touched.phone_number}
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
