import React from "react";
import styled from "styled-components";
import ReadytoBookCard from "./components/ReadytoBookCard";
import LocationCard from "./components/LocationCard";

const ContactContainer = styled.div``;

const MapContainerFullWidth = styled.div``;

const BookingSection = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: auto;
  overflow: auto;
  display: grid;
  grid-template-columns: 6fr 4fr;
  grid-template-rows: 1fr;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 6fr 4fr;
    padding: 0;
  }
`;

const GridContainer1 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 500px) {
    justify-content: center;
    align-items: center;
  }
`;
const GridContainer2 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <MapContainerFullWidth>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d882.9149797941499!2d85.33472355388348!3d27.727784626143535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c5775d73b3%3A0x9943cbbdf1279646!2sPawan%20Pharmacy!5e0!3m2!1sen!2snp!4v1615726446151!5m2!1sen!2snp"
          width="100%"
          height="450"
          allowFullScreen="yes"
          loading="lazy"
          title="googlemap"
        ></iframe>
      </MapContainerFullWidth>

      <BookingSection>
        <GridContainer1>
          <ReadytoBookCard />
        </GridContainer1>

        <GridContainer2>
          <LocationCard />
        </GridContainer2>
      </BookingSection>
    </ContactContainer>
  );
};

export default Contact;
