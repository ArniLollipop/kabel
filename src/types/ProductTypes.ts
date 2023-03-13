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
  is_active: boolean;
  core_number: number;
  section: number;
  subcategory: string;
  colors: string[];
}

export interface productAnswI {
  count: number;
  next: string;
  previous: string;
  results: productI[];
}
