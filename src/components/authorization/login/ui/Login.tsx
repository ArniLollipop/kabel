// hooks
import { FC, useState } from 'react';

// packages
import classNames from 'classnames';

// assets
import cls from './Login.module.scss';
import { InputPhoneNumberIcon } from '@/assets/icons';

// helpers
import { maskForPhone } from '@/helpers/masks';

// components
import { InputInstanceWithMask } from '@/shared/formElements/InputInstanceWithMask';
import { InputInstance } from '@/shared/formElements/InputInstance';
import { Button } from '@/UI/Button';
import { Form, Formik } from 'formik';
import { loginSchema } from '@/helpers/validation';
import { ThemeButton } from '@/UI/Button/ui/Button';
import { ErrorBorder } from '@/helpers/errorBorder';
import { ShowPassword } from '@/assets/icons/showPassword';
import { HidePassword } from '@/assets/icons/hidePassword';

let cn = classNames.bind(cls);

interface LoginProps {
  className?: string;
}

export const Login: FC<LoginProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { className } = props;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={{
        phoneNumberLogin: '',
        passwordLogin: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        console.log('values Login is: ', {
          ...values,
        });
      }}
    >
      {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Form>
            <div className={cn(cls.Login)}>
              <ErrorBorder
                touchedValue={touched.phoneNumberLogin}
                errorsValue={errors.phoneNumberLogin}
              >
                <InputPhoneNumberIcon />
                <InputInstanceWithMask
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
                />
              </ErrorBorder>

              <ErrorBorder touchedValue={touched.passwordLogin} errorsValue={errors.passwordLogin}>
                <Button theme={ThemeButton.CLEAR} type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? <ShowPassword /> : <HidePassword />}
                </Button>
                <InputInstance
                  type={showPassword ? 'text' : 'password'}
                  id="passwordLogin"
                  name="passwordLogin"
                  placeholder="Пароль"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordLogin}
                  errors={errors.passwordLogin}
                  touched={touched.passwordLogin}
                />
              </ErrorBorder>
              <Button theme={ThemeButton.YELLOW} type="submit">
                Войти
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
