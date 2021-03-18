import React from "react";
import styled from "styled-components";

const ServiceCardContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px 30px;
  align-items: center;
`;

const FancyDiv = styled.div`
  width: 40px;
  height: 3px;
  background: #c41d54;
`;

const ServiceTitle = styled.p`
  font-size: 25px;
  font-family: "montserrat", serif;
  width: 100%;
  padding: 0;
  text-align: center;
  font-weight: 500;
  color: #363636;
  margin: 10px;
`;

const ServiceDetail = styled.p`
  font-family: "montserrat", serif;
  font-size: 16px;
  color: rgba(110, 107, 107);
;
  line-height: 150%;
  letter-spacing: 1.5px;
  text-align: center;
  height: 100px;
  font-weight: 500;
`;

const CardImg = styled.img`
margin: 0 0 10px 0;
`;

const ServicesCard = ({ src, cardTitle, description }) => {
  return (
    <ServiceCardContainer>
      <CardImg src={src} />
      <ServiceTitle> {cardTitle} </ServiceTitle>
      <FancyDiv />
      <ServiceDetail>{description}</ServiceDetail>
    </ServiceCardContainer>
  );
};

export default ServicesCard;
