import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";
export const cartReducer = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("action", action);
      return [...data, action.payload];
    case REMOVE_FROM_CART:
      let newData;
      newData = data.forEach((each) => {
        if (each.id !== action.id) {
          return each;
        }
      });
      if (newData === undefined) {
        newData = [];
      }
      return newData;
    default:
      return data;
  }
};
