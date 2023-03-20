// packages
import { useState } from "react";

// assets
import cls from "./index.module.scss";
import { IconCabinetPassword, IconCabinetEdit } from "@/assets/icons";

// components
import { ActiveCabinetPageEnum, CabinetLayout } from "@/layouts/CabinetLayot/CabinetLayout";
import { Button } from "@/UI/Button";
import { ThemeButton } from "@/UI/Button/ui/Button";
import { ProductCardItem, ThemeProductCard } from "@/components/ProductCardItem/ProductCardItem";
import { ShowEditProfile } from "@/components/cabinet/profile/showEditProfile";
import { EditProfilePhoto } from "@/components/cabinet/profile/editProfilePhoto";
import { Form, Formik } from "formik";
import Link from "next/link";

export default function profilePage() {
  const [showEditProfile, setShowEditProfile] = useState(false);

  return (
    <CabinetLayout className={cls.content} activePage={ActiveCabinetPageEnum.PROFILE}>
      {showEditProfile ? (
        <ShowEditProfile setShowEditProfile={setShowEditProfile} />
      ) : (
        <Formik
          initialValues={{
            userProfilePhoto: null,
          }}
          onSubmit={(values) => {
            console.log("values is: ", {
              ...values,
            });
          }}
        >
          {({ values, setFieldValue }) => {
            return (
              <Form>
                <div className={cls.userCard}>
                  <div className={cls.userCard_info}>
                    <EditProfilePhoto
                      setFieldValue={setFieldValue}
                      userProfilePhoto={values.userProfilePhoto}
                    />
                    <div className={cls.userCard_datas}>
                      <p>
                        <span>Имя: </span>
                        Аксултан Оспанов
                      </p>
                      <p>
                        <span>Email: </span>
                        ospanov5824@mail.ru
                      </p>
                      <p>
                        <span>Номер телефона: </span>
                        +7 (777) 7777777
                      </p>
                    </div>
                  </div>
                  <div className={cls.userCard_btns}>
                    <Button className={cls.userCard_btn} theme={ThemeButton.CLEAR}>
                      <IconCabinetPassword />
                      Сменить пароль
                    </Button>
                    <Button
                      onClick={() => setShowEditProfile(true)}
                      className={cls.userCard_btn}
                      theme={ThemeButton.CLEAR}
                    >
                      <IconCabinetEdit /> Редактировать профиль
                    </Button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}

      <div className={cls.recommended}>
        <h2 className={cls.recommended_title}>Рекомендуем к покупке</h2>
        {/* <ul>
          <ProductCardItem className={cls.recommended_item} theme={ThemeProductCard.MINI} />
          <ProductCardItem className={cls.recommended_item} theme={ThemeProductCard.MINI} />
          <ProductCardItem className={cls.recommended_item} theme={ThemeProductCard.MINI} />
        </ul> */}
      </div>
    </CabinetLayout>
  );
}
