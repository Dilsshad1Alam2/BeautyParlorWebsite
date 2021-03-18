import React from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const FullWidthFooterContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #c41d54;
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
`;

const Styledp = styled.p`
  font-size: 16px;
  letter-spacing: 1px;
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
  background: #c41d54;
  font-size: 14px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FullWidthFooterContainer>
      <FooterContainer>
        <NavigationDiv>
          <Title>Navigate</Title>
          <StyledpContainer>
            <Styledp>Home</Styledp>
            <Styledp>Services</Styledp>
            <Styledp>Gallery</Styledp>
            <Styledp>Contact</Styledp>
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
            <a href="">
              <StyledFaFacebook />
            </a>
            <a href="">
              <StyledFaInstagram />
            </a>
          </IconsContainer>
          <StyledTitle>Get Directions</StyledTitle>
        </FindUsAndDirection>
      </FooterContainer>
      <Copyright> &copy; 2021 All rights reserved</Copyright>
    </FullWidthFooterContainer>
  );
};

export default Footer;
