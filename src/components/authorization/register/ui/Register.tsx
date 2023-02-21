// hooks
import { FC } from 'react';

// packages
import classNames from 'classnames';

// assets
import cls from './Register.module.scss';

// helpers
import { maskForPhone } from '@/helpers/masks';

// components
import { InputInstance } from '@/shared/formElements/InputInstance';
import { Button } from '@/UI/Button';
import { Form, Formik, FormikErrors, FormikTouched } from 'formik';
import { registerSchema } from '@/helpers/validation';

// themes
import { ThemeButton } from '@/UI/Button/ui/Button';
import { EInputInstanceTheme } from '@/shared/formElements/InputInstance/ui/InputInstance';

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

  const getSmsCode = (props: GetSmsCodeProps) => {
    const { touched, errors } = props;
    if (touched.name && !errors.name && touched.phoneNumber && !errors.phoneNumber) {
      setActive(2);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phoneNumber: '',
      }}
      validationSchema={registerSchema}
      onSubmit={(values) => {
        console.log('values Register is: ', {
          ...values,
          phoneNumber: values.phoneNumber.replace(/\D+/g, ''),
        });
      }}
    >
      {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Form>
            <div className={cn(cls.Register)}>
              <>
                <InputInstance
                  theme={EInputInstanceTheme.AUTH}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Имя"
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
                  onClick={() => getSmsCode({ touched, errors })}
                >
                  Получить код
                </Button>
              </>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
