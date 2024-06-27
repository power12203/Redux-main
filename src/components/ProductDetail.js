import React from "react";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct);

  if (!selectedProduct) {
    return <div>Select a product to see the details</div>;
  }

  return (
    <div>
      <h2>{selectedProduct.name}</h2>
      <img
        src={selectedProduct.imageUrl}
        alt={selectedProduct.name}
        style={{ width: "150px", height: "150px" }}
      />
      <p>{selectedProduct.description}</p>
    </div>
  );
};

export default ProductDetail;
