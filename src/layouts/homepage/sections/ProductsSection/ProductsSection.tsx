import { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import cls from "./ProductsSection.module.scss";
import { Title } from "@/UI/Title/Title";
import Image from "next/image";
import ImageMockCard from "@/assets/images/ImageMockCard.png";
import ImageMockCard2 from "@/assets/images/ImageMockCard2.png";
import ImageMockCard3 from "@/assets/images/ImageMockCard3.png";
import Link from "next/link";
import { categoryI } from "@/types/ProductTypes";
import { useHttp } from "@/hooks/useHttp";
import { useTranslation } from "react-i18next";

const cn = classNames.bind(cls);
interface ProductsSectionProps {
	categories: categoryI[];
}

export const ProductsSection: FC<any> = (props) => {
	const { t } = useTranslation();

	const { categories, isCatalog } = props;

	return (
		<section className={cn(cls.ProductsSection)}>
			{isCatalog && (
				<Title className={cls.ProductsSection_title}>{t("list.product")}</Title>
			)}

			<ul
				itemScope
				itemProp='https://schema.org/ItemList'
				className={cls.ProductsSection_list}>
				{categories.results?.map((cat: any, index: number) => (
					<li
						itemProp='itemListElement'
						itemScope
						itemType='https://schema.org/ListItem'
						className={cls.ProductsSection_item + " scale"}
						key={cat.name}>
						<Link
							itemProp='url'
							itemScope
							itemType='https://schema.org/ItemList'
							href={"/catalog?id=" + cat.id}
							className={cls.ProductsSection_link}>
							<Image
								itemProp='image'
								src={cat.image}
								alt={t("product_image" + (index + 1)) + "| Almaty Kazkabel"}
								className={cls.ProductsSection_img}
								width={390}
								height={290}
							/>
							<p itemProp='name' className={cls.ProductsSection_imgDescr}>
								{cat.name}
							</p>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};
