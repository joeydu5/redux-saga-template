import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  console.log("get product saga called");
  let data = yield fetch("http://localhost:3000/products");
  console.log("data1", data);
  data = yield data.json();
  console.log(data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
