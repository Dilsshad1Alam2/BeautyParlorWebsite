import React from "react";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import Button from "./components/Button";
import { HomePageData } from "./data/data";
import { Element,scroller } from "react-scroll";

import BgImage from "./assets/bg2.png";
import Dots from "./assets/dots.svg";
import FillerShape from "./assets/polygon.svg";

//For Page Background and container

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fcf8f7;
  position: relative;
`;

const HomepageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: auto;
  height: 100%;
  position: relative;
`;

//For header Logo and Nav

const HeaderContainer = styled.div`
  display: grid;
  height: 60px;
  grid-template-columns: 1fr 11fr;
  align-items: center;
  justify-content: center;
`;

//Logo Text

const Logo = styled.p`
  font-size: 40px;
  font-weight: 700;
  font-family: "Advent Pro", sans-serif;
  color: #ff7474;
  text-align: center;
  padding: 0;
  margin: 10px 0;
  line-height: 90%;

  &:hover{
    cursor: pointer;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

//For BackgroundImage
const BackgroundImage = styled.img`
  height: 90vh;
  width: auto;
  max-width: 100%;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  z-index: 2;
  overflow: hidden;
`;

const MainCircularDiv = styled.div`
  height: 350px;
  width: 350px;
  background: rgba(248, 224, 212, 0.4);
  border-radius: 50%;
  position: absolute;
  bottom: 28%;
  left: 8%;
  /* bottom: 400px;
  left: 200px; */
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SecondaryCircularDiv = styled.div`
  height: 250px;
  width: 250px;
  background: rgba(248, 224, 212, 0.4);
  border-radius: 50%;
  position: absolute;
  bottom: 19%;
  right: 15%;
  /* bottom: 400px;
  left: 200px; */
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DotsContainer = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const FillerContainer = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

const SecondaryButton = styled.button`
  background: none;
  border: none;
  color: #ff8181;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 1px;
  border-bottom: 1px solid #ff8181;
`;

const MainTitle = styled.p`
  color: #ff8181;
  font-size: 35px;
  font-weight: 700;
  opacity: 100%;
  max-width: 135px;
  margin: 0;
  text-align: center;
`;

const Description = styled.p`
  color: #ff8181;
  opacity: 75%;
  font-size: 16px;
  max-width: 300px;
  text-align: center;
`;

const SecondaryDescription = styled.div`
  color: #ff8181;
  font-size: 16px;
  max-width: 178px;
  text-align: center;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

//For Empty Filler (Dots)

const scrollToContact = () =>{
  scroller.scrollTo('contact',{smooth: true, duration :1000})
}


const scrollToHome = () =>{
  scroller.scrollTo('home',{smooth: true, duration :1000})
}

const Homepage = () => {
  return (
    <Element name = 'home'>
      <BackgroundContainer>
        <HomepageContainer>
          <HeaderContainer>
            <Logo onClick = {scrollToHome} >Nuri Beauty</Logo>
            <NavigationContainer>
              <Navigation />
            </NavigationContainer>
          </HeaderContainer>

          <BackgroundImage src={BgImage} alt="Not Loaded" />

          <MainCircularDiv>
            <MainTitle>{HomePageData.mainFont}</MainTitle>
            <Description>{HomePageData.smallFont}</Description>
            <ButtonContainer>
              <Button onClick = {scrollToContact}>Enquire Now</Button>
            </ButtonContainer>
          </MainCircularDiv>

          <SecondaryCircularDiv>
            <SecondaryDescription>
              {HomePageData.secondaryDescription}
            </SecondaryDescription>
            <ButtonContainer>
              <SecondaryButton>View Services</SecondaryButton>
            </ButtonContainer>
          </SecondaryCircularDiv>

          <DotsContainer src={Dots} />
        </HomepageContainer>
        <FillerContainer src={FillerShape} />
      </BackgroundContainer>
    </Element>
  );
};

export default Homepage;
