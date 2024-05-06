import { FC, useState } from "react";
import classNames from "classnames/bind";
import cls from "./NewsSection.module.scss";
import { Title } from "@/UI/Title/Title";
import { NewsCard, ThemeNewsCard } from "@/components/newsCard/NewsCard";
import ImageMockNewsCard from "@/assets/images/ImageMockNewsCard.png";
import { newsI } from "@/types/NewsTypes";
import { SwiperProps, SwiperSlide, Swiper } from "swiper/react";
import { Button } from "@/UI/Button";
import { ThemeButton } from "@/UI/Button/ui/Button";
import { useTranslation } from "react-i18next";

const cn = classNames.bind(cls);

const params: SwiperProps = {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 15,
	speed: 500,
	centeredSlides: false,
};

interface NewsSectionProps {
	className?: string;
	news: newsI[];
}

export const NewsSection: FC<NewsSectionProps> = (props) => {
	const { className, news } = props;
	const [myswiper, setSwiper] = useState<any>();
	const { t } = useTranslation();

	return (
		<section className={cn(cls.NewsSection)}>
			<Title className={cls.NewsSection_title}>{t("list.news")}</Title>

			<div className={cls.NewsSection_slider}>
				<Swiper
					itemScope
					itemType='http://schema.org/ItemList'
					className={cls.NewsSection_swiper}
					onSwiper={(swiper) => setSwiper(swiper)}
					{...params}>
					{news?.map((news) => (
						<SwiperSlide
							itemProp='itemListElement'
							itemScope
							itemType='http://schema.org/Article'
							className={cls.NewsSection_sliderSlide}
							key={news.id}>
							<NewsCard className={cls.NewsSection_newsCard} {...news} />
						</SwiperSlide>
					))}
				</Swiper>

				<Button
					theme={ThemeButton.CLEAR}
					onClick={() => myswiper.slidePrev()}
					className={cn(
						cls.NewsSection_sliderBtn,
						cls.NewsSection_sliderBtnPrev
					)}>
					<svg
						width='11'
						height='21'
						viewBox='0 0 11 21'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M9.875 19.25L1.125 10.5L9.875 1.75'
							stroke='#39424B'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</Button>

				<Button
					theme={ThemeButton.CLEAR}
					onClick={() => myswiper.slideNext()}
					className={cn(
						cls.NewsSection_sliderBtn,
						cls.NewsSection_sliderBtnNext
					)}>
					<svg
						width='11'
						height='21'
						viewBox='0 0 11 21'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M1.125 19.25L9.875 10.5L1.125 1.75'
							stroke='#39424B'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</Button>
			</div>
		</section>
	);
};
