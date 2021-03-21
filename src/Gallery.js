import React from "react";
import Title from "./components/Title";
import styled from "styled-components";
import { Element } from "react-scroll";

import FirstImage from "./assets/galleryImages/1.png";
import SecondImage from "./assets/galleryImages/2.png";
import ThirdImage from "./assets/galleryImages/3.png";
import FourthImage from "./assets/galleryImages/4.png";
import FifthImage from "./assets/galleryImages/5.png";
import SixthImage from "./assets/galleryImages/6.png";

const GalleryContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  overflow: auto;
`;

const PhotosDivContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const GalleryImagesContainer = styled.div`
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    margin: 0px 15px 15px 15px;
  }

  @media screen and (max-width: 800px) {
    margin: 0px 15px 15px 15px;
  }

  @media screen and (max-width: 500px) {
    margin: 0px 15px 15px 15px;
  }
`;

const GalleryImages = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

const VieMoreContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

const ViewMore = styled.p`
  color: #c41d54;
  font-size: 16px;
  font-weight: 600;
  margin: 30px;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0;
    margin-top: 5px;
    height: 2.5px;
    background: #c41d54;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Gallery = () => {
  return (
    <Element name = 'gallery'>
      <GalleryContainer>
        <Title title="Gallery" />

        <PhotosDivContainer>
          <GalleryImagesContainer>
            <GalleryImages src={FirstImage} alt="" />
          </GalleryImagesContainer>

          <GalleryImagesContainer>
            <GalleryImages src={SecondImage} alt="" />
          </GalleryImagesContainer>

          <GalleryImagesContainer>
            <GalleryImages src={ThirdImage} alt="" />
          </GalleryImagesContainer>

          <GalleryImagesContainer>
            <GalleryImages src={FourthImage} alt="" />
          </GalleryImagesContainer>

          <GalleryImagesContainer>
            <GalleryImages src={FifthImage} alt="" />
          </GalleryImagesContainer>

          <GalleryImagesContainer>
            <GalleryImages src={SixthImage} alt="" />
          </GalleryImagesContainer>

          <GalleryImagesContainer>
            <GalleryImages src={FirstImage} alt="" />
          </GalleryImagesContainer>

          <GalleryImagesContainer>
            <GalleryImages src={SecondImage} alt="" />
          </GalleryImagesContainer>

          <GalleryImagesContainer>
            <GalleryImages src={ThirdImage} alt="" />
          </GalleryImagesContainer>
        </PhotosDivContainer>
        <VieMoreContainer>
          <ViewMore>View More Images</ViewMore>
        </VieMoreContainer>
      </GalleryContainer>
    </Element>
  );
};

export default Gallery;
