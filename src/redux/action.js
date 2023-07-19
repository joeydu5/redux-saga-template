import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";
export const Add_To_Cart = (payload) => {
  console.log("action called", payload);
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const Remove_From_Cart = (id) => {
  console.log("remove action called", id);

  return {
    type: REMOVE_FROM_CART,
    id,
  };
};
