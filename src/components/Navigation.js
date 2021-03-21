import React from "react";
import styled from "styled-components";
import { scroller } from "react-scroll";



const NavigationContainer = styled.ul`
  color: #EB7E7E;
  font-size: 18px;
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  z-index: 100;

  li {
    padding: 0 30px;
    font-weight: 600;

    &::after {
      content: "";
      display: block;
      width: 0;
      height:2.5px;
      background: #EB7E7E;
      transition: width 0.3s;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

const scrollToHome = () =>{
  scroller.scrollTo('home',{smooth: true, duration :1000})
}

const scrollToServices = () =>{
  scroller.scrollTo('services',{smooth: true, duration :1000})
}

const scrollToGallery = () =>{
  scroller.scrollTo('gallery',{smooth: true, duration :1000})
}

const scrollToContact = () =>{
  scroller.scrollTo('contact',{smooth: true, duration :1000})
}


const Navigation = () => {
  return (
    <NavigationContainer>
      <li onClick = {scrollToHome} >Home</li>
      <li onClick = {scrollToServices} >Services</li>
      <li onClick = {scrollToGallery} >Gallery</li>
      <li onClick = {scrollToContact} >Contact</li>
    </NavigationContainer>
  );
};

export default Navigation;
