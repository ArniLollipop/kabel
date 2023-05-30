import { ActiveHeaderPage } from "@/components/header/Header";
import { MainLayout } from "@/layouts/MainLayout";
import { Title } from "@/UI/Title/Title";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import Image from "next/image";
import ImageHomepageAboutBig from "@/assets/images/ImageHomepageAboutBig.png";
import { AboutService } from "@/services/About.service";
import { AboutI } from "@/types/AboutTypes";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const cn = classNames.bind(cls);

export default function DescriptionAccount(props: AboutI) {
  const { image, text, title, our_goal } = props;

  return (
    <MainLayout activePage={ActiveHeaderPage.ABOUT}>
      <div className={cn(cls.about)}>
        <div className={cls.about_wrapper}>
          <div className={cls.about_text}>
            1.Название приложения: cable.kz, студия веб разработки A-lux.
            <br />
            <br />
            2.Если вы хотите удалить свой аккаунт, вот что вам следует сделать:
            <br />
            <br />
            1. Откройте личный кабинет
            <br />
            2. Найдите кнопку удаление аккаунта
            <br />
            3. Нужно нажать на кнопку удалить аккаунт
            <br />
            4. У вас спросит Вы действительно хотите удалить аккаунт?
            <br />
            5. Нужно будет нажать на кнопку да
            <br />
            6. Аккаунт удалился. Пожалуйста, обратите внимание, что процесс
            удаления аккаунта может быть необратимым, и вы можете потерять
            доступ к своим данным и функциям, связанным с аккаунтом.
            <br />
            <br />
            3. Удалиться логин, пароль, личная информация оставленная в
            приложении.
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

// export async function getServerSideProps() {
//   const res = await AboutService().getAboutInfo();

//   return {
//     props: res,
//   };
// }
