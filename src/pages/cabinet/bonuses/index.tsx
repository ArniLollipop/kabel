import cls from "./index.module.scss";

import {
	ActiveCabinetPageEnum,
	CabinetLayout,
} from "@/layouts/CabinetLayot/CabinetLayout";
import Image from "next/image";
import ImageCabinetBonus from "@/assets/images/ImageCabinetBonus.png";
import { useHttp } from "@/hooks/useHttp";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import Head from "next/head";
import { useRouter } from "next/router";

export default function bonusesPage() {
	const { t } = useTranslation();

	const [bonus, setBonus] = useState<any>();

	async function getBonus() {
		try {
			const res = await useHttp().get("users/users/my_bonus_card/", {
				headers: {
					Authorization: "Bearer " + localStorage.getItem("access_token"),
				},
			});
			console.log("====================================");
			console.log(res);
			console.log("====================================");
			setBonus(res.data);
		} catch (err) {}
	}

	useEffect(() => {
		getBonus();
	}, []);

	const router = useRouter();

	return (
		<CabinetLayout
			activePage={ActiveCabinetPageEnum.BONUSES}
			className={cls.bonuses}>
			<Head>
				<title>{t("title_bonus")}</title>
				<meta name='description' content={t("description_bonus") as string} />
				<meta property='og:title' content={t("title_bonus") as string} />
				<meta
					property='og:url'
					content={"https://cable.kz" + router.pathname}
				/>
				<meta
					name='og:description'
					content={t("description_bonus") as string}
				/>
				<link rel='canonical' href={"https://cable.kz" + router.pathname} />

				<meta
					property='og:image'
					content={
						"https://cable.kz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImageCabinetBonus.1b665954.png&w=640&q=75"
					}
				/>

				<meta itemProp='name' content={t("title_bonus") as string} />
				<meta
					itemProp='description'
					content={t("description_bonus") as string}
				/>
				<meta
					itemProp='image'
					content='https://cable.kz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImageCabinetBonus.1b665954.png&w=640&q=75'
				/>
			</Head>
			<h3>{t("bonuses")}</h3>

			<div className={cls.bonuses_info}>
				<span>
					{t("cardNumber")} {bonus ? bonus.id : ""}
				</span>
				<span>
					{t("personalSale")}{" "}
					{bonus
						? bonus.bonus_percentage
							? bonus.bonus_percentage
							: "0"
						: "0"}
					%
				</span>
				<span>
					{t("balance")}: {bonus ? bonus.balance : "0"}
				</span>
			</div>

			<Image
				className={cls.bonuses_img}
				src={ImageCabinetBonus}
				alt={t("alt_bonus_image") + "| Almaty Kazkabel"}
			/>
		</CabinetLayout>
	);
}
