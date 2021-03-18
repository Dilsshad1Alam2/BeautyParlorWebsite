import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import Button from "./components/Button";
import { HomePageData } from './data/data'

import BackgroundImg from "./assets/backgroundImg.svg";
import BackgroundSv2 from "./assets/backgroundsvg3.svg";
import Dots from "./assets/dots.svg";

//For Page Background and container

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fcf8f7;
  position: relative;
`;

const HomepageContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  overflow: auto;
  height: 100%;
`;

//For header Logo and Nav

const HeaderContainer = styled.div`
  display: grid;
  height: 80px;
  grid-template-columns: 1fr 11fr;
  align-items: center;
  justify-content: center;
`;

const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

//For BackgroundImage

const BackgroundImage = styled.img`
  height: 700px;
  width: auto;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
`;

const BackgroundSvgContainer = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 75px;
  height: 90vh;
`;

//COntainer for MainText to center

const MainTextContainer = styled.div`
  display: grid;
  align-items: center;
  height: 600px;
  width: 100%;
  grid-template-columns: 1fr 4fr 6fr;
`;

const MainText = styled.div`
  max-width: 400px;
  overflow: hidden;
  grid-column: 2;
  grid-row: 1;
`;

const MainFont = styled.p`
  font-size: 70px;
  font-weight: 900;
  color: #363636;
  font-family: "Playfair Display", serif;
  margin: 0;
  line-height: 125%;
  letter-spacing: 3px;
`;

const SmallFont = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #363636;
  font-family: "Montserrat", serif;
  margin: 0;
  padding: 18px 0;
  letter-spacing: 0.5px;
`;

//For Button Container

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

//For Empty Filler (Dots)

const DotsImage = styled.img`
  position: absolute;
  bottom: 0;
`;

const Homepage = () => {


  return (
    <BackgroundContainer>
      <HomepageContainer>
        <HeaderContainer>
          <Logo />
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </HeaderContainer>
        <BackgroundImage src={BackgroundImg} alt="Not Loaded" />
        <BackgroundSvgContainer src={BackgroundSv2} alt="Not Loaded" />

        <MainTextContainer>
          <MainText>
            <MainFont>{HomePageData.mainFont}</MainFont>
            <SmallFont>{HomePageData.smallFont}</SmallFont>
            <ButtonContainer>
              <Button ButtonContent="Call Now" />
              <Button ButtonContent="Services" />
            </ButtonContainer>
          </MainText>
        </MainTextContainer>

        <DotsImage src={Dots} alt="Not Loaded" />
      </HomepageContainer>
    </BackgroundContainer>
  );
};

export default Homepage;
