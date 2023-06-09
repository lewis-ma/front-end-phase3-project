import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/order">Order</Link>
        </li>

        <li>
          <Link to="/restaurant">Restaurant</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-right: 10px;
  }

  a {
    text-decoration: none;
    color: #000000;
    font-weight: bold;
    padding: 5px;
    border-radius: 4px;

    &:hover {
      background-color: #dddddd;
    }
  }
`;

export default Navbar;
