/** @format */

import { FC, useEffect, useState } from "react";
import { CatalogItemPage } from "@/layouts/CatalogPage/sections/CatalogItemPage";
import { MainLayout } from "@/layouts/MainLayout";
import { ActiveHeaderPage } from "@/components/header/Header";
import { SeeMoreSlider } from "@/components/SeeMoreSlider/SeeMoreSlider";
import cls from "./index.module.scss";
import { NextPageContext } from "next";
import { ProductService } from "@/services/Product.servise";
import { productI } from "@/types/ProductTypes";
import nookies from "nookies";

import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
import Iphone from "@/assets/Iphone.png";
import Android from "@/assets/Android.png";
import Head from "next/head";
import { useHttp } from "@/hooks/useHttp";
import { CatalogPage } from "@/layouts/CatalogPage/CatalogPage";
import { useAppDispatch } from "@/hooks/store";
import {
	setCategories,
	setCores,
	setPage,
	setProducts,
} from "@/store/slices/ProductSlice";

export default function item(props: any) {
	const { categories, products, cores } = props;

	const dispatch = useAppDispatch();

	const { t } = useTranslation();

	const router = useRouter();

	const [modal, setModal] = useState<boolean>(
		router.query.modal ? true : false
	);

	useEffect(() => {
		if (products && categories && cores) {
			dispatch(setProducts(products));
			dispatch(setPage(products.count_pages));
			dispatch(setCategories(categories));
			dispatch(setCores(cores));
		}
	}, [products, categories, cores]);

	return (
		<MainLayout activePage={ActiveHeaderPage.CATALOG}>
			{props.name ? (
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
						content={
							"https://cable.kz/" + props.subcategory_slug + "/" + props.code
						}
					/>
					<meta property='og:image' content={props.image} />
					<link
						rel='canonical'
						href={
							"https://cable.kz/catalog/" +
							props.subcategory_slug +
							"/" +
							props.code
						}
					/>

					<meta
						itemProp='name'
						content={
							props.name + " купить оптом и в розницу | Almaty Kazkabel "
						}
					/>
					<meta
						itemProp='description'
						content={`${props.name} купить c доставкой по Алматы и Казахстану. ➤ Продукция от производителя ✓ cable.kz. Удобные способы оплаты и доставки. ☎ детали по номеру: +7 700 301 47 98 | Almaty Kazkabel `}
					/>
					<meta itemProp='image' content={props.image} />
				</Head>
			) : (
				<Head>
					<title>{t("title_catalog")}</title>
					<meta
						name='description'
						content={t("description_catalog") as string}
					/>
					<meta property='og:title' content={t("title_catalog") as string} />
					<meta
						property='og:url'
						content={"https://cable.kz" + router.pathname}
					/>
					<link rel='canonical' href={"https://cable.kz" + router.pathname} />

					<meta itemProp='name' content={t("title_catalog") as string} />
					<meta
						itemProp='description'
						content={t("description_catalog") as string}
					/>

					{/* <meta property='og:image' content={props.image} /> */}
				</Head>
			)}
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
			{products && cores && categories ? (
				<CatalogPage />
			) : (
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
			)}
		</MainLayout>
	);
}

export async function getServerSideProps(ctx: NextPageContext) {
	const { id } = ctx.query;

	const category_slug = Array.isArray(id) ? id[0] : ("" as string);

	if (category_slug.toLocaleLowerCase() !== category_slug) {
		return {
			redirect: {
				destination: `/catalog/${category_slug.toLocaleLowerCase()}/${
					Array.isArray(id) ? id[1] : ""
				}`,
				permanent: false,
			},
		};
	} else if (Array.isArray(id) && id.length == 1) {
		let products;

		if (nookies.get(ctx).queries) {
			let fromCookie;
			fromCookie = JSON.parse(nookies.get(ctx).queries);

			let subcategoryQuery = "?";
			let sectionQuery = "";
			let core_numberQuery = "";
			let orderingQuery = "";
			let availabilityQuery = "";

			if (fromCookie.subcategory.length > 0) {
				fromCookie.subcategory.forEach((el: any) => {
					subcategoryQuery += `&subcategory=${category_slug}`;
				});
			} else {
				subcategoryQuery = "?";
			}

			if (fromCookie.section.length > 0) {
				fromCookie.section.forEach((el: any) => {
					sectionQuery += `&section=${el}`;
				});
			} else {
				sectionQuery = "";
			}

			if (fromCookie.core_number.length > 0) {
				fromCookie.core_number.forEach((el: any) => {
					core_numberQuery += `&core_number=${el}`;
				});
			} else {
				core_numberQuery = "";
			}

			if (fromCookie.ordering.length > 0) {
				orderingQuery += `&ordering=${fromCookie.ordering}`;
			} else {
				orderingQuery = "";
			}

			if (fromCookie.availability.length > 0) {
				availabilityQuery += `&availability=${fromCookie.availability}`;
			} else {
				availabilityQuery = "";
			}

			const res = await useHttp(ctx).get(
				"/products/products/" +
					subcategoryQuery +
					sectionQuery +
					core_numberQuery +
					orderingQuery +
					availabilityQuery,
				{
					headers: {
						"Accept-Language": ctx?.locale || "ru",
					},
				}
			);
			products = res.data;
			const categories = await ProductService().getCategories();
			const cores = await ProductService().getCores();

			return {
				props: { products, categories, cores },
			};
		}
	} else {
		const prodId = typeof id === "string" ? id : Array.isArray(id) ? id[1] : "";
		const product = await ProductService(ctx).getProductById(prodId);

		return {
			props: product,
		};
	}
}
