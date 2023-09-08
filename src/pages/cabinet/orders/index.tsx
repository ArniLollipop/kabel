/** @format */

import {
  ActiveCabinetPageEnum,
  CabinetLayout,
} from "@/layouts/CabinetLayot/CabinetLayout";
import { HistoryOrdersSlider } from "@/components/HistoryOrdersSlider/HistoryOrdersSlider";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { SwiperProps } from "swiper/react";
import Link from "next/link";

import { useTranslation } from "react-i18next";
import Head from "next/head";
import { useRouter } from "next/router";

const cn = classNames.bind(cls);

export default function ordersPage() {
  const { t } = useTranslation();
  const params: SwiperProps = {
    loop: true,
    speed: 500,

    breakpoints: {
      1300: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 3.5,
        centeredSlides: false,
      },

      425: {
        slidesPerView: 2.3,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        centeredSlides: true,
      },
    },
  };

  const router = useRouter();

  return (
    <CabinetLayout
      className={cn(cls.orders)}
      activePage={ActiveCabinetPageEnum.ORDERS}>
      <Head>
        <title>{t("title_orders")}</title>
        <meta name='description' content={t("description_orders") as string} />
        <link rel='canonical' href={"https://cable.kz/" + router.pathname} />
      </Head>
      <div className={cls.orders_wrapper}>
        <h1 className={cls.orders_title}>{t("myOrders")}</h1>

        <HistoryOrdersSlider params={params} className={cls.orders_slider} />
      </div>
    </CabinetLayout>
  );
}
