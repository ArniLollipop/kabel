/** @format */

import { ActiveHeaderPage } from "@/components/header/Header";
import { MainLayout } from "@/layouts/MainLayout";
import { ProductService } from "@/services/Product.servise";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect } from "react";

function Custom404() {
	const router = useRouter();

	async function checkProductId() {
		if (router.asPath.split("/")[2]) {
			try {
				const product = await ProductService().getProductById(
					router.asPath.split("/")[2]
				);
				router.push(
					`/catalog/${router.asPath.split("/")[1]}/${
						router.asPath.split("/")[2]
					}`
				);
			} catch {
				router.push("/");
			}
		} else {
			router.push("/");
		}
	}

	useEffect(() => {
		checkProductId();
	});

	return (
		<div>
			<MainLayout activePage={ActiveHeaderPage.MAIN}>
				<div className=' min-h-[100vh] flex items-center !justify-center w-full'>
					<h1 className=' text-5xl font-bold text-center'>404</h1>
				</div>
				{/* <Script id='redirect'>
          {`
            document.location.href="/";
          `}
        </Script> */}
			</MainLayout>
		</div>
	);
}

export default Custom404;
