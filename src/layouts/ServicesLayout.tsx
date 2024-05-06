import { FC, PropsWithChildren } from "react";
import { Title } from "@/UI/Title/Title";
import classNames from "classnames";
import cls from "../components/services/ServicesLayout.module.scss";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

let cn = classNames.bind(cls);

export const ServicesLayout: FC<PropsWithChildren> = ({ children }) => {
	const { t } = useTranslation();
	const router = useRouter();

	return (
		<>
			<div className={cn(cls.Services)}>
				{router.query.id === undefined && (
					<Title h1={true} className={cn(cls.servicesTitle)}>
						{t("lang").toLowerCase() === "ru"
							? "Наши Сервисы"
							: "Біздің қызметтеріміз"}
					</Title>
				)}
				<section className={cn(cls.container)}>{children}</section>
			</div>
		</>
	);
};
