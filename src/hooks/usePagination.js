import { useMemo } from "react";

export const usePagination = (totalPages) => {
  const array = [];

  const pagesArray = useMemo(() => {
    for (let i = 0; i < totalPages; i++){
      array.push(i + 1);
    }
    console.log('Я юз пагинейшен');

    return array;
  })
  return pagesArray;
}