import React from 'react';
import { useParams } from 'react-router-dom';
import { ShopList } from '../helpers/Shoplist'; // Importing the list of products

function Product() {
  let { productName } = useParams();

  // Find the product in the ShopList based on its name
  const product = ShopList.find(item => item.name === productName);

  // Check if the product is found
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <div>
        <img src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '300px' }} />
        <p>Product Name: {product.name}</p>
        {/* You can display more details about the product here */}
      </div>
    </div>
  );
}

export default Product;
