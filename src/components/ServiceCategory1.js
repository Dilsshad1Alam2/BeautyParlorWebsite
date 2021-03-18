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


const Category1 = () => {
  return <CategoryContainer>
    <ReusableServiceCategory src1 = {FirstImage} src2 = {SecondImage} src3 = {ThirdImage} src4 = {FourthImage}/>
  </CategoryContainer>;
};

export default Category1;
