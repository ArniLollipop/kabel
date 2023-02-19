// hooks
import { FC, useEffect, useState } from 'react';

// packages
import classNames from 'classnames';

// assets
import cls from './GetSmsCode.module.scss';
import { ShowPassword } from '@/assets/icons/showPassword';
import { HidePassword } from '@/assets/icons/hidePassword';

// components
import { InputInstance } from '@/shared/formElements/InputInstance';
import { Button } from '@/UI/Button';
import { Form, Formik } from 'formik';
import { getSmsCodeSchema } from '@/helpers/validation';
import { ThemeButton } from '@/UI/Button/ui/Button';
import { ErrorBorder } from '@/helpers/errorBorder';

let cn = classNames.bind(cls);

interface GetSmsCodeProps {
  className?: string;
}

export const GetSmsCode: FC<GetSmsCodeProps> = (props) => {
  const [countdown, setCountdown] = useState(60);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { className } = props;

  const createAccount = () => {
    console.log('createAccount is working!');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
        confirmSmsCode: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={getSmsCodeSchema}
      onSubmit={(values) => {
        if (values.password !== values.confirmPassword) {
          setIsPasswordMatch(true);
          return;
        } else {
          setIsPasswordMatch(false);
          console.log('values GetSmsCode is: ', {
            ...values,
          });
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
                      theme={ThemeButton.SEND_AGAIN}
                      type="button"
                      onClick={() => setCountdown(60)}
                    >
                      Отправить повторно
                    </Button>
                  ) : (
                    <span>Отправить повторно через {countdown}</span>
                  )}
                </div>

                <ErrorBorder
                  touchedValue={touched.confirmSmsCode}
                  errorsValue={errors.confirmSmsCode}
                >
                  <InputInstance
                    type="text"
                    id="confirmSmsCode"
                    name="confirmSmsCode"
                    placeholder="Код SMS"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmSmsCode}
                    errors={errors.confirmSmsCode}
                    touched={touched.confirmSmsCode}
                  />
                </ErrorBorder>

                <ErrorBorder touchedValue={touched.password} errorsValue={errors.password}>
                  <Button
                    theme={ThemeButton.CLEAR}
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <ShowPassword /> : <HidePassword />}
                  </Button>
                  <InputInstance
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Новый пароль"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    errors={errors.password}
                    touched={touched.password}
                  />
                </ErrorBorder>

                <ErrorBorder
                  touchedValue={touched.confirmPassword}
                  errorsValue={errors.confirmPassword}
                >
                  <Button
                    theme={ThemeButton.CLEAR}
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <ShowPassword /> : <HidePassword />}
                  </Button>
                  <InputInstance
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Повторить пароль"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    errors={errors.confirmPassword}
                    touched={touched.confirmPassword}
                  />
                </ErrorBorder>
                {isPasswordMatch && <p>Пароли не совподают!</p>}
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
