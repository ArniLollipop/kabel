import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { Navigation, ThemeNavigation } from "@/layouts/CabinetLayot/Navigation";
import { MainLayout } from "@/layouts/MainLayout";
import { ActiveHeaderPage } from "@/components/header/Header";
import Head from "next/head";
import { useRouter } from "next/router";

const cn = classNames.bind(cls);

interface indexProps {
	className?: string;
}

// this page visible only at mobile devices
export default function cabinetPage() {
	const router = useRouter();
	return (
		<MainLayout activePage={ActiveHeaderPage.CABINET}>
			<Head>
				<link rel='canonical' href={"https://cable.kz" + router.pathname} />
			</Head>
			<div className={cls.cabinet_wrapper}>
				<Navigation className={cls.cabinet} theme={ThemeNavigation.MOBILE} />
			</div>
		</MainLayout>
	);
}
