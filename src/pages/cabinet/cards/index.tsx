/** @format */

// packages
import Image from "next/image";
import { useState } from "react";

// assets
import cls from "./index.module.scss";
import { IconCardCounterPlus } from "@/assets/icons";
import IconPaymentVisa from "@/assets/icons/IconPaymentVisa.svg";
import IconPaymentMC from "@/assets/icons/IconPaymentMC.svg";

// components
import {
  ActiveCabinetPageEnum,
  CabinetLayout,
} from "@/layouts/CabinetLayot/CabinetLayout";
import { Button } from "@/UI/Button";
import { ThemeButton } from "@/UI/Button/ui/Button";
import { AddCard } from "@/components/cabinet/cards/AddCard";

import { useTranslation } from "react-i18next";
import Head from "next/head";
import { useRouter } from "next/router";

export default function cardsPage() {
  const [showAddCard, setShowAddCard] = useState(false);

  const { t } = useTranslation();

  const router = useRouter();

  return (
    <CabinetLayout
      className={cls.cards_wrapper}
      activePage={ActiveCabinetPageEnum.CARDS}>
      <Head>
        <link rel='canonical' href={"https://cable.kz" + router.pathname} />
      </Head>
      {showAddCard ? (
        <AddCard className={cls.form} setShowAddCard={setShowAddCard} />
      ) : (
        <>
          <Button
            onClick={() => setShowAddCard(true)}
            className={cls.addBtn}
            theme={ThemeButton.CLEAR}>
            <IconCardCounterPlus />
            {t("add")}
          </Button>
          <div className={cls.cards}>
            <h2>{t("saveCard")}</h2>

            <ul className={cls.cards_list}>
              <li className={cls.cards_listItem}>
                <div className={cls.cards_cardSkeleton}>
                  <h3>{t("cardNumber")}</h3>

                  <span className={cls.cards_cardNumber}>•••• 7777</span>

                  <div className={cls.cards_typeOfPayment}>
                    <Image
                      src={IconPaymentVisa}
                      alt={"Visa" + "| Almaty Kazkabel"}
                    />
                    <Image
                      src={IconPaymentMC}
                      alt={"MC" + "| Almaty Kazkabel"}
                    />
                  </div>
                </div>

                <div className={cls.cards_btns}>
                  <label htmlFor=''>
                    <input type='radio' name='card' />
                    {t("default")}
                  </label>

                  <Button
                    className={cls.delivery_removeBtn}
                    theme={ThemeButton.CLEAR}>
                    {t("delete")}
                  </Button>
                </div>
              </li>
              <li className={cls.cards_listItem}>
                <div className={cls.cards_cardSkeleton}>
                  <h3> {t("cardNumber")}</h3>

                  <span className={cls.cards_cardNumber}>•••• 7777</span>

                  <div className={cls.cards_typeOfPayment}>
                    <Image
                      src={IconPaymentVisa}
                      alt={"Visa" + "| Almaty Kazkabel"}
                    />
                    <Image
                      src={IconPaymentMC}
                      alt={"MC" + "| Almaty Kazkabel"}
                    />
                  </div>
                </div>

                <div className={cls.cards_btns}>
                  <label htmlFor=''>
                    <input type='radio' name='card' /> {t("default")}
                  </label>

                  <Button
                    className={cls.delivery_removeBtn}
                    theme={ThemeButton.CLEAR}>
                    {t("delete")}
                  </Button>
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
    </CabinetLayout>
  );
}
