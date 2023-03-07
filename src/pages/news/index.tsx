import { FC, useState } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { Title } from "@/UI/Title/Title";
import { MainLayout } from "@/layouts/MainLayout";
import { NewsCard, ThemeNewsCard } from "@/components/newsCard/NewsCard";
import { news, articleI } from "@/data/NewsData";
import ImageMockNewsCard from "@/assets/images/ImageMockNewsCard.png";
import { SwiperSlide, Swiper, SwiperProps } from "swiper/react";

import "swiper/css";
import Link from "next/link";
import { ActiveHeaderPage } from "@/components/header/Header";

const cn = classNames.bind(cls);

interface indexProps {
  className?: string;
}

const params: SwiperProps = {
  autoplay: {
    delay: 3000,
  },
  loop: false,
  spaceBetween: 50,
  speed: 500,
  centeredSlides: false,

  breakpoints: {
    1500: {
      centeredSlides: false,
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 15,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 1.8,
      spaceBetween: 10,
      centeredSlides: false,
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

export default function newsPage() {
  const [myswiper, setSwiper] = useState<any>();
  return (
    <MainLayout activePage={ActiveHeaderPage.NEWS}>
      {/* PC implementation */}
      <div className={cn(cls.news)}>
        <Title className={cls.news_title}>Новости</Title>

        <div className={cls.news_wrapper}>
          <div className={cls.news_content}>
            <h3 className={cls.news_innerTitle}>Последние новости</h3>

            <Swiper
              className={cls.news_slider}
              {...params}
              onSwiper={(swiper) => setSwiper(swiper)}
            >
              {news.map((news) => (
                <SwiperSlide className={cls.news_sliderSlide} key={news.id}>
                  <Link href={`/news/${news.id}`}>
                    <NewsCard
                      className={cls.news_newsCard}
                      thumbnailImg={ImageMockNewsCard}
                      theme={ThemeNewsCard.WHITE_BG}
                      {...news}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div></div>
          </div>
        </div>
      </div>

      {/* MobImplementation */}
      <div className={cls.newsMobile}>
        {news.map((news) => (
          <Link href={`/news/${news.id}`} key={news.id}>
            <NewsCard
              className={cls.news_newsCardMobile}
              thumbnailImg={ImageMockNewsCard}
              theme={ThemeNewsCard.BLUE_BG}
              {...news}
            />
          </Link>
        ))}
      </div>
    </MainLayout>
  );
}
