/** @format */

import { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { useRouter } from "next/router";
import { ordersData } from "@/data/OrdersData";
import { MainLayout } from "@/layouts/MainLayout";
import {
	ActiveCabinetPageEnum,
	CabinetLayout,
} from "@/layouts/CabinetLayot/CabinetLayout";
import Image from "next/image";
import Link from "next/link";
import { useHttp } from "@/hooks/useHttp";
import NullImg from "@/assets/images/nullImg.png";

const cn = classNames.bind(cls);

import { useTranslation } from "react-i18next";
import Head from "next/head";

interface OrderCardProps {
	className?: string;
}

export default function OrderCard(props: OrderCardProps) {
	const { className } = props;
	const router = useRouter();
	const [product, setProduct] = useState<any>();

	const { t } = useTranslation();

	async function getProductId() {
		try {
			const res = await useHttp().get("orders/orders/" + router.query.id + "/");
			setProduct(res.data);
		} catch (err) {}
	}

	useEffect(() => {
		getProductId();
	}, []);

	return (
		<CabinetLayout
			className={cn(cls.orders)}
			activePage={ActiveCabinetPageEnum.ORDERS}>
			<Head>
				<title>{t("title_orders")}</title>
				<meta name='description' content={t("description_orders") as string} />
				<meta name='og:title' content={t("title_orders") as string} />
				<meta
					name='og:description'
					content={t("description_orders") as string}
				/>
				<meta property='og:image' content={"https://cable.kz/Logo.svg"} />
				<link rel='canonical' href={"https://cable.kz" + router.pathname} />

				<meta itemProp='name' content={t("title_orders") as string} />
				<meta
					itemProp='description'
					content={t("description_orders") as string}
				/>
				<meta itemProp='image' content='https://cable.kz/Logo.svg' />
			</Head>
			<div className={cls.orders_wrapper}>
				<Link className={cls.backLink} href='/cabinet/orders'>
					<svg
						width='10'
						height='18'
						viewBox='0 0 10 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M8.75 16.5L1.25 9L8.75 1.5'
							stroke='#00ABC2'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</Link>
				{
					<div className={cls.items__grid}>
						{product &&
							product.items?.map((el: any) => {
								return (
									<div className={cls.item__grid}>
										<div className={cls.item_box}>
											<Image
												src={el.product_info.image || NullImg}
												alt={el.product_info.name + "| Almaty Kazkabel"}
												className={cls.image}
												width={100}
												height={100}
											/>
											<p className={cls.weight__text}>{el.product_info.name}</p>
											<p className={cls.text}>
												{t("lengthId")} {el.length} м
												<br />
												{product?.is_paid ? t("dead") : t("noDead")} <br />
												Дата: {product?.updated_at.split("T")[0]}
											</p>
										</div>
									</div>
								);
							})}
					</div>
				}
			</div>
		</CabinetLayout>
	);
}
