import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from "../store/productSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items); 
  const dispatch = useDispatch();

  const handleRemoveFromCart = (index) => {
    dispatch(removeProduct(index));
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <span style={{ cursor: 'pointer', position: 'absolute', top: 0, right: 0 }}>
          Cart ({cartItems.length})
        </span>
        <div style={{ position: 'absolute', right: 0, backgroundColor: 'white', border: '1px solid black', padding: '10px' }}>
          {cartItems.map((item, index) => (
            <div key={index}>
              {item.title} <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cart;