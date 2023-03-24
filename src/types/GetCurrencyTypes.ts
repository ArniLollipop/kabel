export interface ICurrencyResult {
  date: string;
  EUR: number;
  USD: number;
  RUB: number;
}

export interface ICurrencyResponse {
  result: ICurrencyResult;
}

export interface IMetalResult {
  date: string;
  name: string;
  price: 1043028.1248215679;
  profit: 0;
}

export interface IMetalResponse {
  result: IMetalResult;
}
