import { PRODUCT_LIST } from "./constant";

export const productReducer = (data = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return [...data, action.data];
    default:
      return data;
  }
};
