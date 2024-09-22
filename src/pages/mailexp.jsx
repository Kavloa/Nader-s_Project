import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductPage = () => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/product/1'); // Replace with the actual product ID
        setProductData(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
  
    fetchProductData();
  }, []);

  // Function to create the mailto link
  const createMailtoLink = () => {
    if (!productData) return '';

    const recipientEmail = 'tmohamedkhald@gmail.com'; // The company's email
    const subject = `Inquiry about ${productData.name}`; // Subject for the email
    const body = `Hello,\n\nI am interested in the product "${productData.name}".\n\nProduct Details:\n${JSON.stringify(productData, null, 2)}\n\nBest regards,`;

    // Encode the subject and body to make them URL-safe
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Create the mailto link
    return `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <div>
      {productData ? (
        <div style={{
          marginTop:"500px"
        }}>
          <h2>{productData.name}</h2>
          <p>{productData.description}</p>
          {/* Create the mailto link */}
          <a href={createMailtoLink()}>Send Product Info via Email</a>
        </div>
      ) : (
        <p>Loading product data...</p>
      )}
    </div>
  );
};

export default ProductPage;
