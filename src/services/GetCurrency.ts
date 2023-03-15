import { useHttp } from '@/hooks/useHttp';
import { AxiosResponse } from 'axios';
import { NextPageContext } from 'next';
import { ICurrencyResponse } from '@/types/GetCurrencyTypes';

enum endpoints {
  getCurrency = '/widgets/get_currency/',
}

interface IGetCurrencyResponse {
  getCurrency: () => Promise<AxiosResponse<ICurrencyResponse>>;
}

export const GetCurrencyService = (ctx?: NextPageContext): IGetCurrencyResponse => {
  const getCurrency = async (): Promise<AxiosResponse<ICurrencyResponse>> => {
    const res = await useHttp().get(endpoints.getCurrency);
    return res.data;
  };

  return { getCurrency };
};
