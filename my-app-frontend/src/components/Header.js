import React from "react";
import styled from "styled-components";

const Title = () => {
  return <TitleText>MENPHIS DELIVERY</TitleText>;
};

const Subtitle = () => {
  return <SubtitleText>Free Delivery</SubtitleText>;
};

const Header = () => {
  const backgroundImageUrl =
    "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg";

  return (
    <HeaderWrapper style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <Title />
      <Subtitle />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 20px;
  background-repeat: no-repeat;
  height: 400px;
`;

const TitleText = styled.h1`
  font-size: 100px;
  color: #000;
  margin-bottom: 10px;
`;

const SubtitleText = styled.h2`
  font-size: 50px;
  color: #000;
  margin-bottom: 20px;
`;

export default Header;
