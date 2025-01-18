import React, { useState, useEffect } from 'react';
import './style.css';

function Card() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from localStorage
    const storedItems = JSON.parse(localStorage.getItem("PRODUCT")) || [];
    setCartItems(storedItems);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("PRODUCT", JSON.stringify(updatedCart));
    saveSubtotal(updatedCart);
  };

  const handleQuantityChange = (id, action) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        if (action === 'increase') {
          return { ...item, quantity: item.quantity + 1 };
        } else if (action === 'decrease' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("PRODUCT", JSON.stringify(updatedCart));
    saveSubtotal(updatedCart);
  };

  const saveSubtotal = (updatedCart) => {
    const subtotal = updatedCart.reduce((acc, item) => acc + item.quantity * item.currentPrice, 0);
    localStorage.setItem("SubtotalPrice", subtotal);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity * item.currentPrice, 0);
  };

  
  const handleClearCart = () => {
    // Clear the cart from state and localStorage
    setCartItems([]);
    localStorage.removeItem("PRODUCT");
    localStorage.removeItem("SubtotalPrice");
  };
  return (
    <div>
      <div className="CART-DETAILS">
        <div className="CART-DETAILS-CONTAINER">
          <div className="CART-HEADER">
            <h1>CART</h1>
            <a href="/"><i className="ri-home-4-line"></i>Home / <span>Cart</span></a>
          </div>
        </div>
      </div>
      
      {/* Cart Table */}
      <table className="shop_table">
        <thead>
          <tr>
            <th className="product-remove">&nbsp;</th>
            <th className="product-thumbnail">&nbsp;</th>
            <th className="product-name">Product</th>
            <th className="product-price">Price</th>
            <th className="product-quantity">Quantity</th>
            <th className="product-subtotal">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <tr key={item.id}>
                <td className="product-remove" onClick={() => handleRemove(item.id)}>
                  <i className="ri-close-line"></i>
                </td>
                <td className="product-thumbnail">
                  <div className="Product-Image">
                    <img src={item.images} alt={item.title} />
                  </div>
                </td>
                <td className="product-names">
                  <p>{item.title}</p>
                </td>
                <td className="product-prices">
                  <p>${item.currentPrice}.00</p>
                </td>
                <td className="product-quantitys">
                  <div className="Quantity">
                    <div className="MINUS" onClick={() => handleQuantityChange(item.id, 'decrease')}>-</div>
                    <div className="NUMBER">{item.quantity}</div>
                    <div className="PLUS" onClick={() => handleQuantityChange(item.id, 'increase')}>+</div>
                  </div>
                </td>
                <td className="product-subtotals">
                  <h5>${item.currentPrice * item.quantity}.00</h5>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Your cart is empty</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Subtotal Section */}
     <div className='coupon'>
        <div className='Coupon'>
        <button onClick={handleClearCart}>Clear shopping cart</button>
         <button className='Update'>UPDATE CART</button>
        </div>
     </div>
     <div className='cart-collaterals'>
      <div className='cart-collateralss'>
        <div className='cart_totals note'>
          <h2>Special instructions for seller</h2>
          <textarea name="note" id="cart-note__input"></textarea>
        </div>
        <div className='cart_totals2'>
          <h2>CART TOTALS</h2>
           <table cellSpacing="0">
            <tbody>
              <tr>
                <th>Subtotal:</th>
                <td>{`$${calculateSubtotal()}.00`}</td>
              </tr>
              <tr>
                <th>Shipping:</th>
                <td>Shipping & taxes calculated at checkout</td>
              </tr>
              <tr>
                <th>Total:</th>
                <td>{`$${calculateSubtotal()}.00`}</td>
              </tr>
            </tbody>
           </table> 
        </div>
      </div>
     </div>
  

    </div>
  );
}

export default Card;
