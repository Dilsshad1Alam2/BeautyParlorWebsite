import React from "react";
import styled from "styled-components";
import CarouselCard from "./components/CarouselCard";
import Title from "./components/Title";

import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from "react-responsive";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselContainer = styled.div`
  max-width: 1200px;
  overflow: hidden;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px auto 40px auto;
`;

const TwoCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCarousel = styled(Carousel)`
  .carousel .control-dots .dot {
    background: #E03E3E;
    height: 12px;
    width: 12px;
    box-shadow: 1px 1px 2px rgb(0 0 0 / 90%);
  }

  .slide {
    background: none;
  }

  .carousel .control-dots {
    margin: 0;
    bottom: -3px;
  }
`;

const TestDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width:500px)"} && {query:"(max-width:800px)"});
  return (
    <>
      {isMobile ? (
        <CarouselContainer>
          <Title title="What They Say About Us" />
          <div className="carousel-wrapper">
            <StyledCarousel showThumbs={false}>
              <TestDiv>
                <CarouselCard
                  description="“Your services are great, I appreciate the service provided by the staffs and I will visit again.”"
                  author="Usha Magar"
                />
              </TestDiv>

              <TestDiv>
                <CarouselCard
                  description="“I have been a regular client at Nuri Beauty for more than five years now. What I appreciate most is the professionalism of the staff, coupled with their warmth and courteousness.”"
                  author="Laxmi Magar"
                />
              </TestDiv>

              <TestDiv>
                <CarouselCard
                  description="“I have been a regular client at Nuri Beauty for more than five years now. What I appreciate most is the professionalism of the staff, coupled with their warmth and courteousness.”"
                  author="Laxmi Magar"
                />
              </TestDiv>
              <TestDiv>
                <CarouselCard
                  description="“Your services are great, I appreciate the service provided by the staffs and I will visit again.”"
                  author="Usha Magar"
                />
              </TestDiv>
            </StyledCarousel>
          </div>
        </CarouselContainer>
      ) : (
        <CarouselContainer>
          <Title title="What They Say About Us" />
          <div className="carousel-wrapper">
            <StyledCarousel showThumbs={false}>
              <TwoCardsContainer>
                <CarouselCard
                  description="“Your services are great, I appreciate the service provided by the staffs and I will visit again.”"
                  author="Usha Magar"
                />
                <CarouselCard
                  description="“I have been a regular client at Nuri Beauty for more than five years now. What I appreciate most is the professionalism of the staff, coupled with their warmth and courteousness.”"
                  author="Laxmi Magar"
                />
              </TwoCardsContainer>

              <TwoCardsContainer>
                <CarouselCard
                  description="“I have been a regular client at Nuri Beauty for more than five years now. What I appreciate most is the professionalism of the staff, coupled with their warmth and courteousness.”"
                  author="Laxmi Magar"
                />
                <CarouselCard
                  description="“Your services are great, I appreciate the service provided by the staffs and I will visit again.”"
                  author="Usha Magar"
                />
              </TwoCardsContainer>
            </StyledCarousel>
          </div>
        </CarouselContainer>
      )}
    </>
  );
};

export default CarouselPage;
