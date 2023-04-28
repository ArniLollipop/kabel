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
import { ProfileService } from "@/services/Profile.service";

// actions
import { Login as LoginAct } from "@/store/slices/AuthSlice";
import { useHttp } from "@/hooks/useHttp";

let cn = classNames.bind(cls);

interface LoginProps {
  className?: string;
}

export const Login: FC<LoginProps> = (props) => {
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [showRepeatPass, setShowRepeatPass] = useState(false);
  const [phone, setPhone] = useState<String>("");
  const [countdown, setCountdown] = useState(0);
  const [tab, setTab] = useState(1);
  const dispatch = useAppDispatch();
  const { error, isError, isLoading, isLoggedIn } = useAppSelector(
    (state) => state.AuthSlice
  );
  const router = useRouter();

  const { className } = props;

  useEffect(() => {
    if (!isError && isLoggedIn) router.push("/");
  }, [isError, isLoggedIn]);

  useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
  }, [countdown]);

  async function SendSms(phone_number: String) {
    try {
      setPhone(phone_number);
      const res = await useHttp().post("/users/users/send_sms/", {
        phone_number: phone_number,
        for_password: true,
      });
      setTab(3);
      setCountdown(60);
    } catch (err) {}
  }

  async function verifySMS(smsInput: String) {
    try {
      const res = await useHttp().post("users/users/sms_code_verification/", {
        phone_number: phone,
        sms_code: smsInput,
      });
      setTab(4);
    } catch (err) {
      alert("ОШБИКА");
    }
  }

  async function handleSavePass(password: String) {
    try {
      const res = await useHttp().patch("users/users/change_password/", {
        phone_number: phone,
        password: password,
      });
    } catch (err) {
      alert("ОШИБКА");
    }
  }

  return (
    <>
      {tab === 1 && (
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

            dispatch(
              LoginAct({
                pass: values.passwordLogin,
                phone: values.phoneNumberLogin,
              })
            );
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

                  <ErrorBorder
                    touchedValue={touched.passwordLogin}
                    errorsValue={errors.passwordLogin}
                  >
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

                  <div
                    onClick={() => {
                      setTab(2);
                      setCountdown(60);
                    }}
                    className={cls.forget}
                  >
                    Забыли пароль?
                  </div>

                  <p className={cls.error}>{isError && error[0]}</p>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
      {tab === 2 && (
        <>
          <Formik
            initialValues={{
              phone_number: "",
            }}
            onSubmit={(values) => {
              SendSms(values.phone_number);
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
                  <div className={cn(cls.Login, cls.mt)}>
                    <InputInstance
                      theme={EInputInstanceTheme.AUTH}
                      mask={maskForPhone}
                      type="text"
                      id="phone_number"
                      name="phone_number"
                      placeholder="+7 (___) ___-__-__"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone_number}
                      errors={errors.phone_number}
                      touched={touched.phone_number}
                      className={cls.phoneNumberLogin}
                    />

                    <Button theme={ThemeButton.YELLOW} type="submit">
                      Отправить код
                    </Button>

                    <p className={cls.error}>{isError && error[0]}</p>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </>
      )}
      {tab === 3 && (
        <>
          <div className={cn(cls.GetSmsCode)}>
            <div className={cn(cls.sendAgainContainer)}>
              Вы не получили код? <br />
              {countdown === 0 ? (
                <Button
                  theme={ThemeButton.CLEAR}
                  className={cn(cls.sendAgainContainer_sendAgain)}
                  type="button"
                  onClick={() => {}}
                >
                  Отправить повторно
                </Button>
              ) : (
                <span className={cn(cls.sendAgainContainer_sendAgain)}>
                  Отправить повторно через {countdown}
                </span>
              )}
            </div>
          </div>
          <Formik
            initialValues={{
              smsInput: "",
            }}
            onSubmit={(values) => {
              verifySMS(values.smsInput);
            }}
            validationSchema={loginSchema}
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
                  <div className={cn(cls.Login)}>
                    <ErrorBorder
                      touchedValue={touched.smsInput}
                      errorsValue={errors.smsInput}
                    >
                      <InputInstance
                        password={"password"}
                        theme={EInputInstanceTheme.AUTH}
                        type="number"
                        id="smsInput"
                        name="smsInput"
                        placeholder="Number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.smsInput}
                        errors={errors.smsInput}
                        touched={touched.smsInput}
                        className={cls.passwordLogin}
                      />
                    </ErrorBorder>

                    <Button
                      onClick={() => {
                        verifySMS(values.smsInput);
                      }}
                      theme={ThemeButton.YELLOW}
                      type="submit"
                    >
                      Потдвердить
                    </Button>

                    <p className={cls.error}>{isError && error[0]}</p>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </>
      )}
      {tab === 4 && (
        <>
          <Formik
            initialValues={{
              passwordReset: "",
              passwordRepeat: "",
            }}
            onSubmit={(values) => {
              if (values.passwordRepeat === values.passwordReset) {
                handleSavePass(values.passwordReset);
              }
            }}
            validationSchema={loginSchema}
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
                  <div className={cn(cls.Login)}>
                    <ErrorBorder
                      touchedValue={touched.passwordReset}
                      errorsValue={errors.passwordReset}
                    >
                      <Button
                        theme={ThemeButton.CLEAR}
                        type="button"
                        onClick={() => setShowPasswordLogin(!showPasswordLogin)}
                      >
                        {showPasswordLogin ? (
                          <ShowPassword />
                        ) : (
                          <HidePassword />
                        )}
                      </Button>
                      <InputInstance
                        password={"password"}
                        theme={EInputInstanceTheme.AUTH}
                        type={showPasswordLogin ? "text" : "password"}
                        id="passwordReset"
                        name="passwordReset"
                        placeholder="Пароль"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.passwordReset}
                        errors={errors.passwordReset}
                        touched={touched.passwordReset}
                        className={cls.passwordLogin}
                      />
                    </ErrorBorder>

                    <ErrorBorder
                      touchedValue={touched.passwordRepeat}
                      errorsValue={errors.passwordRepeat}
                    >
                      <Button
                        theme={ThemeButton.CLEAR}
                        type="button"
                        onClick={() => setShowRepeatPass(!showRepeatPass)}
                      >
                        {showRepeatPass ? <ShowPassword /> : <HidePassword />}
                      </Button>
                      <InputInstance
                        password={"password"}
                        theme={EInputInstanceTheme.AUTH}
                        type={showRepeatPass ? "text" : "password"}
                        id="passwordRepeat"
                        name="passwordRepeat"
                        placeholder="Пароль"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.passwordRepeat}
                        errors={errors.passwordRepeat}
                        touched={touched.passwordRepeat}
                        className={cls.passwordLogin}
                      />
                    </ErrorBorder>

                    <Button
                      onClick={() => {
                        if (values.passwordRepeat === values.passwordReset) {
                          handleSavePass(values.passwordReset);
                        }
                      }}
                      theme={ThemeButton.YELLOW}
                      type="submit"
                    >
                      Сохранить пароль
                    </Button>

                    <p className={cls.error}>{isError && error[0]}</p>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </>
      )}
    </>
  );
};
