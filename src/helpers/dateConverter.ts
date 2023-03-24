export function dateConverter(str: string): string {
  const date = new Date(str);
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const year = date.getFullYear().toString().slice(2, date.getFullYear().toString().length);
  return `${day}/${month}/${year}`;
}
