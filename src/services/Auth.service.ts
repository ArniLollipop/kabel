import { sendSmsI, userI } from "@/types/AuthTypes";
import { useHttp } from "@/hooks/useHttp";
import { AxiosResponse } from "axios";

const enum endpoints {
  logIn = "users/users/authorization/",
  singUp = "users/users/registration/",
  sendSms = "users/users/send_sms/",
}

interface ProductServiceResponseI {
  logIn: (phone: string, pass: string) => Promise<AxiosResponse<userI>>;
  singUp: (
    phone: string,
    pass: string,
    first_name: string,
    sms_code: string,
    email: string
  ) => Promise<AxiosResponse<userI>>;
  sendSms: (phone: string) => Promise<AxiosResponse<sendSmsI>>;
}

export const AuthService = (): ProductServiceResponseI => {
  const logIn = async (phone: string, pass: string): Promise<AxiosResponse<userI>> => {
    const res = useHttp().post<userI>(endpoints.logIn, { phone_number: phone, password: pass });

    return res;
  };

  const singUp = async (
    phone: string,
    pass: string,
    first_name: string,
    sms_code: string,
    email: string
  ): Promise<AxiosResponse<userI>> => {
    const res = useHttp().post<userI>(endpoints.singUp, {
      phone_number: phone,
      password: pass,
      first_name,
      sms_code,
      email,
    });

    return res;
  };

  const sendSms = async (phone: string): Promise<AxiosResponse<sendSmsI>> => {
    const res = useHttp().post(endpoints.sendSms, { phone_number: phone });
    console.log("res is: ", res);

    return res;
  };

  return { logIn, singUp, sendSms };
};
