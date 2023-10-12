/** @format */

import classNames from "classnames/bind";
import cls from "./article.module.scss";
import { MainLayout } from "@/layouts/MainLayout";
import { Title } from "@/UI/Title/Title";
import Image from "next/image";
import { ActiveHeaderPage } from "@/components/header/Header";
import { NextPageContext } from "next";

import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useHttp } from "@/hooks/useHttp";
import Head from "next/head";

const cn = classNames.bind(cls);

export default function articlePage(props: any) {
	const router = useRouter();
	const { t } = useTranslation();

	return (
		<MainLayout activePage={ActiveHeaderPage.NEWS}>
			<Head>
				<title>{t("title_news")}</title>
				<meta name='description' content={t("description_news") as string} />
				<meta property='og:title' content={props?.title} />
				<meta
					property='og:url'
					content={"https://cable.kz" + router.pathname}
				/>
				<meta property='og:image' content={props.newssection_set[0].image} />
				<meta name='og:description' content={t("description_news") as string} />
				<link rel='canonical' href={"https://cable.kz" + router.pathname} />
				<meta itemProp='name' content={t("title_news") as string} />
				<meta
					itemProp='description'
					content={t("description_news") as string}
				/>
				<meta itemProp='image' content='https://cable.kz/Logo.svg' />
			</Head>
			<div
				itemScope
				itemType='https://schema.org/NewsArticle'
				className={cn(cls.articlePage)}>
				<Title className={cls.articlePage_title}>{t("list.news")}</Title>

				<div className={cls.articlePage_wrapper}>
					<div className={cls.articlePage_content}>
						<h3 itemProp='name' className={cls.articlePage_artTitle}>
							{props?.title}
						</h3>

						{props?.newssection_set.length === 0 && (
							<>
								<Image
									itemProp='image'
									src={props.thumbnail}
									alt={props?.title + "| Almaty Kazkabel"}
									width={1146}
									height={460}
									className={cls.articlePage_imgEmpty}></Image>
								<p itemProp='description' className={cls.articlePage_text}>
									{props?.description}
								</p>
							</>
						)}

						{props?.newssection_set.length > 0 &&
							props?.newssection_set?.map(
								({ id, image, is_marked, text_site, image_text_site }: any) => (
									<section key={id}>
										{image && (
											<Image
												itemProp='image'
												className={cls.articlePage_img}
												src={image}
												alt={id + "| Almaty Kazkabel"}
												width={1146}
												height={460}
											/>
										)}
										<div
											itemProp='articleBody'
											className={cls.articlePage_img__text}
											dangerouslySetInnerHTML={{
												__html: image_text_site,
											}}></div>
										<div
											itemProp='articleBody'
											className={cn(cls.articlePage_text, {
												marked: is_marked,
											})}
											dangerouslySetInnerHTML={{ __html: text_site }}></div>
									</section>
								)
							)}
					</div>
				</div>
			</div>
		</MainLayout>
	);
}

export async function getServerSideProps(ctx: NextPageContext) {
	const { id } = ctx.query;
	const res = await useHttp().get(`news/news/${id}/`, {
		headers: {
			"Accept-Language": ctx?.locale || "ru",
		},
	});
	return {
		props: res.data,
	};
}
