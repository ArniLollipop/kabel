/** @format */

import { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { useEffect } from "react";

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
