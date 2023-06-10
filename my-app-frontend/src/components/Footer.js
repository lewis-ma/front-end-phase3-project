import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* <Logo>
          <img src={logo} alt="Logo" />
          <h2>Your Logo</h2>
        </Logo> */}
        <Creator>
          <p>
            Created by <a href="#home">@lewisky28</a>
          </p>
        </Creator>
        <SocialMedia>
          <SocialMediaLink href="#home">
            <FontAwesomeIcon icon={faFacebook} size="2x" color="#fff" />
          </SocialMediaLink>
          <SocialMediaLink href="#home">
            <FontAwesomeIcon icon={faTwitter} size="2x" color="#fff" />
          </SocialMediaLink>
          <SocialMediaLink href="#home">
            <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
          </SocialMediaLink>
        </SocialMedia>
      </FooterContent>
      <ContactInfo>Contact (email): @lewisky28</ContactInfo>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background: #000;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  @media screen and (min-width: 280px) and (max-width: 768px) {
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    padding: 1.2rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;

  @media screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

/* const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 70px;
    height: 70px;
  }

  h2 {
    font-size: 1.2rem;
    color: #fff;
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`; */

const Creator = styled.div`
  font-size: 1.2rem;
  a {
    text-decoration: none;
    color: #1460e5;
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

const SocialMediaLink = styled.a`
  padding: 10px;
  color: #fff;
`;

const ContactInfo = styled.p`
  color: #fff;
`;

export default Footer;
