import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
      });
  }, []);

  const handleDeleteRestaurant = (id) => {
    // Delete the restaurant with the given id
    fetch(`http://localhost:9292/restaurants/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Remove the deleted restaurant from the state
        setRestaurants(
          restaurants.filter((restaurant) => restaurant.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting restaurant:", error);
      });
  };

  const handleOrderForm = () => {
    // Code to show the order form goes here
    // You can set a state or navigate to a different component
    // to display the order form
  };

  return (
    <Wrapper>
      <h2>Restaurants</h2>
      <RestaurantList>
        {restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id}>
            <img src={restaurant.image} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>
            <p>Location: {restaurant.location}</p> {/* Added line */}
            <Button onClick={() => handleDeleteRestaurant(restaurant.id)}>
              Delete
            </Button>
            <Button onClick={handleOrderForm}>Order</Button>
          </RestaurantItem>
        ))}
      </RestaurantList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  margin-top: 2rem;
`;

const RestaurantItem = styled.div`
  padding: 1rem;
  background-color: #f5f5;
  border-radius: 5px;
  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    color: #000;
  }
`;

const Button = styled.button`
  background-color: #ffff00;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #c70039;
  }
`;

export default Restaurant;
