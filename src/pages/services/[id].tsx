/** @format */

// packages
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

// data
import { data } from "@/data/ServicesData";

// assets
import { ServicesBackIcon, ServicesDetailsIcon } from "@/assets/icons";
import cls from "../../components/services/ServicesID.module.scss";

// components
import { ServicesWeight } from "@/components/services/ServicesWeight";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ServicesEncoding } from "@/components/services/ServicesEncoding";
import { MainLayout } from "@/layouts/MainLayout";
import { ServicesLayout } from "@/layouts/ServicesLayout";
import { useEffect, useState } from "react";
import { Button } from "@/UI/Button";
import { ThemeButton } from "@/UI/Button/ui/Button";
import { ActiveHeaderPage } from "@/components/header/Header";
import { useTranslation } from "react-i18next";

let cn = classNames.bind(cls);

export default function Home() {
	const { t } = useTranslation();
	const router = useRouter();
	let { id } = router.query;

	const showArticles = data.map((article) => {
		const { articleId, title, link, articleIcon: ArticleIcon } = article;
		const isActive = link === id;

		return (
			<article
				key={articleId}
				className={cn(
					cls.servicesArticleIntro,
					isActive ? cls.active : cls.default
				)}>
				{router.pathname.includes("section") && (
					<Head>
						<title>{t("title_section")}</title>
						<meta
							name='description'
							content={t("description_section") as string}
						/>
						<meta
							name='og:description'
							content={t("description_section") as string}
						/>
						<meta itemProp='name' content={t("title_section") as string} />
						<meta
							itemProp='description'
							content={t("description_section") as string}
						/>
					</Head>
				)}
				{router.pathname.includes("encoding") && (
					<Head>
						<title>{t("title_encoding")}</title>
						<meta
							name='description'
							content={t("description_encoding") as string}
						/>
						<meta
							name='og:description'
							content={t("description_encoding") as string}
						/>
						<meta itemProp='name' content={t("title_encoding") as string} />
						<meta
							itemProp='description'
							content={t("description_encoding") as string}
						/>
					</Head>
				)}
				{router.pathname.includes("weight") && (
					<Head>
						<title>{t("title_weight")}</title>
						<meta
							name='description'
							content={t("description_weight") as string}
						/>
						<meta
							name='og:description'
							content={t("description_weight") as string}
						/>
						<meta itemProp='name' content={t("title_weight") as string} />
						<meta
							itemProp='description'
							content={t("description_weight") as string}
						/>
					</Head>
				)}
				<Link href={`/services/${link}`}>
					<ArticleIcon
						className={cls.articleIconWidthNHeight}
						textColor={isActive ? "#fff" : "#00ABC2"}
					/>
					{link === router.query.id ? (
						<h1>
							{title === "Таблица Веса кабеля"
								? t("tableWeight")
								: title === "Расчет сечения кабеля"
								? t("raschetSechenia")
								: t("rashifrovka")}
						</h1>
					) : (
						<h2>
							{title === "Таблица Веса кабеля"
								? t("tableWeight")
								: title === "Расчет сечения кабеля"
								? t("raschetSechenia")
								: t("rashifrovka")}
						</h2>
					)}
					<ServicesDetailsIcon textColor={isActive ? "#fff" : "#00ABC2"} />
				</Link>
			</article>
		);
	});

	return (
		<>
			{router.query.id?.includes("section") && (
				<Head>
					<title>{t("title_section")}</title>
					<meta
						name='description'
						content={t("description_section") as string}
					/>
					<meta
						name='og:description'
						content={t("description_section") as string}
					/>
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<link rel='icon' href='/favicon.ico' />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Roboto:wght@400;500&display=swap'
					/>
					<meta property='og:title' content={t("title_section") as string} />
					<meta
						property='og:url'
						content={"https://cable.kz" + router.pathname}
					/>
					<meta property='og:image' content={"https://cable.kz/Logo.svg"} />

					<meta itemProp='name' content={t("title_section") as string} />
					<meta
						itemProp='description'
						content={t("description_section") as string}
					/>
					<meta itemProp='image' content='https://cable.kz/Logo.svg' />

					{/* <meta
            property='og:image'
            content={
              "https://cable.kz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImageDelivery.675cc87e.png&w=640&q=75"
            }
          /> */}
				</Head>
			)}
			{router.query.id?.includes("encoding") && (
				<Head>
					<title>{t("title_encoding")}</title>
					<meta
						name='description'
						content={t("description_encoding") as string}
					/>
					<meta
						name='og:description'
						content={t("description_encoding") as string}
					/>
					<meta itemProp='name' content={t("title_encoding") as string} />
					<meta
						itemProp='description'
						content={t("description_encoding") as string}
					/>
					<meta itemProp='image' content='https://cable.kz/Logo.svg' />
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<link rel='icon' href='/favicon.ico' />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Roboto:wght@400;500&display=swap'
					/>
					<meta property='og:title' content={t("title_encoding") as string} />
					<meta
						property='og:url'
						content={"https://cable.kz" + router.pathname}
					/>
					<meta property='og:image' content={"https://cable.kz/Logo.svg"} />

					<link rel='canonical' href={"https://cable.kz" + router.pathname} />

					{/* <meta
            property='og:image'
            content={
              "https://cable.kz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImageDelivery.675cc87e.png&w=640&q=75"
            }
          /> */}
				</Head>
			)}
			{router.query.id?.includes("weight") && (
				<Head>
					<title>{t("title_weight")}</title>
					<meta
						name='description'
						content={t("description_weight") as string}
					/>
					<meta
						name='og:description'
						content={t("description_weight") as string}
					/>

					<meta itemProp='name' content={t("title_weight") as string} />
					<meta
						itemProp='description'
						content={t("description_weight") as string}
					/>
					<meta itemProp='image' content='https://cable.kz/Logo.svg' />
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<link rel='icon' href='/favicon.ico' />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Roboto:wght@400;500&display=swap'
					/>
					<meta property='og:title' content={t("title_weight") as string} />
					<meta
						property='og:url'
						content={"https://cable.kz" + router.pathname}
					/>
					<meta property='og:image' content={"https://cable.kz/Logo.svg"} />
				</Head>
			)}
			<MainLayout activePage={ActiveHeaderPage.SERVICES}>
				<ServicesLayout>
					<section className={cn(cls.container)}>
						<Link href={"/services"} className={cn(cls.backBtn)}>
							<ServicesBackIcon />
						</Link>
						<div className={cn(cls.serviceArticleIntroContainer)}>
							{showArticles}
						</div>

						<div className={cn(cls.serviceArticleIntroContent)}>
							{id === "weight" ? (
								<ServicesWeight />
							) : id === "section" ? (
								<ServicesSection />
							) : (
								<ServicesEncoding />
							)}
						</div>
					</section>
				</ServicesLayout>
			</MainLayout>
		</>
	);
}
