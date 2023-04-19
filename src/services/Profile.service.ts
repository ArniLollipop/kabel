import { useHttp } from '@/hooks/useHttp';
import axios, { AxiosResponse } from 'axios';
import { NextPageContext } from 'next';
import { EditProfileProps } from '@/store/slices/ProfileSlice';

interface IAddressReq {
  address?: string;
  apartment?: number;
  floor?: number;
  house?: number;
  phone_number?: string;
  is_default?: boolean;
  user?: number;
  addressId?: number;
}

enum endpoints {
  editProfile = 'users/users/',
  changePassByPhone = 'users/users/send_sms/',
  compareSmsCodes = 'users/users/sms_code_verification/',
  changePassFinal = 'users/users/change_password/',
  getExactUser = 'users/users/',
  getBonus = 'users/users/my_bonus_card/',
  addAddress = 'users/user_addresses/',
  getMyAddresses = 'users/user_addresses/my_addresses/',
  changeMyAddress = 'users/user_addresses/',
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
  getBonus: (token: string | null) => Promise<AxiosResponse<any>>;
  addAddress: (address: IAddressReq, token: string) => Promise<AxiosResponse<any>>;
  getMyAddresses: (token: string | null) => Promise<AxiosResponse<any>>;
  changeMyAddress: (address: IAddressReq, addressId: number) => Promise<AxiosResponse<any>>;
  deleteMyAddress: (addressId: number) => Promise<AxiosResponse<any>>;
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

  const compareSmsCodes = async (sms_code: string, token: string): Promise<AxiosResponse<any>> => {
    const res = await axios.post<any>(
      `${process.env.NEXT_PUBLIC_BASE_URL}users/sms_code_verification`,
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

  const getBonus = async (token: string | null): Promise<AxiosResponse<any>> => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}users/users/my_bonus_card/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  };

  const addAddress = async (address: IAddressReq, token: string): Promise<AxiosResponse<any>> => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}users/user_addresses/`,
      address,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  };

  const getMyAddresses = async (token: string | null): Promise<AxiosResponse<any>> => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}users/user_addresses/my_addresses/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  };

  const changeMyAddress = async (
    address: IAddressReq,
    addressId: number
  ): Promise<AxiosResponse<any>> => {
    const token = localStorage.getItem('access_token');

    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_BASE_URL}users/user_addresses/${addressId}/`,
      address,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  };

  const deleteMyAddress = async (addressId: number): Promise<AxiosResponse<any>> => {
    const token = localStorage.getItem('access_token');

    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}users/user_addresses/${addressId}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  };

  return {
    editProfile,
    changePassByPhone,
    changePassFinal,
    getBonus,
    compareSmsCodes,
    getExactUser,
    addAddress,
    getMyAddresses,
    changeMyAddress,
    deleteMyAddress,
  };
};
