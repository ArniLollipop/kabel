// hooks
import { FC, useState, useEffect } from "react";
import { useAppDispatch } from "@/hooks/store";

// packages
import classNames from "classnames";

// assets
import cls from "./Register.module.scss";

// helpers
import { maskForPhone } from "@/helpers/masks";

// components
import { InputInstance } from "@/shared/formElements/InputInstance";
import { Button } from "@/UI/Button";
import { Form, Formik, FormikErrors, FormikTouched } from "formik";
import { registerSchema } from "@/helpers/validation";

// themes
import { ThemeButton } from "@/UI/Button/ui/Button";
import { EInputInstanceTheme } from "@/shared/formElements/InputInstance/ui/InputInstance";

// actions
import { setUserName, setUserPhone } from "@/store/slices/AuthSlice";
import { AuthService } from "@/services/Auth.service";
import { AxiosError } from "axios";
import { useTranslation } from "next-i18next";

let cn = classNames.bind(cls);

interface RegisterProps {
  className?: string;
  setActive: (id: number) => void;
}

interface GetSmsCodeProps {
  touched: FormikTouched<{ name: string; phoneNumber: string }>;
  errors: FormikErrors<{ name: string; phoneNumber: string }>;
}

export const Register: FC<RegisterProps> = (props) => {
  const { className, setActive } = props;
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const getSmsCode = (props: GetSmsCodeProps) => {
    const { touched, errors } = props;
    if (
      touched.name &&
      !errors.name &&
      touched.phoneNumber &&
      !errors.phoneNumber
    ) {
      setActive(2);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        phoneNumber: "",
      }}
      validationSchema={registerSchema}
      onSubmit={(values) => {
        console.log("values Register is: ", {
          ...values,
          phoneNumber: values.phoneNumber.replace(/\D+/g, ""),
        });
      }}
    >
      {({
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => {
        return (
          <Form>
            <div className={cn(cls.Register)}>
              <>
                <InputInstance
                  theme={EInputInstanceTheme.AUTH}
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("name") || "Имя"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  errors={errors.name}
                  touched={touched.name}
                  className={cls.inputName}
                />

                <InputInstance
                  theme={EInputInstanceTheme.AUTH}
                  mask={maskForPhone}
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="+7 (___) ___-__-__"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                  errors={errors.phoneNumber}
                  touched={touched.phoneNumber}
                  className={cls.inputPhoneNumber}
                />
                <Button
                  type="submit"
                  theme={ThemeButton.YELLOW}
                  onClick={async () => {
                    try {
                      const res = await AuthService().sendSms(
                        values.phoneNumber
                      );
                      if (res.data.result) {
                        dispatch(setUserName(values.name));
                        dispatch(setUserPhone(values.phoneNumber));
                        getSmsCode({ touched, errors });
                      }
                    } catch (e: any) {
                      setError(e.response.data.error[0]);
                      console.log(e);
                    }
                  }}
                >
                  {t("code")}
                </Button>

                <p className={cls.error}>{error}</p>
              </>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
