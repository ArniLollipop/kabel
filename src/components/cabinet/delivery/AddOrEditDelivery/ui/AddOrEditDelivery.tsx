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
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation();
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
            if (address && !errors?.address) {
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
              <p>{address ? t("changeAddress") : t("newAddress")}</p>
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
                <p className={cls.warning}>
                  Пример: Алматы, проспект Аль-Фараби, 21/1
                  <br />
                  Можете посмотреть в картах 2гис
                </p>

                <div className={cls.container_BtnContainer}>
                  <Button
                    theme={ThemeButton.CANCEL}
                    onClick={() => setIsOpen!(false)}
                    type="button"
                  >
                    {t("otmena")}
                  </Button>

                  <Button
                    onClick={handleSaveAddOrDelivery}
                    type="submit"
                    theme={ThemeButton.YELLOW}
                  >
                    {t("saveMent")}
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
