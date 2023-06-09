import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9292/dishes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching dishes");
        }
        return response.json();
      })
      .then((data) => {
        setDishes(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const handleDeleteDish = (id) => {
    // Delete the dish with the given id
    fetch(`http://localhost:9292/dishes/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error deleting dish");
        }
        return response.json();
      })
      .then(() => {
        // Remove the deleted dish from the state
        setDishes(dishes.filter((dish) => dish.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleOrderForm = () => {
    // Code to show the order form goes here
    // You can set a state or navigate to a different component
    // to display the order form
  };

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <Wrapper>
      <h2>Dishes</h2>
      <DishesList>
        {dishes.map((dish) => (
          <DishItem key={dish.id}>
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>Price: ${dish.price}</p> {/* Added line */}
            <p>Location: {dish.location}</p> {/* Added line */}
            <Button onClick={() => handleDeleteDish(dish.id)}>Delete</Button>
            <Button onClick={handleOrderForm}>Order</Button>
          </DishItem>
        ))}
      </DishesList>
    </Wrapper>
  );
};




const Wrapper = styled.div`
  text-align: center;
`;

const DishesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  margin-top: 2rem;
`;

const DishItem = styled.div`
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

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`;

export default Dishes;
