import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Add_To_Cart, Remove_From_Cart } from "./redux/action";
import "./App.css";
import Header from "./components/Header";
import { productList } from "./redux/productAction";

function App() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.productReducer);
  console.log("result", result);
  const data = {
    id: 1,
    color: "red",
    number: 5,
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
          dispatch(productList());
        }}
      >
        Call product list
      </button>
      <div>
        {result.map((each) => (
          <div key={each.photo}>
            <img src={each.photo} alt={each.id} width="200px" />
            <p>name:{each.name}</p>
            <p>Color: {each.color}</p>
            <button
              onClick={() => {
                dispatch(Add_To_Cart(each));
              }}
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                dispatch(Remove_From_Cart(each.id));
              }}
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
