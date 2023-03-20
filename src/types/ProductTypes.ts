interface colorsI {
  color_name: string;
  rgb: string;
  image: string;
}

interface characteristicsI {
  id: number;
  key: string;
  value: string;
}

export interface productI {
  code: number;
  colors_info: colorsI[];
  characteristics_info: characteristicsI[];
  name: string;
  cost: number;
  image: string;
  availability: "в наличии" | "под заказ";
  description: string;
  is_active: boolean;
  core_number: number;
  section: number;
  subcategory: string;
  colors: string[];
}

export interface productAnswI {
  count: number;
  next: string | null;
  previous: string | null;
  results: productI[];
}

interface subcategorySetI {
  name: string;
  category: string;
}

interface categoryI {
  name: string;
  subcategory_set: subcategorySetI[];
  icon: string;
  image: string;
}

export interface categoriesAnswI {
  count: number;
  next: string | null;
  previous: string | null;
  results: categoryI[];
}

export interface coresI {
  [key: string]: number[];
}

export interface coresAnswI {
  result: coresI;
}
