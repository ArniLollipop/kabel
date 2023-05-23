import { useHttp } from "@/hooks/useHttp";
import axios, { AxiosResponse } from "axios";
import { NextPageContext } from "next";
import { EditProfileProps } from "@/store/slices/ProfileSlice";

enum endpoints {
  editProfile = "users/users/",
  changePassByPhone = "users/users/send_sms/",
  compareSmsCodes = "users/users/sms_code_verification/",
  changePassFinal = "users/users/change_password/",
  getExactUser = "users/users/",
}

interface IProfileServiceResponse {
  editProfile: (
    userId?: number | undefined,
    values?: EditProfileProps,
    avatar?: any
  ) => Promise<AxiosResponse<any>>;
  changePassByPhone: (
    phone_number: string,
    for_password?: boolean,
    for_email?: boolean
  ) => Promise<AxiosResponse<any>>;
  compareSmsCodes: (
    sms_code: string,
    token: string
  ) => Promise<AxiosResponse<any>>;
  changePassFinal: (
    phone_number: string,
    password: string
  ) => Promise<AxiosResponse<any>>;
  getExactUser: (
    userId: number | undefined | any
  ) => Promise<AxiosResponse<any>>;
}

export const ProfileService = (
  ctx?: NextPageContext
): IProfileServiceResponse => {
  const editProfile = async (
    userId?: number | undefined,
    values?: EditProfileProps,
    avatar?: any
  ): Promise<AxiosResponse<any>> => {
    let res;
    if (avatar) {
      const formData = new FormData();
      formData.append("avatar", avatar);
      console.log("====================================");
      console.log(formData, "osdngioerngiorengiorengiorengioerng");
      console.log("====================================");
      res = await useHttp().patch(
        `${endpoints.editProfile}${userId}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      location.reload();
    } else {
      res = await useHttp().patch(`${endpoints.editProfile}${userId}/`, values);
      location.reload();
    }

    return res;
  };

  const changePassByPhone = async (
    phone_number: string,
    for_password?: boolean,
    for_email?: boolean
  ): Promise<AxiosResponse<any>> => {
    let res;
    if (for_password) {
      res = await useHttp().post(endpoints.changePassByPhone, {
        phone_number,
        for_password,
      });
      return res.data;
    }

    if (for_email) {
      res = await useHttp().post(endpoints.changePassByPhone, {
        phone_number,
        for_email,
      });
      return res.data;
    }
    // @ts-ignore
    else return res.data;
  };

  // const compareSmsCodes = async (sms_code: string): Promise<AxiosResponse<any>> => {
  //   const res = await useHttp().post(endpoints.compareSmsCodes, {
  //     sms_code,
  //   });

  //   return res.data;
  // };

  const compareSmsCodes = async (
    sms_code: string,
    token: string
  ): Promise<AxiosResponse<any>> => {
    const res = await useHttp().post(
      endpoints.compareSmsCodes,
      {
        sms_code,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  };

  const changePassFinal = async (
    phone_number: string,
    password: string
  ): Promise<AxiosResponse<any>> => {
    const res = await useHttp().post(endpoints.changePassFinal, {
      phone_number,
      password,
    });

    return res.data;
  };

  const getExactUser = async (userId: number): Promise<AxiosResponse<any>> => {
    const res = await useHttp().get(`${endpoints.getExactUser}${userId}/`);
    return res.data;
  };

  return {
    editProfile,
    changePassByPhone,
    changePassFinal,
    compareSmsCodes,
    getExactUser,
  };
};
