import {
  ActiveCabinetPageEnum,
  CabinetLayout,
} from "@/layouts/CabinetLayot/CabinetLayout";
import { IconWhatsApp } from "@/assets/icons";
import cls from "./index.module.scss";
import classNames from "classnames/bind";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { Button } from "@/UI/Button";
import { ThemeButton } from "@/UI/Button/ui/Button";
import { HistoryOrdersSlider } from "@/components/HistoryOrdersSlider/HistoryOrdersSlider";
import { SwiperProps } from "swiper/react";
import { useEffect, useState } from "react";
import { Modal } from "@/shared/modal/Modal";
import { RequestACall } from "@/components/requestCall/RequestACall";

import { useTranslation } from "react-i18next";
import { useHttp } from "@/hooks/useHttp";

const cn = classNames.bind(cls);

export default function supportPage() {
  const { t } = useTranslation();
  const [question, setQuestion] = useState<any>();

  const [isOpen, setIsOpen] = useState(false);

  async function getQuestions() {
    try {
      const res = await useHttp().get("main/problem_qas/");
      setQuestion(res.data.results);
    } catch {}
  }

  useEffect(() => {
    getQuestions();
  }, []);

  const params: SwiperProps = {
    loop: true,
    speed: 500,

    breakpoints: {
      1300: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 3.5,
        centeredSlides: false,
      },

      425: {
        slidesPerView: 2.3,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        centeredSlides: true,
      },
    },
  };

  return (
    <CabinetLayout
      className={cls.support}
      activePage={ActiveCabinetPageEnum.SUPPORT}
    >
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <RequestACall setIsOpen={setIsOpen} />
      </Modal>
      <div className={cls.support_wrapper}>
        <h1 className={cls.support_title}>{t("support")}</h1>
        <div className={cls.support_content}>
          <div className={cls.support_problems}>
            <div className={cls.support_accordion}>
              <h3>Проблема</h3>
              <Accordion alwaysOpen={true}>
                {question &&
                  question?.map((el: any) => {
                    return (
                      <AccordionItem>
                        {({ open }: { open: boolean }) => (
                          <>
                            <AccordionHeader className={cls.support_accHeader}>
                              <h4>{el.question}</h4>
                              <svg
                                className={cn(cls.support_accHeader_arrow, {
                                  support_accHeader_arrowActive: open,
                                })}
                                width="15"
                                height="9"
                                viewBox="0 0 15 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.0129 7.00535L7.00781 1.01049L1.01295 7.01562"
                                  stroke="#39424B"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </AccordionHeader>
                            <AccordionBody className={cls.support_accDescr}>
                              <p>{el.answer}</p>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>
                    );
                  })}
              </Accordion>

              <Button
                onClick={() => setIsOpen(true)}
                className={cls.support_callbackBtn}
                theme={ThemeButton.CLEAR}
              >
                {t("getCall")}
              </Button>
            </div>
            <div className={cls.support_contacts}>
              <span>
                {t("phoneUs")}&nbsp;
                <a href="tel:+77273014798">+7 727 301 47 98</a>,&nbsp;
                <br />
                <a href="tel:+77273554798">+7 727 355 47 98</a>
              </span>
              <span>
                {t("chatUs")}&nbsp;
                <a href="https://wa.me/77003014798">
                  +7 700 301 47 98 <IconWhatsApp />
                </a>
              </span>
            </div>
          </div>

          <div className={cls.support_orders}>
            <h2 className={cls.support_ordersTitle}>{t("hello")}</h2>
            <p className={cls.support_ordersTitle}>{t("question")}</p>
            <HistoryOrdersSlider
              className={cls.support_slider}
              params={params}
            />
            <div className={cls.support_slider}></div>
          </div>
        </div>
      </div>
    </CabinetLayout>
  );
}
