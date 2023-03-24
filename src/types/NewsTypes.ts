export {};

interface newsSectionSetI {
  id: number;
  image: string | null;
  text: string | null;
  is_marked: boolean;
}

export interface newsI {
  id: number;
  newssection_set: newsSectionSetI[];
  thumbnail: string;
  description: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export interface NewsResponseI {
  count: number;
  next: null | string;
  previous: null | string;
  results: newsI[];
}
