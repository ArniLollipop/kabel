/** @format */

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
import { useHttp } from "@/hooks/useHttp";
const enum endpoints {
  getContacts = "/main/contacts/",
}

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

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
import Head from "next/head";
import { useRouter } from "next/router";

function contactsPage(props: any) {
  const { t } = useTranslation();

  const router = useRouter();

  console.log("====================================");
  console.log(props);
  console.log("====================================");

  return (
    <MainLayout activePage={ActiveHeaderPage.CONTACTS}>
      <Head>
        <title>{t("title_contacts")}</title>
        <meta
          name='description'
          content={t("description_contacts") as string}
        />
        <meta property='og:title' content={t("title_contacts") as string} />
        <meta
          property='og:url'
          content={"https://cable.kz" + router.pathname}
        />
        <link rel='canonical' href={"https://cable.kz" + router.pathname} />

        {/* <meta property='og:image' content={props.image} /> */}
      </Head>
      <div className={cn(cls.contactsPage)}>
        <Title className={cls.contactsPage_title}>{t("list.contacts")}</Title>
        <div className={cls.contactsPage_wrapper}>
          {props.contacts?.map((el: any) => {
            return (
              <div className={cls.contactsPage_item}>
                {/* Map implementation */}
                <div className={cls.contactsPage_imageWrapper}>
                  {props.contacts && (
                    // <MapComponent
                    //   coords={{ lat: el.x_coordinate, lon: el.y_coordinate }}
                    // />
                    <YMaps>
                      <Map
                        className={cn(cls.MapComponent_map) + " relative"}
                        state={{
                          center: [el.x_coordinate, el.y_coordinate],
                          zoom: 13,
                        }}>
                        <Placemark
                          geometry={[el.x_coordinate, el.y_coordinate]}
                        />
                      </Map>
                    </YMaps>
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
                      )}>
                      <IconContactsMail />
                      <div>
                        <a className={cls.descr} href={`mailto:${el.email}`}>
                          {el.email}
                        </a>
                      </div>
                    </div>

                    <div
                      className={cn(
                        cls.contactsPage_textItem,
                        cls.contactsPage_phones
                      )}>
                      <IconContactsPhone />
                      <div>
                        <p className={cls.subtitle}>{t("getZaiavka")}</p>
                        {el.contacts?.map((phone: any) => {
                          return (
                            <a
                              className={cls.descr}
                              href={"tel:" + phone.phone_number}>
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

  return {
    props: {
      contacts: res.data.results,
    },
  };
}

export default contactsPage;
