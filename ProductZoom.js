import React from 'react';
import './ProductZoom.css'; // Replace with your CSS file


class ProductZoom extends React.Component {
    render() {
      return (
        <div className="product-zoom">
          <img
            image="https://jumpbooks.lk/ceruvef/uploads/2017/03/The-Lean-startup.jpg"
            alt="Product"
            className="product-image"
          />
        </div>
      );
    }
  }

  export default ProductZoom;