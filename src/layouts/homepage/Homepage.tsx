import { FC, useEffect, useState } from "react";
import {
	OfferSection,
	AboutSection,
	ProductsSection,
	AdvantagesSection,
	ServicesSection,
	NewsSection,
	SertificatesSection,
	SpeciallySection,
} from "./sections";
import { GetCurrency } from "@/components/GetCurrency/GetCurrency";
import { HomeProps } from "@/pages";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export const Homepage: FC<HomeProps> = (props) => {
	const [isModal, setModal] = useState<any>({ img: "", isOpen: false });

	const { t } = useTranslation();

	const {
		metalRes,
		aboutInfo,
		categories,
		sertificates,
		adventages,
		news,
		offers,
		currencyRes,
	} = props;

	return (
		<>
			<OfferSection offers={offers} />
			<AboutSection aboutInfo={aboutInfo} />
			<ProductsSection categories={categories} />
			<SpeciallySection news={news} />
			<AdvantagesSection adventages={adventages} />
			<ServicesSection />
			<SertificatesSection sertificates={sertificates} />
			<NewsSection news={news} />
			<GetCurrency currency={currencyRes} metalRes={metalRes} />
			<Link href='/about' className='navBtn__main'>
				{t("list.company")}
			</Link>
			<Link href='/pay-del/payment' className='navBtn__main'>
				{t("list.payment")}
			</Link>
			<Link href='/contacts' className='navBtn__main'>
				{t("list.contacts")}
			</Link>
		</>
	);
};
