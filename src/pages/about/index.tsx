/** @format */

import { ActiveHeaderPage } from "@/components/header/Header";
import { MainLayout } from "@/layouts/MainLayout";
import { Title } from "@/UI/Title/Title";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import Image from "next/image";
import { AboutService } from "@/services/About.service";
import { AboutI } from "@/types/AboutTypes";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageContext } from "next";

const cn = classNames.bind(cls);

export default function aboutPage(props: AboutI) {
	const { t } = useTranslation();

	const router = useRouter();

	return (
		<MainLayout activePage={ActiveHeaderPage.ABOUT}>
			<Head>
				<title>{t("title_about")}</title>
				<meta name='description' content={t("description_about") as string} />
				<meta property='og:title' content={t("title_about") as string} />
				<meta
					property='og:url'
					content={"https://cable.kz" + router.pathname}
				/>
				<meta property='og:image' content={props.image} />
				<meta name='og:title' content={t("title_about") as string} />
				<meta
					name='og:description'
					content={t("description_about") as string}
				/>
				<link rel='canonical' href={"https://cable.kz" + router.pathname} />

				<meta itemProp='name' content={t("title_about") as string} />
				<meta
					itemProp='description'
					content={t("description_about") as string}
				/>
				<meta itemProp='image' content={props.image} />
			</Head>
			<div
				itemScope
				itemType='https://schema.org/AboutPage'
				className={cn(cls.about)}>
				<Title itemProp='name' h1={true} className={cls.about_title}>
					{props && props.title}
				</Title>
				<div className={cls.about_wrapper}>
					<Image
						itemProp='image'
						className={cls.about_img}
						src={props && props.image}
						alt={props.title + "| Almaty Kazkabel"}
						width={1150}
						height={460}
					/>

					<div
						itemProp='text'
						className={cls.about_text}
						dangerouslySetInnerHTML={{ __html: props && props.text }}
					/>
					<p
						itemProp='description'
						className={cls.about_accent}
						dangerouslySetInnerHTML={{ __html: props && props.our_goal }}></p>
				</div>
			</div>
		</MainLayout>
	);
}

export async function getServerSideProps(ctx: NextPageContext) {
	const res = await AboutService(ctx).getAboutInfo();

	return {
		props: res,
	};
}
