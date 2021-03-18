import React from "react";
import styled from "styled-components";

const NavigationContainer = styled.ul`
  color: #c41d54;
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
      background: #c41d54;
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

const Navigation = () => {
  return (
    <NavigationContainer>
      <li>Home</li>
      <li>Services</li>
      <li>Gallery</li>
      <li>Contact</li>
    </NavigationContainer>
  );
};

export default Navigation;
