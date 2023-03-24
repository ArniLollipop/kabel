// hooks
import { FC, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { useRouter } from "next/router";

// packages
import classNames from "classnames";

// assets
import cls from "./Login.module.scss";

// helpers
import { maskForPhone } from "@/helpers/masks";
import { ActiveHeaderPage } from "@/components/header/Header";

// components
import { InputInstance } from "@/shared/formElements/InputInstance";
import { Button } from "@/UI/Button";
import { Form, Formik } from "formik";
import { loginSchema } from "@/helpers/validation";
import { ErrorBorder } from "@/shared/formElements/errorBorder";
import { HidePassword, ShowPassword } from "@/assets/icons";

// themes
import { ThemeButton } from "@/UI/Button/ui/Button";
import { EInputInstanceTheme } from "@/shared/formElements/InputInstance/ui/InputInstance";

// actions
import { Login as LoginAct } from "@/store/slices/AuthSlice";

let cn = classNames.bind(cls);

interface LoginProps {
  className?: string;
}

export const Login: FC<LoginProps> = (props) => {
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const dispatch = useAppDispatch();
  const { error, isError, isLoading, isLoggedIn } = useAppSelector((state) => state.AuthSlice);
  const router = useRouter();

  const { className } = props;

  useEffect(() => {
    if (!isError && isLoggedIn) router.push("/");
  }, [isError, isLoggedIn]);

  return (
    <Formik
      initialValues={{
        phoneNumberLogin: "",
        passwordLogin: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        console.log("values Login is: ", {
          ...values,
          phoneNumberLogin: values.phoneNumberLogin.replace(/\D+/g, ""),
        });

        dispatch(LoginAct({ pass: values.passwordLogin, phone: values.phoneNumberLogin }));
      }}
    >
      {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Form>
            <div className={cn(cls.Login)}>
              <InputInstance
                theme={EInputInstanceTheme.AUTH}
                mask={maskForPhone}
                type="text"
                id="phoneNumberLogin"
                name="phoneNumberLogin"
                placeholder="+7 (___) ___-__-__"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneNumberLogin}
                errors={errors.phoneNumberLogin}
                touched={touched.phoneNumberLogin}
                className={cls.phoneNumberLogin}
              />

              <ErrorBorder touchedValue={touched.passwordLogin} errorsValue={errors.passwordLogin}>
                <Button
                  theme={ThemeButton.CLEAR}
                  type="button"
                  onClick={() => setShowPasswordLogin(!showPasswordLogin)}
                >
                  {showPasswordLogin ? <ShowPassword /> : <HidePassword />}
                </Button>
                <InputInstance
                  password={"password"}
                  theme={EInputInstanceTheme.AUTH}
                  type={showPasswordLogin ? "text" : "password"}
                  id="passwordLogin"
                  name="passwordLogin"
                  placeholder="Пароль"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordLogin}
                  errors={errors.passwordLogin}
                  touched={touched.passwordLogin}
                  className={cls.passwordLogin}
                />
              </ErrorBorder>

              <Button theme={ThemeButton.YELLOW} type="submit">
                Войти
              </Button>

              <p className={cls.error}>{isError && error[0]}</p>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
