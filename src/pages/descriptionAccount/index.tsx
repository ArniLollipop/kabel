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
            <br />
            2.Если вы хотите удалить свой аккаунт, вот что вам следует сделать:
            <br />
            <br />
            1. Откройте приложение или посетите страницу приложения в Google
            Play Store.
            <br />
            2. Найдите раздел "Настройки аккаунта" или "Управление аккаунтом".
            <br />
            3. В этом разделе вы увидите ссылку или кнопку "Удалить аккаунт" или
            подобное.
            <br />
            4. Щелкните на эту ссылку или кнопку, чтобы перейти на страницу
            запроса удаления аккаунта.
            <br />
            5. На этой странице будет указано название приложения или имя
            разработчика, которые также указаны на странице приложения в Google
            Play.
            <br />
            6. Вы найдете ясную и видимую инструкцию о том, как запросить
            удаление аккаунта.
            <br />
            7. Кроме того, на этой странице будет предоставлена информация о
            типах данных, которые будут удалены или сохранены, а также указаны
            сроки их хранения.
            <br />
            8. Чтобы продолжить удаление аккаунта, следуйте указанным на
            странице инструкциям.
            <br />
            <br />
            Пожалуйста, обратите внимание, что процесс удаления аккаунта может
            быть необратимым, и вы можете потерять доступ к своим данным и
            функциям, связанным с аккаунтом.
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
