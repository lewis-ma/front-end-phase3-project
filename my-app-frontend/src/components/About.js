import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  background-color: #000 !important;
  color: #000;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
  background-color: #000 !important;
  color: #fff;
`;

const Description = styled.p`
  font-size: 16px;
  background-color: #000 !important;
  color: #fff;
`;

function About() {
  return (
    <Container>
      <Title>About Food Delivery App</Title>
      <Description>
        This app allows you to order any food from any restaurant of your
        choice.
      </Description>
    </Container>
  );
}

export default About;
