/** @format */

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
import { adventagesI } from "@/types/AdventagesTypes";
import { useTranslation } from "react-i18next";

const cn = classNames.bind(cls);

interface AdvantagesSectionProps {
  className?: string;
  adventages: adventagesI[];
}

export const AdvantagesSection: FC<AdvantagesSectionProps> = (props) => {
  const { className, adventages } = props;
  const { t } = useTranslation();
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
      <Title className={cls.AdvantagesSection_title}>{t("advantage")}</Title>

      <Swiper {...params}>
        {adventages?.map(({ advantage, icon, id }, i) => (
          <SwiperSlide className={cls.AdvantagesSection_sliderItem} key={id}>
            <li className={cls.AdvantagesSection_item}>
              <span className={cls.AdvantagesSection_itemStep}>
                {i + 1 > 9 ? i + 1 : `0${i + 1}`}
              </span>
              <Image
                src={icon}
                alt={advantage + "| Almaty Kazkabel"}
                width={45}
                height={45}
              />
              <p className={cls.AdvantagesSection_itemDescr}>{advantage}</p>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
