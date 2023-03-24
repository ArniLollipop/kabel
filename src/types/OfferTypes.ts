export interface offerI {
  id: number;
  title: string;
  text: string;
  button_text: string;
  button_url: string;
  image: string;
}

export interface offerAnswI {
  count: number;
  next: string | null;
  previous: string | null;
  results: offerI[];
}
