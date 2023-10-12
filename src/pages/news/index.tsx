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
import { useRouter } from "next/router";
import { NextPageContext } from "next";

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

	const router = useRouter();

	return (
		<MainLayout activePage={ActiveHeaderPage.NEWS}>
			<Head>
				<title>{t("title_news")}</title>
				<meta name='description' content={t("description_news") as string} />
				<meta property='og:title' content={t("title_news") as string} />
				<meta
					property='og:url'
					content={"https://cable.kz" + router.pathname}
				/>
				<meta name='og:description' content={t("description_news") as string} />
				<link rel='canonical' href={"https://cable.kz" + router.pathname} />
				<meta property='og:image' content={"https://cable.kz/Logo.svg"} />

				<meta itemProp='name' content={t("title_news") as string} />
				<meta
					itemProp='description'
					content={t("description_news") as string}
				/>
				<meta itemProp='image' content='https://cable.kz/Logo.svg' />

				{/* <meta property='og:image' content={props.newssection_set[0].image} /> */}
			</Head>
			{/* PC implementation */}
			<div className={cn(cls.news)}>
				<Title h1={true} className={cls.news_title}>
					{t("lang").toLowerCase() === "ru"
						? "Новости Компании Almaty Kazkabel"
						: "Компания жаңалықтары Алматы Казкабель"}{" "}
				</Title>

				<div className={cls.news_wrapper}>
					<div className={cls.news_content}>
						<h2 className={cls.news_innerTitle}>
							{t("lastNews") ? t("lastNews") : ""}
						</h2>
						{props && (
							<Swiper
								itemScope
								itemType='http://schema.org/ItemList'
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
									<SwiperSlide
										itemProp='itemListElement'
										itemScope
										itemType='https://schema.org/ListItem'
										className={cls.news_sliderSlide}
										key={news.id}>
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

export async function getServerSideProps(ctx: NextPageContext) {
	const res = await useHttp().get("/news/news/", {
		headers: {
			"Accept-Language": ctx?.locale || "ru",
		},
	});
	return {
		props: res.data,
	};
}
