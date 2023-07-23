import React, { useState } from 'react';
import "./Product.scss";

//icons
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Balance from "@mui/icons-material/Balance"

const images = [
  "https://images.pexels.com/photos/1034859/pexels-photo-1034859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1835660/pexels-photo-1835660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const Product = () => {
  const [ clickedImg, setClickedImg ] = useState(0);
  const [ quantity, setQuantity ] = useState(1);

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="product-img" onClick={e => setClickedImg(0)} />
          <img src={images[1]} alt="product-img" onClick={e => setClickedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[clickedImg]} alt="product-img" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit eum, at fugiat, culpa rerum inventore iste placeat consequuntur nulla labore magnam aspernatur temporibus nostrum architecto.</p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev => prev === 1 ? 1 :  prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCart /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorder /> ADD TO WISHLIST
          </div>
          <div className="item">
            <Balance /> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMAITON</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product;