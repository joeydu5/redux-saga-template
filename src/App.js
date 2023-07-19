import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Add_To_Cart, Remove_From_Cart } from "./redux/action";
import "./App.css";
import Header from "./components/Header";
import { productList } from "./redux/productAction";

function App() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.cartReducer);
  console.log("result", result);
  const data = {
    id: 1,
    color: "red",
    number: 5,
  };

  const dataList = {
    id: 1,
    list: "ok",
  };
  const id = 1;
  return (
    <div className="App">
      <Header />
      <button
        onClick={() => {
          dispatch(Add_To_Cart(data));
        }}
      >
        Add to Cart
      </button>
      <button
        onClick={() => {
          dispatch(Remove_From_Cart(id));
        }}
      >
        Remove from cart
      </button>
      <button>Empty cart</button>
      <button
        onClick={() => {
          dispatch(productList(dataList));
        }}
      >
        Call product list
      </button>
    </div>
  );
}

export default App;
