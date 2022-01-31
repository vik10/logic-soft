export const handlePagination = (arr, i) => {
  let itemPerPage = 12;
  let start = i * itemPerPage;
  let newArr = arr.slice(start, start + itemPerPage);
  return newArr;
};
