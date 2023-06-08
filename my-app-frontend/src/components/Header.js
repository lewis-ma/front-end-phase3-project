import React from "react";

const Title = () => {
  return <h1>MENPHIS DELIVERY</h1>;
};

const Subtitle = () => {
  return <h2>Free Delivery</h2>;
};

const Header = () => {
  const backgroundImageUrl =
    "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg";

  return (
    <div>
      <Title />
      <Subtitle />
      
    </div>
  );
};

// const HeaderContainer = styled.header`
//   background-image: url(${(props) => props.backgroundImageUrl});
//   background-size: cover;
//   background-position: center;
//   text-align: center;
//   padding: 20px;
// `;

// const Title = styled.h1`
//   font-size: 32px;
//   color: #ffffff;
//   margin-bottom: 10px;
// `;

// const Subtitle = styled.h3`
//   font-size: 18px;
//   color: #ffffff;
//   margin-bottom: 20px;
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   justify-content: center;

//   button {
//     margin: 0 10px;
//     padding: 10px 20px;
//     font-size: 16px;
//     background-color: #ffffff;
//     color: #000000;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;

//     &:hover {
//       background-color: #dddddd;
//     }
//   }
// `;

export default Header;
