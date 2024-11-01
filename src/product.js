import React, { useState } from 'react';
import './product.css'; // Custom CSS file for styling

const Product = () => {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState(41);
  const [shoeImage, setShoeImage] = useState("shoe.jpg");

  const handleImageClick = (imageUrl) => {
    setShoeImage(imageUrl);
  };

  const handleQuantityChange = (type) => {
    setQuantity((prevQuantity) =>
      type === 'increment' ? prevQuantity + 1 : Math.max(prevQuantity - 1, 0)
    );
  };

  return (
    <div className="product-card">
      {/* Main Product Image */}
      <div className="product-image">
        <img src={shoeImage} alt="Nike The Joyride" />
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h2>Nike - The Joyride</h2>
        <h3 className="price">$390</h3>

        <div className="product-options-row">
          {/* Color Selection */}
          <div className="product-option">
            <p>Colour</p>
            <div className="colors">
              <span
                className={`color-circle ${selectedColor === 'black' ? 'selected' : ''}`}
                style={{ backgroundColor: 'black' }}
                onClick={() => setSelectedColor('black')}
              ></span>
              <span
                className={`color-circle ${selectedColor === 'orange' ? 'selected' : ''}`}
                style={{ backgroundColor: 'orange' }}
                onClick={() => setSelectedColor('orange')}
              ></span>
            </div>
          </div>

          {/* Size Selection */}
          <div className="product-option">
            <p>Size</p>
            <div className="sizes">
              {[41, 42, 43, 44].map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="product-option">
            <p>Reviews</p>
            <div className="reviews">❤️❤️❤️❤️🤍</div>
          </div>
        </div>

        {/* Quantity Control */}
        <div className="quantity-control">
          <button onClick={() => handleQuantityChange('decrement')}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange('increment')}>+</button>
        </div>

        {/* Buy Button */}
        <button className="buy-button">Buy It Now!</button>
      </div>

      {/* Additional Images at the Bottom Right */}
      <div className="additional-images">
        <img src="shoe1.png" onClick={() => handleImageClick("shoe1.png")} alt="1" />
        <img src="shoe.jpg" onClick={() => handleImageClick("shoe.jpg")} alt="2" />
        <img src="shoe1.png" onClick={() => handleImageClick("shoe1.png")} alt="3" />
      </div>
    </div>
  );
};

export default Product;
