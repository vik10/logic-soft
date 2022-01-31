import { handlePagination } from "../utils/index";

test("pagination-test", () => {
  expect(
    handlePagination([2, 3, 5, 6, 5, 44, 56, 44, 33, 44, 55, 33, 44], 0)
  ).toStrictEqual([2, 3, 5, 6, 5, 44, 56, 44, 33, 44, 55, 33]);
});
