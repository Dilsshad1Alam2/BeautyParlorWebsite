import React from "react";
import styled from "styled-components";
import ReusableServiceCategory from './ReusableServiceCategory';

import FirstImage from '../assets/galleryImages/1.png';
import SecondImage from "../assets/galleryImages/2.png";
import ThirdImage from "../assets/galleryImages/3.png";
import FourthImage from "../assets/galleryImages/4.png";

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Category2 = () => {
  return <CategoryContainer>
    <ReusableServiceCategory src1 = {FourthImage} src2 = {ThirdImage} src3 = {SecondImage} src4 = {FirstImage}/>
  </CategoryContainer>;
};

export default Category2;
