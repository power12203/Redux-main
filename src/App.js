import logo from "./logo.svg";
import "./App.css";

import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import styled from "styled-components";

const ProductDiv = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <ProductDiv>
      <ProductList />
      <ProductDetail />
    </ProductDiv>
  );
};

export default App;
