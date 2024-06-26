import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import classNames from "classnames/bind";
import cls from "./FilterSection.module.scss";
import { Button, ThemeButton } from "@/UI/Button/ui/Button";
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	AccordionItem,
} from "react-headless-accordion";
import { useAppSelector, useAppDispatch } from "@/hooks/store";
import { Field, Form, Formik } from "formik";
import { CheckBoxInstance } from "@/shared/formElements/checkboxInstance/CheckBoxInstance";
import { RadioInstance } from "@/shared/formElements/radioInstance/RadioInstance";
import { ProductService } from "@/services/Product.servise";
import { setPage, setProducts } from "@/store/slices/ProductSlice";
import { queriesGenerator } from "@/helpers/queriesGenerator";
import { SortByWidget } from "@/layouts/CatalogPage/widgets/SortByWidget/SortByWidget";
import { useTranslation } from "react-i18next";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import nookies from "nookies";
import { useHttp } from "@/hooks/useHttp";
import { useRouter } from "next/router";

const cn = classNames.bind(cls);

interface FilterSectionProps {
	className?: string;
	isOpened?: boolean;
	closeFilters?: Dispatch<SetStateAction<boolean>>;
}

export const FilterSection: FC<FilterSectionProps> = (props) => {
	const { t } = useTranslation();
	const { isOpened, closeFilters } = props;
	const [categories, setCategories] = useState<any>([]);
	const { cores, products, stateForQueris } = useAppSelector(
		(state) => state.ProductSlice
	);

	const router = useRouter();

	const [checkedFilters, setCheckedFilters] = useState<any>({
		subcategory: [],
		section: [],
		core_number: [],
		availability: "",
		ordering: "",
		sections: [],
	});

	async function handleGetFilters() {
		if (parseCookies().queries) {
			setCheckedFilters(await JSON.parse(parseCookies().queries));
		}
	}

	const dispatch = useAppDispatch();

	interface sortI {
		availability: "Все" | "в наличии" | "под заказ" | "";
		checkedCors: string[];
		categories: string[];
		sortWidget: "-cost" | "cost";
		sectionCors: string[];
		sections: string[];
	}

	const submitHandler = async (value: sortI) => {
		const { availability, categories, checkedCors, sortWidget, sections } =
			value;

		const core_number = [
			...new Set(checkedCors.map((el) => el.slice(0, el.indexOf("x")))),
		];
		const section = [
			...new Set(
				checkedCors.map((el) => el.slice(el.indexOf("x") + 1, el.length))
			),
		];

		const coresQuery = queriesGenerator(core_number, "core_number");
		const sectionsQuery = queriesGenerator(section, "section");
		const categoriesQuery = queriesGenerator(categories, "subcategory");
		const availabilityQuery =
			availability === "Все" ? "" : `&availability=${availability}`;
		const sortQuery = `&ordering=${sortWidget}`;

		const queries = `?${coresQuery}${sectionsQuery}${categoriesQuery}${availabilityQuery}${sortQuery}`;

		const cookieQuery = {
			subcategory: Array.isArray(router.query.id)
				? router.query.id[0]
				: router.query.id,
			section: section,
			core_number: core_number,
			availability: availability === "Все" ? "" : availability,
			ordering: sortWidget,
			sections: sections,
		};

		setCookie(null, "queries", JSON.stringify(cookieQuery), {
			maxAge: 30 * 24 * 60 * 60,
		});

		let fromCookie;
		fromCookie = JSON.parse(nookies.get().queries || "{}");

		let subcategoryQuery = "?";
		let sectionQuery = "";
		let core_numberQuery = "";
		let orderingQuery = "";
		let sections2 = "";

		subcategoryQuery += `subcategory=${
			router.query.id ? router.query.id[0] : ""
		}`;

		if (fromCookie.section && fromCookie.section.length > 0) {
			let temp = "";
			fromCookie.section.forEach((el: any) => {
				temp += `${el},`;
			});
			sectionQuery = "&section=" + temp.slice(1, temp.length - 1);
		} else {
			sectionQuery = "";
		}

		if (fromCookie.core_number && fromCookie.core_number.length > 0) {
			let temp = "";
			fromCookie.core_number.forEach((el: any) => {
				temp += `${el},`;
			});
			core_numberQuery = "&core_number=" + temp.slice(1, temp.length - 1);
		} else {
			core_numberQuery = "";
		}

		if (fromCookie.ordering && fromCookie.ordering.length > 0) {
			orderingQuery += `&ordering=${fromCookie.ordering}`;
		} else {
			orderingQuery = "";
		}

		if (fromCookie.sections && fromCookie.sections.length > 0) {
			console.log(fromCookie.sections);

			let temp = "";
			fromCookie.sections.map((el: any) => {
				temp += `${el},`;
			});
			sections2 = "&sections=" + temp.slice(3, temp.length - 1);
		}
		// if (fromCookie.availability && fromCookie.availability.length > 0) {
		// 	availabilityQuery += `&availability=${fromCookie.availability}`;
		// } else {
		// 	availabilityQuery = "";
		// }

		const res = await useHttp().get<any>(
			"/products/products/" +
				subcategoryQuery +
				// sectionQuery +
				// core_numberQuery +
				orderingQuery +
				availabilityQuery +
				sections2
		);
		dispatch(setPage(res.data.count_pages));
		dispatch(setProducts(res.data));
		document.querySelector("#items")?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		handleGetFilters();
		console.log("Зашел");
	}, [stateForQueris]);

	function getCors() {
		let temp = [""];
		checkedFilters.core_number.map((el: string, index: number) => {
			temp.push(`${el}x${checkedFilters.section[index]}`);
		});
		return temp;
	}

	async function getCategories() {
		try {
			let res = await useHttp().get("products/categories/");
			setCategories(res.data.results);
		} catch (err) {}
	}

	useEffect(() => {
		getCategories();
		console.log(checkedFilters.sections);
	}, []);

	return (
		<div className={cn(cls.FilterSection, { visible: isOpened })}>
			<Formik
				itemScope
				itemType='https://schema.org/Offer'
				enableReinitialize={true}
				initialValues={
					checkedFilters && {
						availability: checkedFilters ? checkedFilters.availability : "",
						checkedCors: checkedFilters ? getCors() : [],
						categories: checkedFilters ? checkedFilters.subcategory : [],
						sections: checkedFilters.sections,
						sortWidget: checkedFilters ? checkedFilters.ordering : "cost",
					}
				}
				onSubmit={(values: sortI) => submitHandler(values)}>
				{({ isSubmitting, values }) => (
					<Form>
						{/* Header of Filters */}
						<div className={cls.header}>
							<span itemProp='numberOfItems'>
								{products?.count || "Нет"} {t("tovars")}
							</span>

							<div className={cls.mainBtns}>
								<Button
									theme={ThemeButton.YELLOW}
									className={cls.resetBtn}
									type='button'
									onClick={async () => {
										values.availability = "Все";
										values.categories = [];
										values.checkedCors = [];
										values.sortWidget = "cost";
										values.sections = [];
										const res = await useHttp().get(
											`products/products/?subcategory=${
												Array.isArray(router.query.id)
													? router.query.id[0]
													: router.query.id
											}`
										);
										setCheckedFilters({
											subcategory: [],
											section: [],
											core_number: [],
											availability: "",
											ordering: "",
											sections: [],
										});
										setCookie(
											null,
											"queries",
											JSON.stringify({
												subcategory: [],
												section: [],
												core_number: [],
												availability: "",
												ordering: "",
												sections: [],
											}),
											{
												maxAge: 30 * 24 * 60 * 60,
											}
										);
										dispatch(setPage(res.data.count_pages));
										dispatch(setProducts(res.data));
									}}>
									{t("clear")}
								</Button>
							</div>
						</div>

						{/* Sort by */}
						<SortByWidget />

						{/* Availability filters */}
						<div className={cls.availability}>
							<h3 className={cn(cls.availability_title, cls.filterTitle)}>
								{t("nalichie")}
							</h3>

							<RadioInstance
								itemProp='availability'
								name='availability'
								value=''
								id='all'
								text={t("all") || "Все"}
								className={cls.FilterSection_radio}
								checked={
									// checkedFilters.availability === "" ||
									values.availability === ""
								}
							/>
							<RadioInstance
								itemProp='availability'
								name='availability'
								value='в наличии'
								id='inStock'
								text={t("estUNas") || "В наличии"}
								className={cls.FilterSection_radio}
								checked={
									// checkedFilters.availability === "в наличии" ||
									values.availability === "в наличии"
								}
							/>
							<RadioInstance
								itemProp='availability'
								name='availability'
								value='под заказ'
								id='underOrder'
								text={t("podZakaz") || "Под заказ"}
								className={cls.FilterSection_radio}
								checked={
									// checkedFilters.availability === "под заказ" ||
									values.availability === "под заказ"
								}
							/>
						</div>

						{/* Categories filters */}
						<div className={cls.product}>
							{/* <h3 className={cn(cls.product_title, cls.filterTitle)}>
								{t("list.product")}
							</h3> */}

							<Accordion className={cls.filtersAcc} alwaysOpen={true}>
								{/* Categories */}
								<>
									{/* {categories &&
										categories?.map((cat: any, i: number) => (
											<AccordionItem isActive={true} key={cat.name}>
												{({ open }: { open: boolean }) => (
													<>
														<AccordionHeader
															as='div'
															className={cn(cls.filtersAcc_title, {
																filtersAcc_titleActive: open,
															})}>
															<h3 itemProp='category' className={cls.accTitle}>
																{cat.name}
															</h3>
															<svg
																className={cn(cls.filtersAcc_arrow, {
																	filtersAcc_arrowActive: open,
																})}
																width='15'
																height='9'
																viewBox='0 0 15 9'
																fill='none'
																xmlns='http://www.w3.org/2000/svg'>
																<path
																	d='M13.0129 7.00535L7.00781 1.01049L1.01295 7.01562'
																	strokeWidth='2'
																	strokeLinecap='round'
																	strokeLinejoin='round'
																/>
															</svg>
														</AccordionHeader>

														<AccordionBody
															className={cn(cls.filtersAcc_body, {
																filtersAcc_bodyActive: open,
															})}
															as='ul'>
															{cat.subcategory_set.map((subcat: any) => (
																<li
																	className={cls.filtersAcc_item}
																	key={subcat.name}>
																	<CheckBoxInstance
																		value={subcat.name}
																		name='categories'
																		id={subcat.name}
																		text={subcat.name}
																		className={cls.filtersAcc_itemInput}
																		checked={
																			// checkedFilters.subcategory.includes(
																			//   subcat.name
																			// ) ||
																			values.categories.includes(subcat.name)
																		}
																	/>
																</li>
															))}
														</AccordionBody>
													</>
												)}
											</AccordionItem>
										))} */}

									{/* Сечение */}
									<AccordionItem isActive={true}>
										{({ open }: { open: boolean }) => (
											<>
												<AccordionHeader
													className={cn(
														cls.filtersAcc_title,
														cls.filtersAcc_titleCross
													)}
													as='div'>
													<h3 className={cls.accTitle}>{t("sechenie")} </h3>
													<svg
														className={cn(cls.filtersAcc_arrow, {
															filtersAcc_arrowActive: open,
														})}
														width='15'
														height='9'
														viewBox='0 0 15 9'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'>
														<path
															d='M13.0129 7.00535L7.00781 1.01049L1.01295 7.01562'
															stroke='#39424b'
															strokeWidth='2'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>
												</AccordionHeader>
												<AccordionBody
													className={cn(cls.filtersAcc_body, {
														filtersAcc_bodyActive: open,
													})}
													as='ul'>
													{cores ? (
														Object.keys(cores).map((core) => (
															<ul
																className={cls.filtersAcc_coreSect}
																key={core}>
																{cores[core].map((coreSect) => (
																	<li
																		className={cls.filtersAcc_coreSectItem}
																		key={`${core}x${coreSect}`}
																		data-sub={`${core}x${coreSect}`}>
																		<CheckBoxInstance
																			text={`${core}x${coreSect}`}
																			name='sections'
																			value={`${core}x${coreSect}`}
																			id={`${core}x${coreSect}`}
																			checked={
																				// (checkedFilters.core_number.includes(
																				//   core
																				// ) &&
																				//   checkedFilters.section.includes(
																				//     coreSect
																				//   )) ||
																				values.sections?.includes(
																					`${core}x${coreSect}`
																				)
																			}
																		/>
																	</li>
																))}
															</ul>
														))
													) : (
														<></>
													)}
												</AccordionBody>
											</>
										)}
									</AccordionItem>
								</>
							</Accordion>
						</div>

						{/* Submit Btns */}
						<div className={cls.submitBtns}>
							<Button
								className={cls.submitBtn}
								theme={ThemeButton.BLUE}
								type='submit'
								disabled={isSubmitting}
								onClick={() => closeFilters && closeFilters(false)}>
								{t("aprove2")}
							</Button>
							<a href='#top' className={cls.anchorUp}>
								{t("toUp")}
							</a>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};
