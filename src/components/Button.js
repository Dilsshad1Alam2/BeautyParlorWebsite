import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  width: 183px;
  height: 41px;
  outline: none;
  border: 2px solid #ff8181;
  background: #ff8181;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  border-radius: 20px;
  font-family: "montserrat", sans-serif;

  &:hover {
    cursor: pointer;
    background: transparent;
    color:#ff8181;
  }
`;

const Button = (props) => {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
};

export default Button;
