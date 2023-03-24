import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { ActivePayDelPageEnum, DeliveryLayout } from "@/layouts/DeliveryLayout";
import Image from "next/image";
import ImageDelivery from "@/assets/images/ImageDelivery.png";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { IconCabinetArrow } from "@/assets/icons";
import { MainLayout } from "@/layouts/MainLayout";

import { Title } from "@/UI/Title/Title";

import ImagePayment from "@/assets/images/ImagePayment.png";
import IconPaymentKaspi from "@/assets/icons/IconPaymentKaspi.svg";
import IconPaymentVisa from "@/assets/icons/IconPaymentVisa.svg";
import IconPaymentMC from "@/assets/icons/IconPaymentMC.svg";
import { ActiveHeaderPage } from "@/components/header/Header";
import { payDelI } from "@/types/PayDelTypes";
import { PayDelService } from "@/services/PayDel.Service";

interface deliveryProps {
  payment: payDelI;
  delivery: payDelI;
}
const cn = classNames.bind(cls);

export default function delivery(props: deliveryProps) {
  const { delivery, payment } = props;

  return (
    <>
      <MainLayout activePage={ActiveHeaderPage.PAY_DEL}>
        {/* PC Layout */}
        <DeliveryLayout
          className={cn(cls.wrapper, cls.wrapper_del)}
          activePage={ActivePayDelPageEnum.DELIVERY}
          title="Доставка"
        >
          <div className={cls.descrText} dangerouslySetInnerHTML={{ __html: delivery.text }} />

          <div className={cn(cls.images, cls.images_del)}>
            <Image src={ImageDelivery} alt="payment image" />
            <div className={cls.methods}>
              <svg
                width="76"
                height="76"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="38" cy="38" r="38" fill="#04ACC3" />
                <path
                  d="M18.2 34.7054H16.4587V37.6535H18.2V49.6424H25.4547C26.1099 52.0348 28.3125 53.8014 30.9281 53.8014C33.5437 53.8014 35.7463 52.0348 36.4022 49.6424H50.7364C51.3916 52.0348 53.5942 53.8014 56.2098 53.8014C58.8254 53.8014 61.0279 52.0348 61.6831 49.6424H65V35.3024L60.4485 26.2704H49.7261V21H18.2V27.3353H13V30.2834H18.2V34.7054ZM30.9281 50.8533C29.4357 50.8533 28.2219 49.6491 28.2219 48.1684C28.2219 46.6878 29.4357 45.4835 30.9281 45.4835C32.4205 45.4835 33.6343 46.6878 33.6343 48.1684C33.6343 49.6491 32.4205 50.8533 30.9281 50.8533ZM56.2098 50.8533C54.7174 50.8533 53.5035 49.6491 53.5035 48.1684C53.5035 46.6878 54.7174 45.4835 56.2098 45.4835C57.7014 45.4835 58.916 46.6878 58.916 48.1684C58.916 49.6491 57.7014 50.8533 56.2098 50.8533ZM61.1104 34.1763H55.3429V29.2184H58.6114L61.1104 34.1763ZM52.3714 29.2184V37.1243H62.0286V46.6944H61.6831C61.0279 44.3021 58.8254 42.5354 56.2098 42.5354C53.5942 42.5354 51.3916 44.3021 50.7357 46.6944H49.7269V29.2184H52.3714ZM21.1714 23.948H46.7554V46.6944H36.4015C35.7455 44.3021 33.5437 42.5354 30.9274 42.5354C28.311 42.5354 26.1092 44.3021 25.454 46.6944H21.1714V37.6535H27.3698V34.7054H21.1714V30.2834H23.9111V27.3353H21.1714V23.948ZM14.4857 54.052H25.3968V57H14.4857V54.052Z"
                  fill="white"
                />
              </svg>

              <svg
                width="76"
                height="76"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="38" cy="38" r="38" fill="#F6BF0C" />
                <path
                  d="M47.6875 47.6875H28.3125V63.1875H47.6875V47.6875Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38 47.6875V53.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.5625 55.4375C20.5625 50.8128 22.3997 46.3775 25.6698 43.1073C28.94 39.8372 33.3753 38 38 38C42.6247 38 47.06 39.8372 50.3302 43.1073C53.6003 46.3775 55.4375 50.8128 55.4375 55.4375"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38 32.1875C43.3503 32.1875 47.6875 27.8503 47.6875 22.5C47.6875 17.1497 43.3503 12.8125 38 12.8125C32.6497 12.8125 28.3125 17.1497 28.3125 22.5C28.3125 27.8503 32.6497 32.1875 38 32.1875Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.5625 55.4375H28.3125"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M55.4375 55.4375H47.6875"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </DeliveryLayout>

        {/* Mobile Accordion */}
        <div className={cls.mobile}>
          <Title className={cls.mobile_title}>Доставка и оплата</Title>
          <div className={cls.mobile_wrapper}>
            <Accordion className={cls.mobile_accordion} alwaysOpen={true}>
              <AccordionItem>
                {({ open }: { open: boolean }) => (
                  <>
                    <AccordionHeader className={cn(cls.mobile_accItem, { active: open })}>
                      <span>Оплата</span>
                      <IconCabinetArrow />
                    </AccordionHeader>
                    <AccordionBody className={cn(cls.mobile_accBody, { active: open })}>
                      <span className={cls.mobile_accBodyTitle}>Оплата</span>
                      <div
                        className={cls.descrText}
                        dangerouslySetInnerHTML={{ __html: payment.text }}
                      />

                      <div className={cn(cls.images, cls.mobile_images)}>
                        <Image src={ImagePayment} alt="payment image" />
                        <div className={cls.methods}>
                          <Image src={IconPaymentVisa} alt="payment image" />
                          <Image src={IconPaymentMC} alt="payment image" />
                          <Image src={IconPaymentKaspi} alt="payment image" />
                        </div>
                      </div>
                    </AccordionBody>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ open }: { open: boolean }) => (
                  <>
                    <AccordionHeader className={cn(cls.mobile_accItem, { active: open })}>
                      <span>Доставка</span>
                      <IconCabinetArrow />
                    </AccordionHeader>
                    <AccordionBody className={cn(cls.mobile_accBody, { active: open })}>
                      <span className={cls.mobile_accBodyTitle}>Доставка</span>

                      <div
                        className={cls.descrText}
                        dangerouslySetInnerHTML={{ __html: delivery.text }}
                      />

                      <div className={cn(cls.images, cls.images_del, cls.mobile_images)}>
                        <Image src={ImageDelivery} alt="payment image" />
                        <div className={cls.methods}>
                          <svg
                            width="76"
                            height="76"
                            viewBox="0 0 76 76"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="38" cy="38" r="38" fill="#04ACC3" />
                            <path
                              d="M18.2 34.7054H16.4587V37.6535H18.2V49.6424H25.4547C26.1099 52.0348 28.3125 53.8014 30.9281 53.8014C33.5437 53.8014 35.7463 52.0348 36.4022 49.6424H50.7364C51.3916 52.0348 53.5942 53.8014 56.2098 53.8014C58.8254 53.8014 61.0279 52.0348 61.6831 49.6424H65V35.3024L60.4485 26.2704H49.7261V21H18.2V27.3353H13V30.2834H18.2V34.7054ZM30.9281 50.8533C29.4357 50.8533 28.2219 49.6491 28.2219 48.1684C28.2219 46.6878 29.4357 45.4835 30.9281 45.4835C32.4205 45.4835 33.6343 46.6878 33.6343 48.1684C33.6343 49.6491 32.4205 50.8533 30.9281 50.8533ZM56.2098 50.8533C54.7174 50.8533 53.5035 49.6491 53.5035 48.1684C53.5035 46.6878 54.7174 45.4835 56.2098 45.4835C57.7014 45.4835 58.916 46.6878 58.916 48.1684C58.916 49.6491 57.7014 50.8533 56.2098 50.8533ZM61.1104 34.1763H55.3429V29.2184H58.6114L61.1104 34.1763ZM52.3714 29.2184V37.1243H62.0286V46.6944H61.6831C61.0279 44.3021 58.8254 42.5354 56.2098 42.5354C53.5942 42.5354 51.3916 44.3021 50.7357 46.6944H49.7269V29.2184H52.3714ZM21.1714 23.948H46.7554V46.6944H36.4015C35.7455 44.3021 33.5437 42.5354 30.9274 42.5354C28.311 42.5354 26.1092 44.3021 25.454 46.6944H21.1714V37.6535H27.3698V34.7054H21.1714V30.2834H23.9111V27.3353H21.1714V23.948ZM14.4857 54.052H25.3968V57H14.4857V54.052Z"
                              fill="white"
                            />
                          </svg>

                          <svg
                            width="76"
                            height="76"
                            viewBox="0 0 76 76"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="38" cy="38" r="38" fill="#F6BF0C" />
                            <path
                              d="M47.6875 47.6875H28.3125V63.1875H47.6875V47.6875Z"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M38 47.6875V53.5"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20.5625 55.4375C20.5625 50.8128 22.3997 46.3775 25.6698 43.1073C28.94 39.8372 33.3753 38 38 38C42.6247 38 47.06 39.8372 50.3302 43.1073C53.6003 46.3775 55.4375 50.8128 55.4375 55.4375"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M38 32.1875C43.3503 32.1875 47.6875 27.8503 47.6875 22.5C47.6875 17.1497 43.3503 12.8125 38 12.8125C32.6497 12.8125 28.3125 17.1497 28.3125 22.5C28.3125 27.8503 32.6497 32.1875 38 32.1875Z"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20.5625 55.4375H28.3125"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M55.4375 55.4375H47.6875"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </AccordionBody>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps() {
  const payment = await PayDelService().getPayment();
  const delivery = await PayDelService().getDelivery();
  return {
    props: { payment, delivery },
  };
}
