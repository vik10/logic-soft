import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./componets/Header";
import store from "./store";
import CardContainer from "./componets/CardContainer";
import ProductInfo from "./componets/ProductInfo";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<CardContainer />}></Route>
            <Route path={`/productInfo/:id`} element={<ProductInfo />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
