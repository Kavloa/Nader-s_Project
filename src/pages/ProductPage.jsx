import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  const product = { id: 1, name: "Product 1", description: "Lorem ipsum" };

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src="path/to/product-image.jpg" alt={product.name} />
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductPage;
