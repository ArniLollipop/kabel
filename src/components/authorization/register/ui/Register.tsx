// hooks
import { FC } from 'react';

// packages
import classNames from 'classnames';

// assets
import global from '@/shared/formElements/FormElementsStyle.module.scss';
import cls from './Register.module.scss';
import { InputNameIcon, InputPhoneNumberIcon } from '@/assets/icons';

// helpers
import { maskForPhone } from '@/helpers/masks';

// components
import { InputInstanceWithMask } from '@/shared/formElements/InputInstanceWithMask';
import { InputInstance } from '@/shared/formElements/InputInstance';
import { Button } from '@/UI/Button';
import { Form, Formik } from 'formik';
import { registerSchema } from '@/helpers/validation';
import { ThemeButton } from '@/UI/Button/ui/Button';

let cn = classNames.bind(cls);

interface RegisterProps {
  className?: string;
  setActive: (id: number) => void;
}

export const Register: FC<RegisterProps> = (props) => {
  const { className, setActive } = props;

  const getSmsCode = (touched: any, errors: any) => {
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
        });
      }}
    >
      {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Form>
            <div className={cn(cls.Register)}>
              <>
                <div
                  className={cn(
                    global.inputContainer,
                    touched.name && errors.name ? global.errorBorder : null
                  )}
                >
                  <InputNameIcon />
                  <InputInstance
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Имя"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    errors={errors.name}
                    touched={touched.name}
                  />
                </div>

                <div
                  className={cn(
                    global.inputContainer,
                    touched.phoneNumber && errors.phoneNumber ? global.errorBorder : null
                  )}
                >
                  <InputPhoneNumberIcon />
                  <InputInstanceWithMask
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
                  />
                </div>
                <Button
                  type="submit"
                  theme={ThemeButton.YELLOW}
                  onClick={() => getSmsCode(touched, errors)}
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
