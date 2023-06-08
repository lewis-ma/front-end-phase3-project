import React, { useEffect, useState } from "react";

function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch order data from the backend API
    fetch("http://localhost:9292/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      {orders.map((order) => (
        <div
          key={order.id}
          style={{
            width: "300px",
            padding: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "16px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={order.image}
            alt={order.name}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "4px",
              marginBottom: "16px",
            }}
          />
          <h3
            style={{
              fontSize: "20px",
              marginBottom: "8px",
            }}
          >
            {order.name}
          </h3>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "16px",
            }}
          >
            {order.description}
          </p>
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Like ({order.likes})
          </button>
        </div>
      ))}
    </div>
  );
}

export default Order;
