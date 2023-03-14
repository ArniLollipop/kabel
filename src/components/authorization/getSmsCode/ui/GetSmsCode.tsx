// hooks
import { FC, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/store";
import { useRouter } from "next/router";

// packages
import classNames from "classnames";

// assets
import cls from "./GetSmsCode.module.scss";
import { IconContactsMail } from "@/assets/icons";

// components
import { InputInstance } from "@/shared/formElements/InputInstance";
import { Button } from "@/UI/Button";
import { Field, Form, Formik } from "formik";
import { getSmsCodeSchema } from "@/helpers/validation";
import { ErrorBorder } from "@/shared/formElements/errorBorder";
import { HidePassword, ShowPassword } from "@/assets/icons";

// themes
import { ThemeButton } from "@/UI/Button/ui/Button";
import { EInputInstanceTheme } from "@/shared/formElements/InputInstance/ui/InputInstance";

// Actions
import { Register } from "@/store/slices/AuthSlice";
import { ActiveHeaderPage } from "@/components/header/Header";

let cn = classNames.bind(cls);

interface GetSmsCodeProps {
  className?: string;
}

export const GetSmsCode: FC<GetSmsCodeProps> = (props) => {
  const [countdown, setCountdown] = useState(60);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { userName, userPhone, isError, error, isLoading, isLoggedIn } = useAppSelector(
    (state) => state.AuthSlice
  );

  const dispatch = useAppDispatch();
  const router = useRouter();

  const { className } = props;

  useEffect(() => {
    if (!isError && isLoggedIn) router.push("/");
  }, [isError, isLoggedIn]);

  const createAccount = () => {
    console.log("createAccount is working!");
  };

  const FuncCountDown = (value?: string) => {
    setInterval(() => {
      setCountdown((prevState: number) => {
        if (prevState > 0) {
          return prevState - 1;
        }
        return 0;
      });
    }, 1000);
  };

  useEffect(() => {
    FuncCountDown();
  }, []);

  return (
    <Formik
      initialValues={{
        confirmSmsCode: "",
        password: "",
        confirmPassword: "",
        email: "",
        isEmail: true,
      }}
      validationSchema={getSmsCodeSchema}
      onSubmit={(values) => {
        if (values.password !== values.confirmPassword) {
          setIsPasswordMatch(true);
          return;
        } else {
          setIsPasswordMatch(false);
          console.log("values GetSmsCode is: ", {
            ...values,
          });

          dispatch<any>(
            Register({
              pass: values.password,
              phone: userPhone,
              first_name: userName,
              sms_code: values.confirmSmsCode,
              email: values.email,
            })
          );
          !isError && router.push("/");
        }
      }}
    >
      {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Form>
            <div className={cn(cls.GetSmsCode)}>
              <>
                <div>
                  Вы не получили код? <br />
                  {countdown === 0 ? (
                    <Button
                      theme={ThemeButton.CLEAR}
                      className={cn(cls.sendAgain)}
                      type="button"
                      onClick={() => setCountdown(60)}
                    >
                      Отправить повторно
                    </Button>
                  ) : (
                    <span className={cn(cls.sendAgain)}>Отправить повторно через {countdown}</span>
                  )}
                </div>

                <InputInstance
                  theme={EInputInstanceTheme.AUTH}
                  type="text"
                  id="confirmSmsCode"
                  name="confirmSmsCode"
                  placeholder="Код SMS"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmSmsCode}
                  errors={errors.confirmSmsCode}
                  touched={touched.confirmSmsCode}
                  className={cls.confirmSmsCode}
                />

                <ErrorBorder touchedValue={touched.email} errorsValue={errors.email}>
                  <IconContactsMail width={25} height={25} color="#C0C0C0" />
                  <InputInstance
                    password={"password"}
                    theme={EInputInstanceTheme.AUTH}
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    errors={errors.email}
                    touched={touched.email}
                    className={cls.email}
                  />
                </ErrorBorder>

                <ErrorBorder touchedValue={touched.password} errorsValue={errors.password}>
                  <Button
                    theme={ThemeButton.CLEAR}
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <ShowPassword /> : <HidePassword />}
                  </Button>
                  <InputInstance
                    password={"password"}
                    theme={EInputInstanceTheme.AUTH}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Новый пароль"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    errors={errors.password}
                    touched={touched.password}
                    className={cls.password}
                  />
                </ErrorBorder>

                <ErrorBorder
                  touchedValue={touched.confirmPassword}
                  errorsValue={errors.confirmPassword}
                >
                  <Button
                    theme={ThemeButton.CLEAR}
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <ShowPassword /> : <HidePassword />}
                  </Button>
                  <InputInstance
                    password={"password"}
                    theme={EInputInstanceTheme.AUTH}
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Повторить пароль"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    errors={errors.confirmPassword}
                    touched={touched.confirmPassword}
                    className={cls.confirmPassword}
                  />
                </ErrorBorder>

                {isPasswordMatch && <p>Пароли не совпадают!</p>}
                <Button type="submit" theme={ThemeButton.YELLOW} onClick={createAccount}>
                  Создать
                </Button>
              </>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
