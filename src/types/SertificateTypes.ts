export interface sertificateI {
  id: number;
  image: string;
}

export interface sertificateAnswsI {
  count: number;
  next: null;
  previous: null;
  results: sertificateI[];
}
