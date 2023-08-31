/** @format */

import { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { Title } from "@/UI/Title/Title";
import { MainLayout } from "@/layouts/MainLayout";
import { NewsCard, ThemeNewsCard } from "@/components/newsCard/NewsCard";
import ImageMockNewsCard from "@/assets/images/ImageMockNewsCard.png";
import { SwiperSlide, Swiper, SwiperProps } from "swiper/react";

import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { ActiveHeaderPage } from "@/components/header/Header";
import { NewsService } from "@/services/News.service";
import { newsI, NewsResponseI } from "@/types/NewsTypes";
import { dateConverter } from "@/helpers/dateConverter";

const cn = classNames.bind(cls);

import { useTranslation } from "react-i18next";
import { useHttp } from "@/hooks/useHttp";
import Head from "next/head";

const params: SwiperProps = {
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

interface newsPageI {
  news: newsI[];
}

export default function newsPage(props: any) {
  const { t } = useTranslation();

  const [swiper, setSwiper] = useState<any>();

  return (
    <MainLayout activePage={ActiveHeaderPage.NEWS}>
      <Head>
        <title>{t("title_news")}</title>
        <meta name='description' content={t("description_news") as string} />
      </Head>
      {/* PC implementation */}
      <div className={cn(cls.news)}>
        <Title className={cls.news_title}>
          {t("list.news") ? t("list.news") : ""}
        </Title>

        <div className={cls.news_wrapper}>
          <div className={cls.news_content}>
            <h3 className={cls.news_innerTitle}>
              {t("lastNews") ? t("lastNews") : ""}
            </h3>
            {props && (
              <Swiper
                className={cls.news_slider}
                navigation={true}
                loop={false}
                spaceBetween={50}
                speed={500}
                centeredSlides={false}
                onSwiper={(swiper) => setSwiper(swiper)}
                modules={[Navigation]}
                breakpoints={{
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
                }}>
                {props.results?.map((news: any) => (
                  <SwiperSlide className={cls.news_sliderSlide} key={news.id}>
                    <NewsCard
                      className={cls.news_newsCard}
                      theme={ThemeNewsCard.WHITE_BG}
                      {...news}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>

      {/* MobImplementation */}
      <div className={cls.newsMobile}>
        {props.results?.map((news: any) => (
          <div key={news.id}>
            <NewsCard
              className={cls.news_newsCardMobile}
              theme={ThemeNewsCard.BLUE_BG}
              {...news}
            />
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const res = await useHttp().get("/news/news/");
  return {
    props: res.data,
  };
}
