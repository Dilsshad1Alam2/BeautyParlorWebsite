import React from 'react'
import styled from "styled-components";
import logosvg from '../assets/Logoproject.svg'


const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const Image = styled.img`
height: 40px;
width: 40px;
`


const Logo = () => {
    return (
        <LogoContainer>
            <Image src = {logosvg} alt="" />
        </LogoContainer>
    )
}

export default Logo
