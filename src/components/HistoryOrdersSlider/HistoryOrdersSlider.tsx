import { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import cls from "./HistoryOrdersSlider.module.scss";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { ordersData } from "@/data/OrdersData";
import { OrderHistoryCard } from "@/components/OrderHistoryCard/OrderHistoryCard";
import Image from "next/image";

import "swiper/css";
import { Button, ThemeButton } from "@/UI/Button/ui/Button";
import { useHttp } from "@/hooks/useHttp";

const cn = classNames.bind(cls);

interface HistoryOrdersSliderProps {
  className?: string;
  params: SwiperProps;
}

export const HistoryOrdersSlider: FC<HistoryOrdersSliderProps> = (props) => {
  const { className, params } = props;
  const [myswiper, setSwiper] = useState<any>({});

  const [orders, setOrders] = useState<any>();

  async function getOrders() {
    try {
      const res = await useHttp().get("orders/orders/my_orders/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      setOrders(res.data.result);
    } catch (err) {
      setOrders([]);
    }
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className={cn(cls.slider, className)}>
      <Swiper {...params} onSwiper={(swiper) => setSwiper(swiper)}>
        {orders?.map((order: any) => {
          return (
            <SwiperSlide key={order.id}>
              <OrderHistoryCard {...order} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Button
        className={cls.slider_next}
        theme={ThemeButton.CLEAR}
        onClick={() => myswiper.slideNext()}
      >
        <svg
          width="11"
          height="21"
          viewBox="0 0 11 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.125 19.25L9.875 10.5L1.125 1.75"
            stroke="#39424B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
      <Button
        className={cls.slider_prev}
        theme={ThemeButton.CLEAR}
        onClick={() => myswiper.slidePrev()}
      >
        <svg
          width="11"
          height="21"
          viewBox="0 0 11 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.125 19.25L9.875 10.5L1.125 1.75"
            stroke="#39424B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
};
