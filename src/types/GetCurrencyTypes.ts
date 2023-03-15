export interface ICurrencyResult {
  date: string;
  EUR: number;
  USD: number;
  RUB: number;
}

export interface ICurrencyResponse {
  result: ICurrencyResult;
}
