import React from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { scroller } from "react-scroll";

const FullWidthFooterContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #e03e3e;
  margin-top: 30px;
  color: #fff;
  letter-spacing: 0.8px;
`;

const FooterContainer = styled.div`
  margin: auto;
  overflow: auto;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 70px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 500;

  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const Styledp = styled.p`
  font-size: 16px;
  letter-spacing: 1px;

  @media screen and (max-width: 1200px) {
    font-size: 15px;
  }

  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

const Styledpnav = styled.p`
  font-size: 16px;
  letter-spacing: 1px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    font-size: 15px;
  }

  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

const NavigationDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  flex-direction: column;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

const OpenHoursDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

const FindUsAndDirection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

const StyledTitle = styled.div`
  padding-bottom: 3px;
  border-bottom: 2px solid #fff;
  font-size: 25px;
  font-weight: 500;
  padding-top: 30px;

  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const StyledpContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;

const StyledFaFacebook = styled(FaFacebook)`
  font-size: 22px;
  color: #fff;
`;
const StyledFaInstagram = styled(AiFillInstagram)`
  font-size: 25px;
  color: #fff;
`;

const Copyright = styled.div`
  width: 100%;
  background: #e03e3e;
  font-size: 14px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledA = styled.a`
text-decoration : none;
color: #fff;
` 

const scrollToHome = () => {
  scroller.scrollTo("home", { smooth: true, duration: 1000 });
};

const scrollToServices = () => {
  scroller.scrollTo("services", { smooth: true, duration: 1000 });
};

const scrollToGallery = () => {
  scroller.scrollTo("gallery", { smooth: true, duration: 1000 });
};

const scrollToContact = () => {
  scroller.scrollTo("contact", { smooth: true, duration: 1000 });
};

const Footer = () => {
  return (
    <FullWidthFooterContainer>
      <FooterContainer>
        <NavigationDiv>
          <Title>Navigate</Title>
          <StyledpContainer>
            <Styledpnav onClick={scrollToHome}>Home</Styledpnav>
            <Styledpnav onClick={scrollToServices}>Services</Styledpnav>
            <Styledpnav onClick={scrollToGallery}>Gallery</Styledpnav>
            <Styledpnav onClick={scrollToContact}>Contact</Styledpnav>
          </StyledpContainer>
        </NavigationDiv>

        <OpenHoursDiv>
          <Title>Open Hours</Title>
          <StyledpContainer>
            <Styledp>Sunday - Friday</Styledp>
            <Styledp> 08:AM - 07:PM</Styledp>
          </StyledpContainer>
        </OpenHoursDiv>

        <FindUsAndDirection>
          <Title>Find us Online</Title>
          <StyledpContainer>
            <Styledp>3rd floor, Annapurna Arcade, Durbarmarg</Styledp>
            <Styledp>Phone: +9779803676401</Styledp>
          </StyledpContainer>

          <IconsContainer>
            <a href="https://www.google.com/">
              <StyledFaFacebook />
            </a>
            <a href="https://www.google.com/">
              <StyledFaInstagram />
            </a>
          </IconsContainer>
          <StyledTitle>
            <StyledA target = 'blank' href="https://www.google.com/maps/place/Pawan+Pharmacy/@27.7278037,85.3326779,17z/data=!3m1!4b1!4m5!3m4!1s0x39eb19c5775d73b3:0x9943cbbdf1279646!8m2!3d27.7278037!4d85.3348666">
              Get Directions
            </StyledA>
          </StyledTitle>
        </FindUsAndDirection>
      </FooterContainer>
      <Copyright> &copy; 2021 All rights reserved</Copyright>
    </FullWidthFooterContainer>
  );
};

export default Footer;
