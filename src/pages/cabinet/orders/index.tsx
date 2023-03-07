import { ActivePageEnum, CabinetLayout } from "@/layouts/CabinetLayot/CabinetLayout";
import { HistoryOrdersSlider } from "@/components/HistoryOrdersSlider/HistoryOrdersSlider";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { SwiperProps } from "swiper/react";
import Link from "next/link";

const cn = classNames.bind(cls);

export default function ordersPage() {
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

  return (
    <CabinetLayout className={cn(cls.orders)} activePage={ActivePageEnum.ORDERS}>
      <div className={cls.orders_wrapper}>
        <h1 className={cls.orders_title}>Мои заказы</h1>
        <span className={cls.orders_subTitle}>Свежие</span>
        <HistoryOrdersSlider params={params} className={cls.orders_slider} />
      </div>
    </CabinetLayout>
  );
}
