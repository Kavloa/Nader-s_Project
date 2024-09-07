import React from "react";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const products = [
    { id: 1, name: "Product 1", image: "path/to/image1.jpg", price: "$100" },
    { id: 2, name: "Product 2", image: "path/to/image2.jpg", price: "$150" },
  ];

  return (
    <div className="container">
      <h1 className="my-4">Welcome to Andeo</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
