export interface adventagesI {
  id: number;
  icon: string;
  advantage: string;
}

export interface adventagesAnswI {
  count: number;
  next: string | null;
  previous: string | null;
  results: adventagesI[];
}
