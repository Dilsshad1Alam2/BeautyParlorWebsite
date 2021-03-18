import React from 'react'
import styled from 'styled-components';

const TitleContainer = styled.p`
font-size:45px;
font-family: 'montserrat', serif;
width: 100%;
padding: 0;
text-align: center;
font-weight: 600;
color: #363636;

@media screen and (max-width: 500px) {
    font-size:35px;
  }
`;





const Title = ({title}) => {
    return (
<TitleContainer>{title}</TitleContainer>

    )
}

export default Title
