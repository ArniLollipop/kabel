export interface AboutI {
  id: number;
  title: string;
  text: string;
  our_goal: string;
  image: string;
}

export interface AboutAnswI {
  count: number;
  next: null | string;
  previous: null | string;
  results: AboutI[];
}
