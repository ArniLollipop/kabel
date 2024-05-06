import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./SeeMoreCard.module.scss";
import { seeMoreCardI } from "@/data/SeeMoreCardData";
import Link from "next/link";
import Image from "next/image";
import { productI } from "@/types/ProductTypes";
import nullImg from "@/assets/images/nullImg.png";
import { useTranslation } from "react-i18next";

const cn = classNames.bind(cls);

interface SeeMoreCardProps extends productI {
	className?: string;
}

export const SeeMoreCard: FC<SeeMoreCardProps> = (props) => {
	const { t } = useTranslation();
	const { className, name, image, description, code, subcategory_slug } = props;

	return (
		<div className={cn(cls.SeeMoreCard)}>
			<Image
				className={cls.SeeMoreCard_img}
				src={image || nullImg}
				alt={name + "| Almaty Kazkabel"}
				width={178}
				height={178}
			/>

			<div className={cls.SeeMoreCard_text}>
				<h4 className={cls.SeeMoreCard_title}>{name}</h4>
				<p className={cls.SeeMoreCard_descr}>
					{description
						? description.length > 50
							? `${description.slice(0, 50)}...`
							: description
						: ""}
				</p>
				<Link
					className={cls.SeeMoreCard_link}
					href={`/catalog/${subcategory_slug}/${code}`}>
					{t("another")}
				</Link>
			</div>
		</div>
	);
};
