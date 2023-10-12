/** @format */

import { FC, useState } from "react";
import classNames from "classnames/bind";
import cls from "./OfferSection.module.scss";
import { Button } from "@/UI/Button/ui/Button";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import Image from "next/image";
import ImageHomepageDecor from "@/assets/images/ImageHomepageDecor.png";
import Banner from "@/assets/images/Banner.png";
import Banner2 from "@/assets/images/Banner2.png";
import Banner3 from "@/assets/images/Banner3.png";

import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { offerI } from "@/types/OfferTypes";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const cn = classNames.bind(cls);

SwiperCore.use([Autoplay, EffectFade, Pagination]);
interface OfferSectionProps {
	className?: string;
	offers: offerI[];
}

export const OfferSection: FC<OfferSectionProps> = (props) => {
	const { className, offers } = props;

	const { t } = useTranslation();

	const [myswiper, setSwiper] = useState<any>({});

	const params: SwiperProps = {
		slidesPerView: 1,

		autoplay: {
			delay: 2000,
		},

		pagination: {
			el: ".pagination",
			clickable: true,
		},

		loop: true,
		speed: 500,
		centeredSlides: true,
	};

	return (
		<section className={cn(cls.OfferSection)}>
			{offers && (
				<Swiper
					itemScope
					itemType='http://schema.org/ItemList'
					modules={[Autoplay, EffectFade, Pagination]}
					className={cls.slider}
					effect='fade'
					pagination={{ clickable: true }}
					autoplay
					onSwiper={(swiper) => {
						setSwiper(swiper);
					}}
					{...params}>
					{offers?.map((sect) => {
						const { button_text, button_url, id, image, text, title } = sect;
						return (
							<SwiperSlide
								itemProp='itemListElement'
								itemScope
								itemType='https://schema.org/ListItem'
								key={id}>
								<div className={cls.offerInner}>
									<h2 itemProp='name' className={cn(cls.offerTitle, "title")}>
										{title}
									</h2>

									<p itemProp='description' className={cls.offerDescr}>
										{text}
									</p>

									<Link href={`${button_url}`} className={cls.offerBtn}>
										{button_text}
									</Link>
									<p className={cls.offerLabel}>{t("offerText")}</p>
								</div>

								<Image
									itemProp='image'
									className={cls.sliderImage}
									src={image}
									width={1920}
									height={1080}
									alt={(title as string) + "| Almaty Kazkabel"}
								/>
							</SwiperSlide>
						);
					})}
					<div className={cn(cls.offerPagination, "pagination")}></div>
				</Swiper>
			)}
		</section>
	);
};
