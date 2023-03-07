import * as Yup from "yup";

export const authorizationSchema = Yup.object().shape({
  name: Yup.string().required("Обязательное поле"),
  phoneNumber: Yup.string().required("Обязательное поле"),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().required("Обязательное поле"),
  phoneNumber: Yup.string().required("Обязательное поле"),
});

export const profileSchema = Yup.object().shape({
  name: Yup.string().required("Обязательное поле"),
  lastName: Yup.string().required("Обязательное поле"),
  email: Yup.string().required("Обязательное поле").email("Некорректный почтовый адрес"),
  phoneNumber: Yup.string().required("Обязательное поле"),
});

export const deliveryAddressSchema = Yup.object().shape({
  address: Yup.string().required("Обязательное поле"),
  apartment: Yup.string().required("Обязательное поле"),
  floor: Yup.string().required("Обязательное поле"),
  home: Yup.string().required("Обязательное поле"),
  phoneNumber: Yup.string().required("Обязательное поле"),
});

export const addCardSchema = Yup.object().shape({
  numberOfCard: Yup.string().required("Обязательное поле"),
  dateOfCard: Yup.string().required("Обязательное поле"),
  CVV: Yup.string().required("Обязательное поле"),
  nameOfCardOwner: Yup.string().required("Обязательное поле"),
});

export const getSmsCodeSchema = Yup.object().shape({
  confirmSmsCode: Yup.string().required("Обязательное поле"),
  password: Yup.string().required("Обязательное поле"),
  confirmPassword: Yup.string().required("Обязательное поле"),
});

export const loginSchema = Yup.object().shape({
  phoneNumberLogin: Yup.string().required("Обязательное поле"),
  passwordLogin: Yup.string().required("Обязательное поле"),
});
