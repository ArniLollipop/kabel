/** @format */

import { FC, useState } from "react";
import { CatalogItemPage } from "@/layouts/CatalogPage/sections/CatalogItemPage";
import { MainLayout } from "@/layouts/MainLayout";
import { ActiveHeaderPage } from "@/components/header/Header";
import { SeeMoreSlider } from "@/components/SeeMoreSlider/SeeMoreSlider";
import cls from "./index.module.scss";
import { NextPageContext } from "next";
import { ProductService } from "@/services/Product.servise";
import { productI } from "@/types/ProductTypes";

import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
import Iphone from "@/assets/Iphone.png";
import Android from "@/assets/Android.png";
import Head from "next/head";

export default function item(props: productI) {
	const { t } = useTranslation();

	const router = useRouter();

	const [modal, setModal] = useState<boolean>(
		router.query.modal ? true : false
	);

	console.log(props);

	return (
		<MainLayout activePage={ActiveHeaderPage.CATALOG}>
			<Head>
				<title>
					{props.name + " купить оптом и в розницу | Almaty Kazkabel "}
				</title>
				<meta
					name='description'
					content={`${props.name} купить c доставкой по Алматы и Казахстану. ➤ Продукция от производителя ✓ cable.kz. Удобные способы оплаты и доставки. ☎ детали по номеру: +7 700 301 47 98 | Almaty Kazkabel `}
				/>
				<meta
					property='og:title'
					content={props.name + " купить оптом и в розницу | Almaty Kazkabel"}
				/>
				<meta
					property='og:url'
					content={"https://cable.kz" + router.pathname}
				/>
				<meta property='og:image' content={props.image} />
				<link rel='canonical' href={"https://cable.kz" + router.pathname} />

				<meta
					itemProp='name'
					content={props.name + " купить оптом и в розницу | Almaty Kazkabel "}
				/>
				<meta
					itemProp='description'
					content={`${props.name} купить c доставкой по Алматы и Казахстану. ➤ Продукция от производителя ✓ cable.kz. Удобные способы оплаты и доставки. ☎ детали по номеру: +7 700 301 47 98 | Almaty Kazkabel `}
				/>
				<meta itemProp='image' content={props.image} />
			</Head>
			<div
				onClick={() => setModal(false)}
				className={
					modal
						? "fixed top-0 left-0 bg-black bg-opacity-40 w-full h-[100vh] z-[1000] transition-all duration-300"
						: "fixed top-0 left-0 bg-transparent bg-opacity-40 w-0 opacity-0 h-[100vh] z-[1000] transition-all duration-300"
				}></div>
			<div className={modal ? cls.modal_inner : "hidden"}>
				<div className='flex items-center gap-[10px] !justify-center flex-col relative'>
					<button
						onClick={() => setModal(false)}
						className='p-0 bg-transparent border-none absolute top-0 right-0 cursor-pointer'>
						<svg
							width='35'
							height='35'
							viewBox='0 0 35 35'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M26.25 8.75L8.75 26.25'
								stroke='#2F3138'
								strokeLinecap='round'
								stroke-linejoin='round'
							/>
							<path
								d='M8.75 8.75L26.25 26.25'
								stroke='#2F3138'
								strokeLinecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</button>
					<a href=''>
						<Image
							src={Iphone}
							alt={"iphone" + "| Almaty Kazkabel"}
							className='max-w-[200px] h-auto'
						/>
					</a>
					<a href=''>
						<Image
							src={Android}
							alt={"android" + "| Almaty Kazkabel"}
							className='max-w-[200px] h-auto'
						/>
					</a>
				</div>
			</div>
			<div className={cls.cardItem}>
				<div className={cls.cardItem_wrapper}>
					<CatalogItemPage {...props} />
					{props.recommended_products.length > 0 && (
						<div className={cls.slider}>
							<h3 className={cls.slider_title}>{t("watch")}</h3>
							<SeeMoreSlider slides={props.recommended_products} />
						</div>
					)}
				</div>
			</div>
		</MainLayout>
	);
}

export async function getServerSideProps(ctx: NextPageContext) {
	const { id } = ctx.query;
	if (id?.length === 1) {
		return {
			redirect: {
				destination: "/catalog",
				permanent: false,
			},
		};
	} else {
		const prodId = typeof id === "string" ? id : Array.isArray(id) ? id[1] : "";
		const product = await ProductService(ctx).getProductById(prodId);

		return {
			props: product,
		};
	}
}
