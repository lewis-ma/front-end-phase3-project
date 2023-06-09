import React from "react";

const Title = () => {
  return <h1 className="title">MENPHIS DELIVERY</h1>;
};

const Subtitle = () => {
  return <h2 className="subtitle">Free Delivery</h2>;
};

const Header = () => {
  const backgroundImageUrl =
    "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg";

  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <Title />
      <Subtitle />
    </div>
  );
};

// .header {
//   background-size: cover;
//   background-position: center;
//   text-align: center;
//   padding: 20px;
// }

// .title {
//   font-size: 32px;
//   color: #ffffff;
//   margin-bottom: 10px;
// }

// .subtitle {
//   font-size: 18px;
//   color: #ffffff;
//   margin-bottom: 20px;
// }


export default Header;
