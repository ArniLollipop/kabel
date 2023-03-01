import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./AdvantagesSection.module.scss";
import { Title } from "@/UI/Title/Title";
import Image from "next/image";
import IconAdvantagesCalendar from "@/assets/icons/IconAdvantagesCalendar.svg";
import IconAdvantagesLike from "@/assets/icons/IconAdvantagesLike.svg";
import IconAdvantagesGems from "@/assets/icons/IconAdvantagesGems.svg";
import IconAdvantagesDelivery from "@/assets/icons/IconAdvantagesDelivery.svg";
import IconAdvantagesHands from "@/assets/icons/IconAdvantagesHands.svg";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

const cn = classNames.bind(cls);

interface AdvantagesSectionProps {
  className?: string;
}

export const AdvantagesSection: FC<AdvantagesSectionProps> = (props) => {
  const { className } = props;

  const params: SwiperProps = {
    loop: false,
    speed: 500,

    breakpoints: {
      1024: {
        centeredSlides: false,
        slidesPerView: 5,
        spaceBetween: 20,
      },

      640: {
        slidesPerView: 2.5,
        spaceBetween: 15,
        centeredSlides: false,
      },
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        centeredSlides: false,
      },
    },
  };

  return (
    <section className={cn(cls.AdvantagesSection)}>
      <Title className={cls.AdvantagesSection_title}>Преимущества</Title>

      <Swiper {...params}>
        <SwiperSlide className={cls.AdvantagesSection_sliderItem}>
          <li className={cls.AdvantagesSection_item}>
            <span className={cls.AdvantagesSection_itemStep}>01</span>
            <Image src={IconAdvantagesGems} alt="advantages icon" />
            <p className={cls.AdvantagesSection_itemDescr}>высокое качество продукции</p>
          </li>
        </SwiperSlide>

        <SwiperSlide className={cls.AdvantagesSection_sliderItem}>
          <li className={cls.AdvantagesSection_item}>
            <span className={cls.AdvantagesSection_itemStep}>02</span>
            <Image src={IconAdvantagesCalendar} alt="advantages icon" />
            <p className={cls.AdvantagesSection_itemDescr}>Более 15 лет на рынке</p>
          </li>
        </SwiperSlide>

        <SwiperSlide className={cls.AdvantagesSection_sliderItem}>
          <li className={cls.AdvantagesSection_item}>
            <span className={cls.AdvantagesSection_itemStep}>03</span>
            <Image src={IconAdvantagesHands} alt="advantages icon" />
            <p className={cls.AdvantagesSection_itemDescr}>Более 10 000 довольных клиентов</p>
          </li>
        </SwiperSlide>

        <SwiperSlide className={cls.AdvantagesSection_sliderItem}>
          <li className={cls.AdvantagesSection_item}>
            <span className={cls.AdvantagesSection_itemStep}>04</span>
            <Image src={IconAdvantagesLike} alt="advantages icon" />
            <p className={cls.AdvantagesSection_itemDescr}>Продукция всегда в наличии</p>
          </li>
        </SwiperSlide>

        <SwiperSlide className={cls.AdvantagesSection_sliderItem}>
          <li className={cls.AdvantagesSection_item}>
            <span className={cls.AdvantagesSection_itemStep}>05</span>
            <Image src={IconAdvantagesDelivery} alt="advantages icon" />
            <p className={cls.AdvantagesSection_itemDescr}>Доставка в регионы</p>
          </li>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
