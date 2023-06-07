// packages
import { FC, useEffect, useRef, useState } from "react";
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
import Script from "next/script";
import { YMaps, Map, SearchControl } from "@pbe/react-yandex-maps";

let cn = classNames.bind(cls);

interface AddOrEditDeliveryProps {
  className: string;
  setIsOpen: any;
  address: string;
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

  const searchRef = useRef(null);

  useEffect(() => {
    console.log(searchRef.current);
  }, [searchRef]);

  useEffect(() => {
    const temp = document.querySelector(
      "#setAddress"
    ) as HTMLInputElement | null;
    if (temp) {
      temp.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const [addressInput, setAddress] = useState<String>(address || "");
  const [lonInput, setLon] = useState<String>("");
  const [latInput, setLat] = useState<String>("");
  const [phone, setPhone] = useState<String>("");

  console.log(addressInput, "asdasdasd");

  return (
    <div id="setAddress" className={cn(cls.AddOrEditDelivery, className)}>
      <Formik
        initialValues={{
          address: address ? address : "",
          apartment: apartment ? apartment : 0,
          floor: floor ? floor : 0,
          house: house ? house : 0,
          phone_number: phone_number ? phone_number : "",
          lat: "",
          lon: "",
        }}
        onSubmit={(values: any) => {
          console.log(values);
        }}
        validationSchema={deliveryAddressSchema}
      >
        {({ values, touched, errors, handleChange, handleBlur }: any) => {
          const handleSaveAddOrDelivery = async () => {
            if (address) {
              await useHttp()
                .put("users/user_addresses/" + id + "/", {
                  address: document.getElementById("address")
                    ? (document.getElementById("address") as HTMLInputElement)
                        .value
                    : "",
                  longitude: document.getElementById("lontitude")
                    ? (document.getElementById("lontitude") as HTMLInputElement)
                        .value
                    : "",
                  latitude: document.getElementById("latitude")
                    ? (document.getElementById("latitude") as HTMLInputElement)
                        .value
                    : "",
                  phone_number: document.getElementById("phone_number")
                    ? (
                        document.getElementById(
                          "phone_number"
                        ) as HTMLInputElement
                      ).value
                    : "",
                  user: authUser?.id,
                })
                .then(() => {
                  setIsOpen(false);
                });
            } else {
              await useHttp()
                .post(
                  "users/user_addresses/",
                  {
                    address: document.getElementById("address")
                      ? (document.getElementById("address") as HTMLInputElement)
                          .value
                      : "",
                    longitude: document.getElementById("lontitude")
                      ? (
                          document.getElementById(
                            "lontitude"
                          ) as HTMLInputElement
                        ).value
                      : "",
                    latitude: document.getElementById("latitude")
                      ? (
                          document.getElementById(
                            "latitude"
                          ) as HTMLInputElement
                        ).value
                      : "",
                    phone_number: document.getElementById("phone_number")
                      ? (
                          document.getElementById(
                            "phone_number"
                          ) as HTMLInputElement
                        ).value
                      : "",
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
          };

          return (
            <div className={cls.container}>
              <p>{address ? t("changeAddress") : t("newAddress")}</p>

              <Form>
                <input
                  className="w-full hidden border border-solid border-[#D2D8DE] rounded-[30px] px-[18px] py-[14px] text-base placeholder:text-[#AAB5C0] font-medium"
                  onChange={(e) => {
                    setAddress(e.target.value);
                    values.address === e.target.value;
                    console.log("address");
                  }}
                  readOnly
                  value={addressInput as string}
                  type="text"
                  id="address"
                />

                <input
                  className="w-full border border-solid border-[#D2D8DE] rounded-[30px] px-[18px] py-[14px] text-base placeholder:text-[#AAB5C0] font-medium"
                  id="phone_number"
                  name="phone_number"
                  type="text"
                  placeholder="+7 (___) ___ __ __"
                />

                <InputInstance
                  mask={maskForPhone}
                  theme={EInputInstanceTheme.PROFILE}
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  placeholder="+7 (___) ___ __ __"
                  value={values.phone_number as number}
                  errors={errors.phone_number}
                  touched={touched.phone_number}
                  className={cls.phoneNumberInput + " hidden"}
                />

                <input
                  className="hidden"
                  value={latInput as string}
                  type="text"
                  id="latitude"
                />
                <input
                  className="hidden"
                  value={lonInput as string}
                  type="text"
                  id="lontitude"
                />
                <p className={cls.warning}>{t("findAddress")}</p>

                {/* <div id="map1" className="h-[300px] w-full mt-6"></div> */}
                {/* написано на нативном жс так как, некст не поддерживал яндекс мапы. Нативка написана в _document.tsx */}
                {/* <Script
                  dangerouslySetInnerHTML={{
                    __html: `
                    getMap2(43.2446, 76.9114);
              `,
                  }}
                ></Script> */}
                <div></div>
                <YMaps
                  query={{ apikey: "18378de5-507b-4d2a-a7c7-ca2fb2be7f0b" }}
                >
                  <Map
                    className="map-small"
                    defaultState={{
                      center: [43.2446, 76.9114],
                      zoom: 13,
                      controls: [],
                    }}
                  >
                    <SearchControl
                      options={{ float: "left" }}
                      instanceRef={(ref: any) => {
                        if (ref) searchRef.current = ref;
                      }}
                    />
                  </Map>
                </YMaps>

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
