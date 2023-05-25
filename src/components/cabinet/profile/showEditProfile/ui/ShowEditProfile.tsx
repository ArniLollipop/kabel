// packages
import { FC, useState } from "react";
import classNames from "classnames";
import { Form, Formik } from "formik";

// assets
import cls from "./ShowEditProfile.module.scss";

// validation
import { profileSchema } from "@/helpers/validation";

// components
import { InputInstance } from "@/shared/formElements/InputInstance";
import { EInputInstanceTheme } from "@/shared/formElements/InputInstance/ui/InputInstance";
import { EditProfilePhoto } from "../../editProfilePhoto";
import { Button, ThemeButton } from "@/UI/Button/ui/Button";

// mask
import { maskForPhone } from "@/helpers/masks";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { EditProfile } from "@/store/slices/ProfileSlice";
import { useTranslation } from "next-i18next";

let cn = classNames.bind(cls);

interface ShowEditProfileProps {
  className?: string;
  setShowEditProfile: (value: boolean) => void;
}

export const ShowEditProfile: FC<ShowEditProfileProps> = (props) => {
  const { t } = useTranslation();
  const { user: authUser } = useAppSelector((state) => state.AuthSlice);
  const { user: profileUser } = useAppSelector((state) => state.ProfileSlice);
  const dispatch = useAppDispatch();
  const { className, setShowEditProfile } = props;

  return (
    <div className={cn(cls.ShowEditProfile)}>
      <Formik
        enableReinitialize={true}
        initialValues={{
          // @ts-ignore
          phone_number: profileUser?.phone_number || authUser?.phone_number,
          // @ts-ignore
          email: profileUser?.email || authUser?.email || "",
          // @ts-ignore
          first_name: profileUser?.first_name || authUser?.first_name || "",
          // @ts-ignore
          last_name: profileUser?.last_name || authUser?.last_name || "",
          // @ts-ignore
          middle_name: profileUser?.middle_name || authUser?.middle_name || "",
          // @ts-ignore
          avatar: profileUser?.avatar || authUser?.avatar || null,
        }}
        validationSchema={profileSchema}
        onSubmit={(values) => {
          console.log("values inside onSubmit is: ", {
            ...values,
          });

          const modifiedValues = {
            phone_number: values.phone_number.match(/[\d+]+/g).join(""),
            email: values.email,
            first_name: values.first_name,
            last_name: values.last_name,
            middle_name: values.middle_name,
          };

          dispatch<any>(
            EditProfile({ userId: authUser?.id, values: modifiedValues })
          );
          setShowEditProfile(false);
        }}
      >
        {({
          values,
          touched,
          errors,
          setFieldValue,
          handleChange,
          handleBlur,
          dirty,
        }) => {
          return (
            <Form>
              <div className={cls.userCard}>
                <div className={cls.userCard_container}>
                  <EditProfilePhoto
                    immediately={true}
                    setFieldValue={setFieldValue}
                    avatar={values.avatar}
                  />

                  <div className={cls.userCard_inputsContainer}>
                    <div className={cls.userCard_NnLInputs}>
                      <InputInstance
                        theme={EInputInstanceTheme.PROFILE}
                        type="text"
                        id="first_name"
                        name="first_name"
                        placeholder={t("name") || "Имя"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.first_name}
                        errors={errors.first_name as string}
                        touched={!!touched.first_name}
                        className={cls.nameInput}
                      />

                      <InputInstance
                        theme={EInputInstanceTheme.PROFILE}
                        type="text"
                        id="last_name"
                        name="last_name"
                        placeholder="Фамилия"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.last_name}
                        errors={errors.last_name as string}
                        touched={!!touched.last_name}
                        className={cls.lastNameInput}
                      />
                    </div>

                    <div className={cls.userCard_LnEInputs}>
                      <InputInstance
                        theme={EInputInstanceTheme.PROFILE}
                        type="text"
                        id="middle_name"
                        name="middle_name"
                        placeholder="Отчество"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.middle_name}
                        errors={errors.middle_name as string}
                        touched={!!touched.middle_name}
                        className={cls.fatherNameInput}
                      />

                      <InputInstance
                        theme={EInputInstanceTheme.PROFILE}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email:"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        errors={errors.email as string}
                        touched={!!touched.email}
                        className={cls.emailInput}
                      />
                    </div>
                  </div>

                  <Button
                    className={cls.userCard_saveBtn}
                    type="submit"
                    theme={ThemeButton.YELLOW}
                  >
                    {t("saveMent")}
                  </Button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
