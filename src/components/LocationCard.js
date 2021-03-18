import React from "react";
import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const LocationAndInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 440px;
  width: 475px;
  flex-direction: column;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  background: #ffffff;
  color: #363636;
  padding: 16px;

  @media screen and (max-width: 500px) {
    height: 420px;
    width: 90%;
    margin: 10px;
  }
`;

const HorizontoalCenter = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column
  }
`;

const Title = styled.p`
  font-size: ${({ small }) => (small ? "20px" : "28px")};
  font-weight: 600;

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Location = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const PhoneNumber = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const Email = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const FindUsOnline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Styledp = styled.p`
  font-size: 15px;
  letter-spacing: 1px;
  margin: 0;
  font-weight: 500;
  padding: 16px 0;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;

const StyledHiLocationMarker = styled(HiLocationMarker)`
  font-size: 27px;
  color: #c41d54;
  padding: 0;
`;
const StyledFaPhoneAlt = styled(FaPhoneAlt)`
  font-size: 21px;
  color: #c41d54;
`;
const StyledMdEmail = styled(MdEmail)`
  font-size: 21px;
  color: #c41d54;
`;
const StyledFaFacebook = styled(FaFacebook)`
  font-size: 22px;
  color: #c41d54;
`;
const StyledFaInstagram = styled(AiFillInstagram)`
  font-size: 25px;
  color: #c41d54;
`;

const LocationCard = () => {
  return (
    <LocationAndInfoContainer>
      <HorizontoalCenter>
        <Title>Location and Contact Info</Title>

        <DetailsContainer>
          <Location>
            <StyledHiLocationMarker />
            <Styledp>3rd floor, Annapurna Arcade, Durbarmarg</Styledp>
          </Location>

          <PhoneNumber>
            <StyledFaPhoneAlt />
            <Styledp>+977 9803676401, 9816593010</Styledp>
          </PhoneNumber>

          <Email>
            <StyledMdEmail />
            <Styledp>noori.beauty1996@gmail.com</Styledp>
          </Email>
        </DetailsContainer>

        <FindUsOnline>
          <Title small>Find Us Online</Title>

          <IconsContainer>
            <a href="https://www.google.com/">
              <StyledFaFacebook />
            </a>
            <a href="https://www.google.com/">
              <StyledFaInstagram />
            </a>
          </IconsContainer>
        </FindUsOnline>
      </HorizontoalCenter>
    </LocationAndInfoContainer>
  );
};

export default LocationCard;
