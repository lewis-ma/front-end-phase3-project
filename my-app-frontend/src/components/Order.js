import React, { useState } from "react";
import styled from "styled-components";
import AddToCart from "./AddToCart";

const Order = () => {
  const [customerName, setCustomerName] = useState("");
  const [dishName, setDishName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderId, setOrderId] = useState(null);

  const handleOrder = async () => {
    const response = await fetch("/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customer_name: customerName,
        dish_name: dishName,
        quantity: quantity,
      }),
    });
    const data = await response.json();
    setOrderId(data.id);
  };

  const handleDelete = async () => {
    await fetch(`/order/${orderId}`, { method: "DELETE" });
    setOrderId(null);
  };

  return (
    <OrderWrapper>
      <InputLabel>
        Customer Name:
        <Input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </InputLabel>
      <br />
      <InputLabel>
        Dish Name:
        <Input
          type="text"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
        />
      </InputLabel>
      <br />
      <InputLabel>
        Quantity:
        <Input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </InputLabel>
      <br />
      <Button onClick={handleOrder}>Add to Cart</Button>{" "}
      {/* Changed button label */}
      {orderId && <Button onClick={handleDelete}>Delete Order</Button>}
      {/* Pass order details to AddToCart component */}
      {orderId && (
        <AddToCart
          customerName={customerName}
          dishName={dishName}
          quantity={quantity}
        />
      )}
    </OrderWrapper>
  );
};

const OrderWrapper = styled.div`
  margin: 20px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #ffff00;
  color: #000;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c31a4d;
  }
`;

export default Order;
