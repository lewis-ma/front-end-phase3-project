import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));

  return (
    <Nav>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <Link to="/" className="tag">
          About
        </Link>

        <Link to="/order" className="tag">
          Order
        </Link>

        <Link to="/restaurants" className="tag">
          Restaurants
        </Link>
        <Link to="/dishes" className="tag">
          Dishes
        </Link>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 1rem 2rem 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0e1118;
  box-shadow: rgba(60, 64, 67, 1) 0px 1px 2px 0px,
    rgba(60, 64, 67, 1) 0px 1px 3px 1px;
  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tag {
      text-transform: capitalize;
      text-decoration: none;
      margin-right: 2rem;
      color: #fff;
      font-size: 1.2rem;
      transition: all 0.3 ease-in-out;
      cursor: pointer;
      &:hover {
        color: #ed215e;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    padding: 1rem 1rem 0.5rem 1rem;
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      flex-direction: column;
      justify-content: center;
      gap: 3rem;
      align-content: flex-start;
      align-items: center;
      background-color: #000;
      visibility: hidden;
      .tag {
        border-bottom: 2px solid #ed215e;
        align-self: center;
        color: #fff;
        padding: 1rem 3rem;
        border-radius: 5px;
        font-weight: 600;
        transition: all 0.2s ease-in-out;
        margin: 0;
        background: none;
        &:hover {
          background-color: #fff !important;
          color: #ed215e;
        }
      }
    }
  }
`;

export default Navbar;
