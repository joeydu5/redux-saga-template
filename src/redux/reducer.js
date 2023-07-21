import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";
export const cartReducer = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("action", action);
      return [...data, action.payload];
    case REMOVE_FROM_CART:
      console.log("remove", data);
      let newData;
      newData = data.filter((each) => each.id !== action.id);
      console.log("remove2", data);
      console.log("remove2 newData", newData);
      if (newData === undefined) {
        newData = [];
      }
      return newData;
    default:
      return data;
  }
};
