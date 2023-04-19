import { useHttp } from '@/hooks/useHttp';
import { AxiosResponse } from 'axios';
import { NextPageContext } from 'next';

enum endpoints {
  getServiceWeight = 'services/get_weight/',
  getServiceDecoding = 'services/get_decoding/',
}

interface ServiceServiceResponseI {
  getServiceWeight: (cable_type: string) => Promise<AxiosResponse>;
  getServiceDecoding: (cable_type: string) => Promise<AxiosResponse>;
}

export const ServiceService = (ctx?: NextPageContext): ServiceServiceResponseI => {
  const getServiceWeight = async (cable_type: string): Promise<AxiosResponse> => {
    const res = await useHttp(ctx).post(endpoints.getServiceWeight, { cable_type });
    return res;
  };

  const getServiceDecoding = async (cable_type: string): Promise<AxiosResponse> => {
    const res = await useHttp(ctx).post(endpoints.getServiceDecoding, { cable_type });
    return res;
  };

  return { getServiceWeight, getServiceDecoding };
};
