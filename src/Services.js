import React from "react";
import styled from "styled-components";
import Title from "./components/Title";
import ServiceCard from "./components/ServicesCard";
import mascara from "./assets/servicelogos/mascara.svg";
import makeup from "./assets/servicelogos/makeup.svg";
import nailpolish from "./assets/servicelogos/nailpolish.svg";
import skincare from "./assets/servicelogos/skincare.svg";
import cleansing from "./assets/servicelogos/cleansing.svg";
import kit from "./assets/servicelogos/kit.svg";


//This is the container
const ServicesContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
`;

const Services = () => {
  return (
    <ServicesContainer>
      <Title title="Services We Provide" />

      <CardContainer>
        <ServiceCard
          src={mascara}
          cardTitle="Mascara"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacini"
        />
        <ServiceCard
          src={makeup}
          cardTitle="Makup"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacini"
        />
        <ServiceCard
          src={nailpolish}
          cardTitle="Nail Polish"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacini"
        />
        <ServiceCard
          src={skincare}
          cardTitle="Skin Care"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacini"
        />
        <ServiceCard
          src={cleansing}
          cardTitle="Cleansing"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacini"
        />
        <ServiceCard
          src={kit}
          cardTitle="Bridal"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacini"
        />
      </CardContainer>
    </ServicesContainer>
  );
};

export default Services;
