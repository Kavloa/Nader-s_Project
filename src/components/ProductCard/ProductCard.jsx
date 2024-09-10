import React from 'react';
import './ProductCard.css';  // Custom styles for ProductCard

const ProductCard = ({ product }) => {
  return (
    <div className="card product-card">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price}</p>
        <a href="#" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
  );
};

export default ProductCard;
