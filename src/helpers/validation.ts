import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Обязательное поле'),
  phoneNumber: Yup.string().required('Обязательное поле'),
});

export const getSmsCodeSchema = Yup.object().shape({
  confirmSmsCode: Yup.string().required('Обязательное поле'),
  password: Yup.string().required('Обязательное поле'),
  confirmPassword: Yup.string().required('Обязательное поле'),
});

export const loginSchema = Yup.object().shape({
  phoneNumberLogin: Yup.string().required('Обязательное поле'),
  passwordLogin: Yup.string().required('Обязательное поле'),
});
