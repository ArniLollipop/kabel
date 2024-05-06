import { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import cls from "./CatalogPage.module.scss";
import { FilterSection } from "./sections/FilterSection/FilterSection";
import { GoodsListSection } from "./sections/GoodsListSection/GoodsListSection";
import { useRouter } from "next/router";
import { useHttp } from "@/hooks/useHttp";
import { Title } from "@/UI/Title/Title";

const cn = classNames.bind(cls);

interface CatalogPageProps {
	className?: string;
	title?: string;
}

export const CatalogPage: FC<CatalogPageProps> = (props) => {
	const { className, title } = props;

	const router = useRouter();
	async function changeStatus() {
		const res = await useHttp().get(
			`/orders/orders/order_pay_status/?id=${router.query.order_id}`
		);
		window.location.href = "https://cable.kz/catalog";
	}

	useEffect(() => {
		if (router.query.order_id) {
			changeStatus();
			// console.log(router.query.order_id);
		}
	}, []);

	const [isFiltersOpened, setIsFitlersOpened] = useState(false);

	return (
		<div className={cn(cls.CatalogPage)}>
			<div className={cls.CatalogPage_title}>
				<Title id='top' h1={true} className={cls.about_title}>
					{title || "Каталог"}
				</Title>
			</div>

			<div
				itemScope
				itemType='https://schema.org/ItemList'
				className={cls.CatalogPage_wrapper}>
				<FilterSection
					isOpened={isFiltersOpened}
					closeFilters={setIsFitlersOpened}
				/>
				<GoodsListSection
					isOpened={isFiltersOpened}
					openFilters={setIsFitlersOpened}
				/>
			</div>
		</div>
	);
};
