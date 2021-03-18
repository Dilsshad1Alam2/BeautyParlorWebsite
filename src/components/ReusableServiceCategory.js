import React from "react";
import styled from "styled-components";

const ReusableServiceCategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const BeforeAfterDiv = styled.div`

@media screen and (max-width: 500px) {
  background: #fcf2f0;
  margin-bottom: 50px;
  }

`

const ImageDiv = styled.div`
  width: 575px;
  height: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 100px 10px;

  @media screen and (max-width: 500px) {
  width: 360px;
  height: 360px;
  margin:10px;
  }

`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

const ImageDesc = styled.p`
margin: 30px;
padding: 0;
font-size: 30px;
font-weight: 500;
color: #363636;
`

const ReusableServiceCategory = ({ src1, src2, src3, src4 }) => {
  return (
    <ReusableServiceCategoryContainer>
      <BeforeAfterDiv>
      <ImageDiv>
        <Image src={src1} />
        <ImageDesc>Before</ImageDesc>
      </ImageDiv>
      <ImageDiv>
        <Image src={src2} />
        <ImageDesc>After</ImageDesc>
      </ImageDiv>
      </BeforeAfterDiv>

      <BeforeAfterDiv>
      <ImageDiv>
        <Image src={src3} />
        <ImageDesc>Before</ImageDesc>
      </ImageDiv>
      <ImageDiv>
        <Image src={src4} />
        <ImageDesc>After</ImageDesc>
      </ImageDiv>
      </BeforeAfterDiv>

    </ReusableServiceCategoryContainer>


  );
};

export default ReusableServiceCategory;
