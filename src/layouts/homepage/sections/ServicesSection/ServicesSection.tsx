/** @format */

import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./ServicesSection.module.scss";
import { Title } from "@/UI/Title/Title";
import Image from "next/image";
import IconServicesCalc from "@/assets/icons/IconServicesCalc.svg";
import IconServicesCalcWeight from "@/assets/icons/IconServicesCalcWeight.svg";
import IconServicesDecoding from "@/assets/icons/IconServicesDecoding.svg";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const cn = classNames.bind(cls);

interface ServicesSectionProps {
	className?: string;
}

export const ServicesSection: FC<ServicesSectionProps> = (props) => {
	const { className } = props;
	const { t } = useTranslation();

	return (
		<section
			itemScope
			itemType='http://schema.org/ItemList'
			className={cn(cls.ServicesSection)}>
			<Title className={cls.ServicesSection_title}>{t("list.services")}</Title>

			<ul className={cls.ServicesSection_list}>
				<li>
					<Link
						href='/services'
						className={cls.ServicesSection_item + " itemUp"}>
						<div className={cls.ServicesSection_itemImg}>
							<Image
								itemProp='image'
								src={IconServicesCalcWeight}
								alt={t("alt_services_icon") + "| Almaty Kazkabel"}
							/>
						</div>
						<span itemProp='name' className={cls.ServicesSection_itemTitle}>
							{t("tableWeight")}
						</span>
					</Link>
				</li>

				<li>
					<Link
						href='/services'
						className={cls.ServicesSection_item + " itemUp"}>
						<div className={cls.ServicesSection_itemImg}>
							<Image
								itemProp='image'
								src={IconServicesCalc}
								alt={t("alt_services_icon") + "| Almaty Kazkabel"}
							/>
						</div>
						<span itemProp='name' className={cls.ServicesSection_itemTitle}>
							{t("raschetCabel")}
						</span>
					</Link>
				</li>

				<li>
					<Link
						href='/services'
						className={cls.ServicesSection_item + " itemUp"}>
						<div className={cls.ServicesSection_itemImg}>
							<Image
								itemProp='image'
								src={IconServicesDecoding}
								alt={t("alt_services_icon") + "| Almaty Kazkabel"}
							/>
						</div>
						<span itemProp='name' className={cls.ServicesSection_itemTitle}>
							{t("rashifrovka")}
						</span>
					</Link>
				</li>
			</ul>
		</section>
	);
};
