import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { MainLayout } from "@/layouts/MainLayout";
import { Title } from "@/UI/Title/Title";
import {
  IconContactsClock,
  IconContactsGeo,
  IconContactsMail,
  IconContactsPhone,
  IconContactsTg,
  IconContactsWa,
} from "@/assets/icons";
import { ActiveHeaderPage } from "@/components/header/Header";
import { MapComponent } from "@/components/map/MapComponent";
import { useHttp } from "@/hooks/useHttp";
import { useEffect, useState } from "react";
const enum endpoints {
  getContacts = "/main/contacts/",
}

const cn = classNames.bind(cls);

export interface Coords {
  coordsAlmaty: {
    lng: number;
    lat: number;
  };
  coordsAstana: {
    lng: number;
    lat: number;
  };
}

import { useTranslation } from "react-i18next";

function contactsPage({ coordsAlmaty, coordsAstana }: Coords) {
  const [contacts, setContacts] = useState<any>();
  const { lat: latAlmaty, lng: lngAlmaty } = coordsAlmaty;
  const { lat: latAstana, lng: lngAstana } = coordsAstana;

  async function getContacts() {
    const res = await useHttp().get(`${endpoints.getContacts}`);
    setContacts(res.data.results);
  }

  const { t } = useTranslation();

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <MainLayout activePage={ActiveHeaderPage.CONTACTS}>
      <div className={cn(cls.contactsPage)}>
        <Title className={cls.contactsPage_title}>{t("list.contacts")}</Title>
        <div className={cls.contactsPage_wrapper}>
          {contacts?.map((el: any) => {
            return (
              <div className={cls.contactsPage_item}>
                {/* Map implementation */}
                <div className={cls.contactsPage_imageWrapper}>
                  {contacts && (
                    <MapComponent
                      coords={{ lat: el.x_coordinate, lon: el.y_coordinate }}
                    />
                  )}
                </div>
                {/* Text datas */}
                <div className={cls.contactsPage_text}>
                  <span className={cls.contactsPage_city}>
                    {t("city")}: {el.city}
                  </span>
                  <div className={cls.contactsPage_textItems}>
                    <div className={cls.contactsPage_textItem}>
                      <IconContactsClock />
                      <div>
                        <p className={cls.subtitle}>Офис</p>
                        <span className={cls.descr}>{el.time}</span>
                      </div>
                    </div>

                    <div className={cls.contactsPage_textItem}>
                      <IconContactsGeo />
                      <div>
                        <p className={cls.subtitle}>{t("officeAddress")}</p>
                        <span className={cls.descr}>{el.address}</span>
                      </div>
                    </div>

                    <div
                      className={cn(
                        cls.contactsPage_textItem,
                        cls.contactsPage_mail
                      )}
                    >
                      <IconContactsMail />
                      <div>
                        <a className={cls.descr} href={"mailto:" + el.mail}>
                          {el.email}
                        </a>
                      </div>
                    </div>

                    <div
                      className={cn(
                        cls.contactsPage_textItem,
                        cls.contactsPage_phones
                      )}
                    >
                      <IconContactsPhone />
                      <div>
                        <p className={cls.subtitle}>{t("getZaiavka")}</p>
                        {el.contacts?.map((phone: any) => {
                          return (
                            <a
                              className={cls.descr}
                              href={"tel:" + phone.phone_number}
                            >
                              {phone.phone_number}
                            </a>
                          );
                        })}
                      </div>
                    </div>

                    <div className={cls.contactsPage_contactUs}>
                      <p className={cls.subtitle}>{t("contactUs")}</p>
                      <div>
                        <a href={el.telegram_url}>
                          <IconContactsTg />
                        </a>
                        <a href={el.whatsapp_url}>
                          <IconContactsWa />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const res = await useHttp().get(`${endpoints.getContacts}`);
  const urlAlmaty = `https://maps.googleapis.com/maps/api/geocode/json?address=${"Тлендиева 94"}&key=${"AIzaSyAMUNLqIdfEPwq-XpOnlJJK3H2BmVFFf5k"}`;
  const urlAstana = `https://maps.googleapis.com/maps/api/geocode/json?address=${"Тлендиева 94a"}&key=${"AIzaSyAMUNLqIdfEPwq-XpOnlJJK3H2BmVFFf5k"}`;
  const resAlmaty = await fetch(urlAlmaty);
  const resAstana = await fetch(urlAstana);
  const dataAlmaty = await resAlmaty.json();
  const dataAstana = await resAstana.json();
  if (dataAlmaty.status && dataAstana.status === "OK") {
    const coordsAlmaty = dataAlmaty.results[0].geometry.location;
    const coordsAstana = dataAstana.results[0].geometry.location;
    return {
      props: {
        coordsAlmaty,
        coordsAstana,
        contacts: res.data.results,
      },
    };
  } else {
    throw new Error("Ошибка при получений кординатов!");
  }
}

export default contactsPage;
