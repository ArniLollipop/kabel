/** @format */

import { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { useEffect } from "react";
import Script from "next/script";
import { NextPageContext } from "next";
import { useHttp } from "@/hooks/useHttp";

export default function Document(props: any) {
	const { t } = useTranslation();

	return (
		<Html itemScope itemType='https://schema.org/WebPage'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='shortcut icon' href='/Logo.svg' />
				<link rel='icon' href='/Logo.svg' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap'
					rel='stylesheet'
				/>
				<meta property='og:type' content={"website"} />
				{/* <Script src='https://example.com/script.js' /> */}
				<script
					id='Google Tag manager'
					dangerouslySetInnerHTML={{
						__html: `
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-WL848M3');
					`,
					}}></script>
			</Head>
			<body>
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-WL848M3'
						height='0'
						width='0'
						style={{ display: "none", visibility: "hidden" }}></iframe>
				</noscript>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
