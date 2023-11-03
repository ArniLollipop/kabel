/** @format */

import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import classNames from "classnames/bind";
import cls from "./GoodsListSection.module.scss";
import {
	ProductCardItem,
	ThemeProductCard,
} from "@/components/ProductCardItem/ProductCardItem";
import ReactPaginate from "react-paginate";

import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { ProductService } from "@/services/Product.servise";
import { setPage, setProducts } from "@/store/slices/ProductSlice";
import { useTranslation } from "react-i18next";
import { useHttp } from "@/hooks/useHttp";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";

const cn = classNames.bind(cls);

interface GoodsListSectionProps {
	className?: string;
	openFilters: Dispatch<SetStateAction<boolean>>;
	isOpened: boolean;
}

export const GoodsListSection: FC<GoodsListSectionProps> = (props) => {
	const { className, openFilters, isOpened } = props;
	const [pagesCount, setPagesCount] = useState<Number>(25);
	const dispatch = useAppDispatch();
	const [productsState, setProductState] = useState<any>();
	const { products, pages } = useAppSelector((state) => state.ProductSlice);

	const router = useRouter();

	const { t } = useTranslation();

	useEffect(() => {
		setProductState(products);
	}, [products]);

	const [onLoad, setOnLoad] = useState<boolean>(false);

	async function handleChangePage(e: any) {
		setOnLoad(true);
		document.querySelector("#items")?.scrollIntoView({ behavior: "smooth" });
		try {
			let products;

			if (parseCookies().queries) {
				let fromCookie;
				fromCookie = JSON.parse(parseCookies().queries);

				let subcategoryQuery = "?";
				let sectionQuery = "";
				let core_numberQuery = "";
				let orderingQuery = "";
				let availabilityQuery = "";

				if (fromCookie.subcategory.length > 0) {
					fromCookie.subcategory.forEach((el: any) => {
						subcategoryQuery += `&subcategory=${
							Array.isArray(router.query.id) && router.query.id[0]
						}`;
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

				const res = await useHttp().get(
					"/products/products/" +
						subcategoryQuery +
						sectionQuery +
						core_numberQuery +
						orderingQuery +
						availabilityQuery +
						`&page=${JSON.stringify(e.selected + 1)}`
				);
				products = res.data;
			} else {
				const res = await useHttp().get(
					"/products/products/" + `?page=${JSON.stringify(e.selected + 1)}`
				);
				products = res.data;
			}
			setPagesCount(products.count_pages);
			dispatch(setPage(products.count_pages));
			dispatch(setProducts(products));
			setOnLoad(false);
		} catch (err) {}
	}

	return (
		<div className={cn(cls.GoodsListSection)}>
			<button
				className={cls.mockBtn}
				onClick={() => (isOpened ? openFilters(false) : openFilters(true))}>
				{isOpened ? (
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M18 6L6 18'
							stroke='#00ABC2'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M6 6L18 18'
							stroke='#00ABC2'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				) : (
					<svg
						width='18'
						height='18'
						viewBox='0 0 18 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<rect y='2' width='18' height='2' rx='1' fill='#00ABC2' />
						<rect y='8' width='18' height='2' rx='1' fill='#00ABC2' />
						<rect y='14' width='18' height='2' rx='1' fill='#00ABC2' />
						<rect x='12' y='2' width='2' height='2' fill='white' />
						<circle cx='13' cy='3' r='2' stroke='#00ABC2' strokeWidth='2' />
						<rect x='4' y='8' width='2' height='2' fill='white' />
						<circle cx='5' cy='9' r='2' stroke='#00ABC2' strokeWidth='2' />
						<rect x='12' y='14' width='2' height='2' fill='white' />
						<circle cx='13' cy='15' r='2' stroke='#00ABC2' strokeWidth='2' />
					</svg>
				)}
			</button>

			{productsState ? (
				<div>
					<div>
						<div
							className={
								onLoad ? "loading mx-auto w-fit block my-40" : "hidden"
							}>
							<div className='loading__inner'></div>
						</div>
						<ul id='items' className={!onLoad ? cls.goodsList : "hidden"}>
							{productsState?.results.map((el: any) => (
								<ProductCardItem
									itemProp='itemListElement'
									theme={ThemeProductCard.CATALOG}
									{...el}
									key={el.code}
								/>
							))}
						</ul>
						{pages > 1 && (
							<div
								className={!onLoad ? "max-w-[300px] mx-auto mt-10" : "hidden"}>
								<ReactPaginate
									breakLabel='...'
									nextLabel='>'
									onPageChange={handleChangePage}
									pageRangeDisplayed={2}
									pageCount={pages as number}
									className='flex items-center pagination'
									previousLabel='<'
									renderOnZeroPageCount={null}
									activeClassName='pagination__active'
									pageClassName='cursor-pointer hover:text-[#00abc2] transition-all duration-300'
								/>
							</div>
						)}
					</div>
				</div>
			) : (
				<p className={cls.goodsList_notFound}>{t("noTovars")}</p>
			)}
		</div>
	);
};
