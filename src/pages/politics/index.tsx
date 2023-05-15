import { MainLayout } from "@/layouts/MainLayout";
import { FC, useEffect, useState } from "react";
import cls from "./politics.module.scss";
import { ActivePayDelPageEnum, DeliveryLayout } from "@/layouts/DeliveryLayout";
import { Title } from "@/UI/Title/Title";
import { useHttp } from "@/hooks/useHttp";
import { useTranslation } from "next-i18next";

function Politics() {
  const [politics, setPolitics] = useState<string>("");

  const { t } = useTranslation();

  async function getPolitics() {
    try {
      const res = await useHttp().get("main/privacy_policy/");
      setPolitics(res.data.results[0].text);
    } catch (err) {}
  }

  useEffect(() => {
    getPolitics();
  }, []);
  return (
    <>
      <MainLayout>
        <div className={cls.Politics}>
          <Title>{t("footer.politics")}</Title>
          <div className={cls.PoliticsBack}>
            <div
              className={cls.PoliticsText}
              dangerouslySetInnerHTML={{ __html: politics }}
            ></div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Politics;
