import React from "react";
import styled from "styled-components";
import { FaQuoteLeft } from "react-icons/fa";

const CardContainer = styled.div`
  height: 400px;
  width: 400px;
  display: flex;

  align-items: center;
  flex-direction: column;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
  margin: 30px;
  background: #fcf8f7;
  border-radius: 10px;

  @media screen and (max-width: 500px) {
    height: 340px;
  width: 340px;
  }
`;

const QuoteContainer = styled.div`
height: 100px;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 500px) {
  height: 80px;
  }
`

const StyledQuote = styled(FaQuoteLeft)`
  font-size: 30px;
  color: #c41d54;

  @media screen and (max-width: 500px) {
  }
`;

const Description = styled.p`
  max-width: 340px;
  min-height: 160px;
  text-align: center;
  font-size: 18px;
  color: #434242;
  letter-spacing: 0.8px;
  line-height: 135%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    font-size: 15px;
    max-width: 305px;
  }
`;

const AuthorName = styled.p`
  font-size: 16px;
  color: #000;
  font-weight: 500;

  @media screen and (max-width: 500px) {
  }
`;

const CarouselCard = ({ description, author }) => {
  return (
    <CardContainer>
      <QuoteContainer>
        <StyledQuote />
      </QuoteContainer>

      <Description>{description}</Description>
      <AuthorName>{author}</AuthorName>
    </CardContainer>
  );
};

export default CarouselCard;
