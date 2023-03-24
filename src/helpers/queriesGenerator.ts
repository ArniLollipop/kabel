export const queriesGenerator = (arr: string[], param: string): string => {
  if (!arr.length) return "";
  return (
    arr.reduce((acc, curr, i) => {
      if (i === arr.length - 1) acc += `${param}=${curr}`;
      else acc += `${param}=${curr}&`;
      return acc;
    }, "") + "&"
  );
};
