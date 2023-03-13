import { sendSmsI, userI } from "@/types/AuthTypes";
import { useHttp } from "@/hooks/useHttp";
import { AxiosResponse } from "axios";

const enum endpoints {
  logIn = "users/authorization/",
  singUp = "users/registration/",
  sendSms = "users/send_sms/",
}

interface ProductServiceResponseI {
  logIn: (phone: string, pass: string) => Promise<AxiosResponse<userI>>;
  singUp: (
    phone: string,
    pass: string,
    first_name: string,
    sms_code: string
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
    sms_code: string
  ): Promise<AxiosResponse<userI>> => {
    const res = useHttp().post<userI>(endpoints.singUp, {
      phone_number: phone,
      password: pass,
      first_name,
      sms_code,
    });

    return res;
  };

  const sendSms = async (phone: string): Promise<AxiosResponse<sendSmsI>> => {
    const res = useHttp().post(endpoints.sendSms, { phone_number: phone });
    return res;
  };

  return { logIn, singUp, sendSms };
};
