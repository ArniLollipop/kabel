import { useHttp } from '@/hooks/useHttp';
import axios, { AxiosResponse } from 'axios';
import { NextPageContext } from 'next';
import { EditProfileProps } from '@/store/slices/ProfileSlice';

enum endpoints {
  editProfile = 'users/',
  changePassByPhone = 'users/send_sms/',
  compareSmsCodes = 'users/sms_code_verification/',
  changePassFinal = 'users/change_password/',
  getExactUser = 'users/',
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
  compareSmsCodes: (sms_code: string, token: string) => Promise<AxiosResponse<any>>;
  changePassFinal: (phone_number: string, password: string) => Promise<AxiosResponse<any>>;
  getExactUser: (userId: number | undefined | any) => Promise<AxiosResponse<any>>;
}

export const ProfileService = (ctx?: NextPageContext): IProfileServiceResponse => {
  const editProfile = async (
    userId?: number | undefined,
    values?: EditProfileProps,
    avatar?: any
  ): Promise<AxiosResponse<any>> => {
    let res;
    if (avatar) {
      res = await useHttp().patch(`${endpoints.editProfile}${userId}/`, avatar);
    } else {
      res = await useHttp().patch(`${endpoints.editProfile}${userId}/`, values);
    }
    return res.data;
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
    }
    if (for_email) {
      res = await useHttp().post(endpoints.changePassByPhone, {
        phone_number,
        for_email,
      });
    }
    return res.data;
  };

  // const compareSmsCodes = async (sms_code: string): Promise<AxiosResponse<any>> => {
  //   const res = await useHttp().post(endpoints.compareSmsCodes, {
  //     sms_code,
  //   });

  //   return res.data;
  // };

  const compareSmsCodes = async (sms_code: string, token: string): Promise<AxiosResponse<any>> => {
    const res = await axios.post(
      'https://kazkabel-back.zoom-app.kz/users/sms_code_verification/',
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

  return { editProfile, changePassByPhone, changePassFinal, compareSmsCodes, getExactUser };
};
