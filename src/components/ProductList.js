import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, setSelectedProduct } from "../module/actions";
import styled from "styled-components";
const ListDiv = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  li {
    list-style: none;
  }
  li:hover {
    cursor: pointer;
  }
`;

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // aip 사용시 위치
    const dummyProducts = [
      {
        id: 1,
        name: "상품 1",
        description: "상품 설명 1",
        imageUrl:
          "https://m.papergarden.net/web/product/big/202201/43d7914e60374905373099a0f21b24f6.jpg",
      },
      {
        id: 2,
        name: "상품 2",
        description: "상품 설명 2",
        imageUrl:
          "https://img.29cm.co.kr/next-product/2023/01/11/c60c48e2247e47349a0566ddf7a2cd89_20230111143945.jpg?width=700",
      },
    ];
    dispatch(setProducts(dummyProducts));
  }, [dispatch]);

  const selectProduct = (product) => {
    dispatch(setSelectedProduct(product));
  };

  return (
    <ListDiv className="list">
      <h2>상품 목록</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => selectProduct(product)}>
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ width: "50px", height: "50px" }}
            />
            {product.name}
          </li>
        ))}
      </ul>
    </ListDiv>
  );
};

export default ProductList;
