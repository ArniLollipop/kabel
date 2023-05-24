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

interface colorsI {
  color_name: string;
  image: string;
}

export interface productI {
  code: number;
  colors_info: colorsI[];
  characteristics_info: characteristicsI[];
  name: string;
  cost: number;
  remains: number;
  image: string;
  availability: "в наличии" | "под заказ";
  description: string | null;
  is_active: boolean;
  core_number: number;
  section: number;
  subcategory: string;
  colors: colorsI[];
  recommended_products: productI[];
}

export interface productAnswI {
  count: number;
  next: string | null;
  previous: string | null;
  count_pages: number | 0;
  results: productI[];
}

interface subcategorySetI {
  name: string;
  category: string;
}

export interface categoryI {
  name: "";
  subcategory_set: subcategorySetI[];
  icon: "";
  image: "";
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
