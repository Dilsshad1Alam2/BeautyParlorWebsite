import React from "react";
import styled from "styled-components";

const ReadytoBookCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
  width: 600px;
  flex-direction: column;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  background: #ffffff;
  color: #363636;
  margin-right: 50px;
  margin-bottom: 100px;

  @media screen and (max-width: 500px) {
    height: 400px;
    width: 95%;
    margin: 10px;
    margin-bottom:10px;
  }
`;

const ReadytoBookText = styled.div`
  font-family: "montserrat", sans-serif;
  font-size: 50px;
  font-weight: 700;

  @media screen and (max-width: 500px) {
    font-size: 35px;
  font-weight: 700;
  }
`;

const NumberContainer = styled.div`
  margin-top: 100px;
  line-height: 400%;

  @media screen and (max-width: 500px) {
margin-top:35px;
  }  
`;

const StyledP = styled.p`
  font-family: "montserrat", sans-serif;
  font-size: 40px;
  font-weight: 600;
  margin: 0;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 35px;
  font-weight: 500;
  } 

`;

const StyledPColor = styled.p`
  font-family: "montserrat", sans-serif;
  font-size: 40px;
  font-weight: 600;
  color: #c41d54;
  margin: 0;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 30px;;
  } 

`;

const ReadytoBookCard = () => {
  return (
    <ReadytoBookCardContainer>
      <ReadytoBookText>READY TO BOOK ?</ReadytoBookText>

      <NumberContainer>
        <StyledP>Give us a call:</StyledP>
        <StyledPColor>+977 9803675401</StyledPColor>
        <StyledPColor>+977 9835662812</StyledPColor>
      </NumberContainer>
    </ReadytoBookCardContainer>
  );
};

export default ReadytoBookCard;
