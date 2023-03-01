import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { MainLayout } from "@/layouts/MainLayout";
import { Title } from "@/UI/Title/Title";
import Image from "next/image";
import ImageMockContactsMap from "@/assets/images/ImageMockContactsMap.png";
import {
  IconContactsClock,
  IconContactsGeo,
  IconContactsMail,
  IconContactsPhone,
  IconContactsTg,
  IconContactsWa,
} from "@/assets/icons";
import Link from "next/link";

const cn = classNames.bind(cls);

export default function contactsPage() {
  return (
    <MainLayout>
      <div className={cn(cls.contactsPage)}>
        <Title className={cls.contactsPage_title}>Контакты</Title>
        <div className={cls.contactsPage_wrapper}>
          <div className={cls.contactsPage_item}>
            {/* Map implementation */}
            <div className={cls.contactsPage_imageWrapper}>
              <Image
                className={cls.contactsPage_image}
                src={ImageMockContactsMap}
                alt="mock image"
              />
            </div>

            {/* Text datas */}
            <div className={cls.contactsPage_text}>
              <span className={cls.contactsPage_city}>Город: Алматы</span>
              <div className={cls.contactsPage_textItems}>
                <div className={cls.contactsPage_textItem}>
                  <IconContactsClock />
                  <div>
                    <p className={cls.subtitle}>Офис</p>
                    <span className={cls.descr}>09:00 - 18:00</span>
                  </div>
                </div>

                <div className={cls.contactsPage_textItem}>
                  <IconContactsGeo />
                  <div>
                    <p className={cls.subtitle}>Адрес офиса</p>
                    <span className={cls.descr}>ул. Тлендиева 94/94а, индекс 050005</span>
                  </div>
                </div>

                <div className={cn(cls.contactsPage_textItem, cls.contactsPage_mail)}>
                  <IconContactsMail />
                  <div>
                    <a className={cls.descr} href="mailto:almaty-kazkabel@mail.ru">
                      almaty-kazkabel@mail.ru
                    </a>
                  </div>
                </div>

                <div className={cn(cls.contactsPage_textItem, cls.contactsPage_phones)}>
                  <IconContactsPhone />
                  <div>
                    <p className={cls.subtitle}>Прием заявок</p>
                    <a className={cls.descr} href="tel:+78000704798">
                      +7 (800) 070 47 98
                    </a>
                    <a className={cls.descr} href="tel:+77273554798">
                      +7 (727) 355 47 98
                    </a>
                    <a className={cls.descr} href="tel:+77273014798">
                      +7 (727) 301 47 98
                    </a>
                    <a className={cls.descr} href="tel:+77277003098">
                      +7 (727) 700 30 98
                    </a>
                  </div>
                </div>

                <div className={cls.contactsPage_contactUs}>
                  <p className={cls.subtitle}>Связаться с нами</p>
                  <div>
                    <a href="">
                      <IconContactsTg />
                    </a>
                    <a href="">
                      <IconContactsWa />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cls.contactsPage_item}>
            {/* Map implementation */}
            <div className={cls.contactsPage_imageWrapper}>
              <Image
                className={cls.contactsPage_image}
                src={ImageMockContactsMap}
                alt="mock image"
              />
            </div>

            {/* Text datas */}
            <div className={cls.contactsPage_text}>
              <span className={cls.contactsPage_city}>Город: Астана</span>
              <div className={cls.contactsPage_textItems}>
                <div className={cls.contactsPage_textItem}>
                  <IconContactsClock />
                  <div>
                    <p className={cls.subtitle}>Офис</p>
                    <span className={cls.descr}>09:00 - 18:00</span>
                  </div>
                </div>

                <div className={cls.contactsPage_textItem}>
                  <IconContactsGeo />
                  <div>
                    <p className={cls.subtitle}>Адрес офиса</p>
                    <span className={cls.descr}>ул. Тлендиева 94/94а, индекс 050005</span>
                  </div>
                </div>

                <div className={cn(cls.contactsPage_textItem, cls.contactsPage_mail)}>
                  <IconContactsMail />
                  <div>
                    <a className={cls.descr} href="mailto:almaty-kazkabel@mail.ru">
                      almaty-kazkabel@mail.ru
                    </a>
                  </div>
                </div>

                <div className={cn(cls.contactsPage_textItem, cls.contactsPage_phones)}>
                  <IconContactsPhone />
                  <div>
                    <p className={cls.subtitle}>Прием заявок</p>
                    <a className={cls.descr} href="tel:+78000704798">
                      +7 (800) 070 47 98
                    </a>
                    <a className={cls.descr} href="tel:+77273554798">
                      +7 (727) 355 47 98
                    </a>
                    <a className={cls.descr} href="tel:+77273014798">
                      +7 (727) 301 47 98
                    </a>
                    <a className={cls.descr} href="tel:+77277003098">
                      +7 (727) 700 30 98
                    </a>
                  </div>
                </div>

                <div className={cls.contactsPage_contactUs}>
                  <p className={cls.subtitle}>Связаться с нами</p>
                  <div>
                    <a href="">
                      <IconContactsTg />
                    </a>
                    <a href="">
                      <IconContactsWa />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
