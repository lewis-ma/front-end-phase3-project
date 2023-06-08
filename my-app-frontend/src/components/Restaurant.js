import React, { useEffect, useState } from "react";

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch restaurant data from the backend API
    fetch("http://localhost:9292/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data));
  }, []);

  const handleDelete = (id) => {
    // Send a DELETE request to the backend API to delete the restaurant
    fetch(`http://localhost:9292/restaurants/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        // Update the restaurant list after deletion
        setRestaurants(
          restaurants.filter((restaurant) => restaurant.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting restaurant:", error);
      });
  };

  const cardStyle = {
    width: "300px",
    padding: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "4px",
    marginBottom: "16px",
  };

  const titleStyle = {
    fontSize: "20px",
    marginBottom: "8px",
  };

  const descriptionStyle = {
    fontSize: "16px",
    marginBottom: "16px",
  };

  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div>
      <h2>Restaurants</h2>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} style={cardStyle}>
          <img
            src={restaurant.image}
            alt={restaurant.name}
            style={imageStyle}
          />
          <h3 style={titleStyle}>{restaurant.name}</h3>
          <p style={descriptionStyle}>{restaurant.description}</p>
          <button
            onClick={() => handleDelete(restaurant.id)}
            style={buttonStyle}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Restaurant;
