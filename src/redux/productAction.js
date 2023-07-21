import { PRODUCT_LIST } from "./constant";

export const productList = (data) => {
  console.log(data);
  return {
    type: PRODUCT_LIST,
  };
};
