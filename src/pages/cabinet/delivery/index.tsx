/** @format */

// packages
import { useEffect, useState } from "react";

// assets
import cls from "./index.module.scss";
import {
  IconPhone,
  IconCardCounterPlus,
  IconCabinetDelivery,
  IconCabinetProfile,
  IconCabinetEdit,
} from "@/assets/icons";

// components
import {
  ActiveCabinetPageEnum,
  CabinetLayout,
} from "@/layouts/CabinetLayot/CabinetLayout";
import { Button } from "@/UI/Button";
import { ThemeButton } from "@/UI/Button/ui/Button";
import { AddOrEditDelivery } from "@/components/cabinet/delivery/AddOrEditDelivery";

// Libs
import classNames from "classnames/bind";
import { useHttp } from "@/hooks/useHttp";

const cn = classNames.bind(cls);

import { useTranslation } from "react-i18next";
import Head from "next/head";

export default function deliveryPage() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [addresses, setAddresses] = useState<any>();
  const [address, setAddress] = useState<any>({});

  async function getAddresses() {
    const res = await useHttp().get("users/user_addresses/my_addresses/");
    setAddresses(res.data.results);
  }

  async function deleteAddress(id: Number) {
    const res = await useHttp().delete("users/user_addresses/" + id + "/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
    getAddresses();
  }

  async function handleSetDefault(id: Number) {
    const res = await useHttp().patch(
      "users/user_addresses/change_to_default/",
      { is_default: true, id: id },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      }
    );
    getAddresses();
  }

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const temp = JSON.parse(localStorage.getItem("user") || "");
      setName(temp?.first_name + " " + temp?.last_name);
    }
    getAddresses();
  }, [isOpen]);

  return (
    <CabinetLayout
      activePage={ActiveCabinetPageEnum.DELIVERY}
      className={cls.delivery}>
      <Head>
        <title>{t("title_cabinet_delivery")}</title>
        <meta
          name='description'
          content={t("description_cabinet_delivery") as string}
        />
      </Head>
      {isOpen ? (
        <AddOrEditDelivery
          className={cls.delivery_form}
          setIsOpen={setIsOpen}
          {...address}
        />
      ) : (
        <>
          <Button
            onClick={() => {
              setIsOpen(true);
              setAddress("");
            }}
            className={cls.delivery_addBtn}
            theme={ThemeButton.CLEAR}>
            <IconCardCounterPlus />
            {t("add")}
          </Button>

          <ul className={cls.delivery_adressList}>
            {addresses?.map((el: any) => {
              return (
                <li key={el.id} className={cls.delivery_adressListItem}>
                  <h2>{t("dostavka")}</h2>
                  <span>
                    <IconCabinetProfile fillColor='#F6BF0C' />
                    {name}
                  </span>
                  <span>
                    <IconPhone textColor='#F6BF0C' />
                    {el.phone_number}
                  </span>
                  <span>
                    <IconCabinetDelivery fillColor='#F6BF0C' />
                    {el.address}
                  </span>

                  <div className={cls.delivery_btns}>
                    <label
                      onClick={() => handleSetDefault(el.id)}
                      className={cls.delivery_btns_label}
                      htmlFor=''>
                      <input
                        type='radio'
                        name='default'
                        checked={el.is_default}
                      />
                      {t("default")}
                    </label>
                    <Button
                      onClick={() => {
                        setIsOpen(true);
                        setAddress(el);
                      }}
                      className={cn(
                        cls.delivery_editBtn,
                        cls.delivery_btns_edit
                      )}
                      theme={ThemeButton.CLEAR}>
                      <IconCabinetEdit /> {t("update")}
                    </Button>
                    <Button
                      onClick={() => {
                        deleteAddress(el.id);
                      }}
                      className={cn(
                        cls.delivery_removeBtn,
                        cls.delivery_btns_delete
                      )}
                      theme={ThemeButton.CLEAR}>
                      {t("delete")}
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </CabinetLayout>
  );
}
