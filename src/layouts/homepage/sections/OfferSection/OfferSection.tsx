import { FC, useState } from 'react';
import classNames from 'classnames/bind';
import cls from './OfferSection.module.scss';
import { Button } from '@/UI/Button/ui/Button';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import Image from 'next/image';
import ImageHomepageDecor from '@/assets/images/ImageHomepageDecor.png';
import Banner from '@/assets/images/Banner.png';
import Banner2 from '@/assets/images/Banner2.png';
import Banner3 from '@/assets/images/Banner3.png';

import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { offerI } from '@/types/OfferTypes';
import Link from 'next/link';

const cn = classNames.bind(cls);

interface OfferSectionProps {
  className?: string;
  offers: offerI[];
}

export const OfferSection: FC<OfferSectionProps> = (props) => {
  const { className, offers } = props;

  const [myswiper, setSwiper] = useState<any>({});

  const params: SwiperProps = {
    slidesPerView: 1,

    autoplay: {
      delay: 2000,
    },

    pagination: {
      el: '.pagination',
      clickable: true,
    },

    loop: true,
    speed: 500,
    centeredSlides: true,
  };

  return (
    <>
      <section className={cn(cls.OfferSection)}>
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          className={cls.slider}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
          {...params}
        >
          {offers.map((sect) => {
            const { button_text, button_url, id, image, text, title } = sect;
            return (
              <SwiperSlide key={id}>
                <div className={cls.offerInner}>
                  <h1 className={cn(cls.offerTitle, 'title')}>{title}</h1>

                  <p className={cls.offerDescr}>{text}</p>

                  <Link href={`${button_url}`} className={cls.offerBtn}>
                    {button_text}
                  </Link>

                  <div className={cn(cls.offerPagination, 'pagination')}>
                    <span className="dot" role="button"></span>
                    <span className="dot" role="button"></span>
                    <span className="dot" role="button"></span>
                  </div>

                  <p className={cls.offerLabel}>
                    Используя высокие технологии и современное оборудование, мы представляем
                    кабельную продукцию отвечающую всем международным стандартам и нормам
                  </p>
                </div>

                <Image
                  className={cls.sliderImage}
                  src={image}
                  width={1920}
                  height={1080}
                  alt="Offer img"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <section className={cls.offerSectionMobile}>
        <div className={cls.offerSectionMobile_inner}>
          <h1 className={cn(cls.offerSectionMobile_title, 'title')}>
            Отечественный производитель кабельно – проводниковой продукции
          </h1>

          <p className={cls.offerSectionMobile_descr}>
            Большой ассортимент высококачественной кабельной продукции
          </p>

          <Button className={cls.offerSectionMobile_btn}>Заказать сейчас</Button>
        </div>

        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          className={cls.offerSectionMobile_slider}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
          {...params}
        >
          <SwiperSlide>
            <Image className={cls.offerSectionMobile_sliderImg} src={Banner} alt="Offer img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className={cls.offerSectionMobile_sliderImg} src={Banner2} alt="Offer img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className={cls.offerSectionMobile_sliderImg} src={Banner3} alt="Offer img" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
