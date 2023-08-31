/** @format */

import { ActiveHeaderPage } from "@/components/header/Header";
import { MainLayout } from "@/layouts/MainLayout";
import Script from "next/script";
import React from "react";

function Custom404() {
  return (
    <div>
      <MainLayout activePage={ActiveHeaderPage.MAIN}>
        <div className=' min-h-[100vh] flex items-center !justify-center w-full'>
          <h1 className=' text-5xl font-bold text-center'>404</h1>
        </div>
        <Script id='redirect'>
          {`
            document.location.href="/";
          `}
        </Script>
      </MainLayout>
    </div>
  );
}

export default Custom404;
