import React, { useState } from "react";
import styled from "styled-components";

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <CartWrapper>
      <h2>Add to Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <CartList>
          {cartItems.map((item, index) => (
            <CartItem key={index}>
              <CartItemName>{item.dishName}</CartItemName>
              <CartItemQuantity>Quantity: {item.quantity}</CartItemQuantity>
              <RemoveButton onClick={() => removeFromCart(index)}>
                Remove
              </RemoveButton>
            </CartItem>
          ))}
        </CartList>
      )}
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  margin: 20px;
`;

const CartList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CartItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CartItemName = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const CartItemQuantity = styled.div`
  margin-right: 10px;
`;

const RemoveButton = styled.button`
  background-color: #c31a4d;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`;

export default AddToCart;
