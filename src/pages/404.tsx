/** @format */

import { ActiveHeaderPage } from "@/components/header/Header";
import { MainLayout } from "@/layouts/MainLayout";
import Script from "next/script";
import React from "react";

function Custom404() {
  return (
    <div>
      <MainLayout activePage={ActiveHeaderPage.MAIN}>
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
