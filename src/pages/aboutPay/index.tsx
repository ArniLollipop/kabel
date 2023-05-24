import { MainLayout } from "@/layouts/MainLayout";
import { FC, useEffect, useState } from "react";
import cls from "./index.module.scss";
import { useTranslation } from "react-i18next";
import { useHttp } from "@/hooks/useHttp";

function AboutPay() {
  const { t } = useTranslation();

  const [text, setText] = useState<string>();

  async function getAbout() {
    try {
      const res = await useHttp().get("main/payment/");
      setText(res.data.results[0].text);
    } catch {}
  }

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <>
      <MainLayout>
        <div className={cls.Politics}>
          <h2 className={cls.PoliticsH2}>{t("aboutPayTitle")}</h2>
          <p
            className={cls.PoliticsText}
            dangerouslySetInnerHTML={{ __html: `${text}` }}
          ></p>
        </div>
      </MainLayout>
    </>
  );
}

export default AboutPay;
