/** @format */

import { useEffect, useState } from "react";
import { ActiveHeaderPage } from "@/components/header/Header";
import { CatalogPage } from "@/layouts/CatalogPage/CatalogPage";
import { MainLayout } from "@/layouts/MainLayout";
import { ProductService } from "@/services/Product.servise";
import { categoriesAnswI, coresI, productAnswI } from "@/types/ProductTypes";
import { useAppDispatch } from "@/hooks/store";
import {
	setProducts,
	setCategories,
	setCores,
	setPage,
} from "@/store/slices/ProductSlice";
import { NextPageContext } from "next/types";
import nookies from "nookies";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { useHttp } from "@/hooks/useHttp";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { ProductsSection } from "@/layouts/homepage/sections";
import { categoryI } from "@/types/ProductTypes";
import Link from "next/link";
import { IconCabinetArrow } from "@/assets/icons";

interface CardProps {
	products: productAnswI;
	categories: categoriesAnswI;
	cores: coresI;
}

interface ProductsSectionProps {
	categories: categoryI[];
}

export default function Card(props: any) {
	const { categories, products, cores, subcategory } = props;

	const dispatch = useAppDispatch();

	const { t } = useTranslation();

	useEffect(() => {
		// if (router.query.id) {
		// 	dispatch(setProducts(products));
		// 	dispatch(setPage(products.count_pages));
		// 	dispatch(setCategories(categories));
		// 	dispatch(setCores(cores));
		// } else {
		if (categories) dispatch(setCategories(categories));
		// }
	}, [categories]);

	const router = useRouter();

	return (
		<MainLayout activePage={ActiveHeaderPage.CATALOG}>
			<Head>
				<title>{t("title_catalog")}</title>
				<meta name='description' content={t("description_catalog") as string} />
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
			{router.query.id == undefined ? (
				<div className='max-w-[1185px] mx-auto w-full px-7 py-3 mt-10'>
					<div className=''>
						<ProductsSection categories={categories} isCatalog={false} />
					</div>
				</div>
			) : (
				<div className='max-w-[1135px] mx-auto my-20'>
					<Link
						href='/catalog'
						className=' flex w-fit gap-3 font-medium text-base'>
						<svg
							width='8'
							height='14'
							viewBox='0 0 8 14'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='  rotate-180'
							stroke='#fff'>
							<path
								d='M1 13L7 7L1 1'
								stroke='#fff'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='stroke-[#00ABC2]'
							/>
						</svg>
						Назад
					</Link>
					<div className='bg-[#F4F5F8] max-w-[800px] mx-auto my-10 px-10 py-7 rounded-2xl grid grid-cols-3 gap-3'>
						{subcategory?.subcategory_set.map((el: any) => {
							return (
								<Link
									className='h-fit col-span-1 text-left hover:bg-[#F6BF0C] hover:rounded-2xl hover:text-white px-3 py-2 text-[#39424B] font-medium text-[20px]'
									href={"/catalog/" + el.slug}>
									{el.name}
								</Link>
							);
						})}
					</div>
				</div>
				// <CatalogPage />
			)}
		</MainLayout>
	);
}

export async function getServerSideProps(ctx: NextPageContext) {
	console.log(ctx.query.id);

	if (ctx.query.id === undefined) {
		const categories = await ProductService().getCategories();

		return {
			props: { categories },
		};
	} else if (ctx.query.id !== undefined) {
		const res = await useHttp(ctx).get(
			"/products/categories/" + ctx.query.id + "/",
			{
				headers: {
					"Accept-Language": ctx?.locale || "ru",
				},
			}
		);
		return {
			props: { subcategory: res.data },
		};

		// } else {
		// 	let products;

		// 	if (nookies.get(ctx).queries) {
		// 		let fromCookie;
		// 		fromCookie = JSON.parse(nookies.get(ctx).queries);

		// 		let subcategoryQuery = "?";
		// 		let sectionQuery = "";
		// 		let core_numberQuery = "";
		// 		let orderingQuery = "";
		// 		let availabilityQuery = "";

		// 		if (fromCookie.subcategory.length > 0) {
		// 			fromCookie.subcategory.forEach((el: any) => {
		// 				subcategoryQuery += `&subcategory=${el}`;
		// 			});
		// 		} else {
		// 			subcategoryQuery = "?";
		// 		}

		// 		if (fromCookie.section.length > 0) {
		// 			fromCookie.section.forEach((el: any) => {
		// 				sectionQuery += `&section=${el}`;
		// 			});
		// 		} else {
		// 			sectionQuery = "";
		// 		}

		// 		if (fromCookie.core_number.length > 0) {
		// 			fromCookie.core_number.forEach((el: any) => {
		// 				core_numberQuery += `&core_number=${el}`;
		// 			});
		// 		} else {
		// 			core_numberQuery = "";
		// 		}

		// 		if (fromCookie.ordering.length > 0) {
		// 			orderingQuery += `&ordering=${fromCookie.ordering}`;
		// 		} else {
		// 			orderingQuery = "";
		// 		}

		// 		if (fromCookie.availability.length > 0) {
		// 			availabilityQuery += `&availability=${fromCookie.availability}`;
		// 		} else {
		// 			availabilityQuery = "";
		// 		}

		// 		const res = await useHttp(ctx).get(
		// 			"/products/products/" +
		// 				subcategoryQuery +
		// 				sectionQuery +
		// 				core_numberQuery +
		// 				orderingQuery +
		// 				availabilityQuery,
		// 			{
		// 				headers: {
		// 					"Accept-Language": ctx?.locale || "ru",
		// 				},
		// 			}
		// 		);
		// 		products = res.data;
		// 	} else {
		// 		const res = await useHttp(ctx).get("/products/products/", {
		// 			headers: {
		// 				"Accept-Language": ctx?.locale || "ru",
		// 			},
		// 		});
		// 		products = res.data;
		// 	}

		// 	const categories = await ProductService().getCategories();
		// 	const cores = await ProductService().getCores();

		// 	return {
		// 		props: { products, categories, cores },
		// 	};
	}
}
