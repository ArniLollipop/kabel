import { FC, useState } from "react";
import classNames from "classnames/bind";
import cls from "./SeeMoreSlider.module.scss";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { SeeMoreCard } from "@/components/SeeMoreCard/SeeMoreCard";
import { seeMoreDatas } from "@/data/SeeMoreCardData";

import "swiper/css";
import { Button } from "@/UI/Button";
import { ThemeButton } from "@/UI/Button/ui/Button";

const cn = classNames.bind(cls);

interface SeeMoreSliderProps {
  className?: string;
}

export const SeeMoreSlider: FC<SeeMoreSliderProps> = (props) => {
  const { className } = props;

  const [mySwiper, setSwiper] = useState<any>();

  const params: SwiperProps = {
    loop: true,
    speed: 500,

    breakpoints: {
      1300: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      840: {
        slidesPerView: 2.3,
        centeredSlides: false,
      },

      550: {
        slidesPerView: 1.3,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 5,
        centeredSlides: true,
      },
    },
  };

  return (
    <div className={cls.slider}>
      <Swiper {...params} onSwiper={(swiper) => setSwiper(swiper)}>
        {seeMoreDatas.map((card) => (
          <SwiperSlide className={cls.slider_slide} key={card.id}>
            <SeeMoreCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        className={cn(cls.slider_btn, cls.slider_btnNext)}
        theme={ThemeButton.CLEAR}
        onClick={() => mySwiper.slideNext()}
      >
        <svg
          width="18"
          height="31"
          viewBox="0 0 18 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.82164 27.543L15.0717 15.0703L2.87742 2.54304"
            stroke="#39424B"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>

      <Button
        className={cn(cls.slider_btn, cls.slider_btnPrev)}
        theme={ThemeButton.CLEAR}
        onClick={() => mySwiper.slidePrev()}
      >
        <svg
          width="18"
          height="31"
          viewBox="0 0 18 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3134 2.83092L2.87747 15.3947L15.4412 27.8306"
            stroke="#39424B"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
};
