import nookies from 'nookies';
import { userI } from '@/types/AuthTypes';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { NextPageContext } from 'next';

interface MyAxiosRequestConfig extends AxiosRequestConfig {
  _isRetry?: boolean;
}

export const useHttp = (ctx?: NextPageContext) => {
  const isServrerSide = ctx === undefined;

  const http = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'https://api.cable.kz/',
  });

  http.interceptors.request.use((config) => {
    const token = isServrerSide ? nookies.get(ctx).token : localStorage.getItem('token');
    console.log(token);

    if (token) config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  });

  http.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError) => {
      const originalRequest: MyAxiosRequestConfig | undefined = error.config;

      if (error.response?.status == 401 && originalRequest && !originalRequest._isRetry) {
        originalRequest._isRetry = true;

        try {
          const response = await axios.get<userI>(
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`,
            {
              withCredentials: true,
            }
          );

          localStorage.setItem('token', response.data.access_token);
          nookies.set(ctx, 'token', response.data.access_token);
          return http.request(originalRequest);
        } catch (e) {
          console.error(`Error from Http`, e);
        }
      }

      throw error;
    }
  );

  return http;
};
