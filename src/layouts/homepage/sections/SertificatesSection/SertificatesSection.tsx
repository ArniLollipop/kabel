import { FC, useState } from "react";
import classNames from "classnames/bind";
import cls from "./SertificatesSection.module.scss";
import { Title } from "@/UI/Title/Title";
import Link from "next/link";
import Image from "next/image";
import ImageMockSertificate from "@/assets/images/ImageMockSertificate.png";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Button, ThemeButton } from "@/UI/Button/Button";

const cn = classNames.bind(cls);

interface SertificatesSectionProps {
  className?: string;
}

export const SertificatesSection: FC<SertificatesSectionProps> = (props) => {
  const { className } = props;

  const [myswiper, setSwiper] = useState<any>({});

  const params: SwiperProps = {
    autoplay: {
      delay: 3000,
    },
    loop: true,
    spaceBetween: 50,
    speed: 500,
    centeredSlides: false,

    breakpoints: {
      1024: {
        centeredSlides: false,
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 15,
        centeredSlides: false,
      },
      640: {
        slidesPerView: 1.8,
        spaceBetween: 10,
        centeredSlides: true,
      },
      425: {
        slidesPerView: 1.2,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
      },
    },
  };

  return (
    <section className={cn(cls.SertificatesSection)}>
      <Title className={cls.SertificatesSection_title}>Сертификаты</Title>

      <Swiper {...params} className={cls.slider} onSwiper={(swiper) => setSwiper(swiper)}>
        <SwiperSlide>
          <Image src={ImageMockSertificate} alt="Sertificate" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={ImageMockSertificate} alt="Sertificate" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={ImageMockSertificate} alt="Sertificate" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={ImageMockSertificate} alt="Sertificate" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={ImageMockSertificate} alt="Sertificate" />
        </SwiperSlide>
      </Swiper>

      <Button
        className={cls.slider_next}
        theme={ThemeButton.CLEAR}
        onClick={() => myswiper.slideNext()}
      >
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.966797 10.1004L5.5668 5.50039L0.966797 0.900391"
            stroke="#F6BF0C"
            strokeLinecap="square"
          />
        </svg>
      </Button>
      <Button
        className={cls.slider_prev}
        theme={ThemeButton.CLEAR}
        onClick={() => myswiper.slidePrev()}
      >
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.0332 10.1004L1.4332 5.50039L6.0332 0.900391"
            stroke="#F6BF0C"
            strokeLinecap="square"
          />
        </svg>
      </Button>

      <Link href="/" className={cls.slider_link}>
        Все сертификаты
      </Link>
    </section>
  );
};
