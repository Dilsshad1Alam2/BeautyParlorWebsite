import React from 'react'
import styled from 'styled-components'


const ButtonContainer = styled.button`
height: 51px;
width: 182px;
border-radius: 5px;
font-size: 17px;
outline: none;
border: none;
background: linear-gradient(90deg, #FF78BA 9.03%, #FF76B9 17.56%, #FF5AAB 32.65%, #FF3A9B 48.94%, #FF2B93 67.2%, #FF1588 83.92%, #FF0982 95.98%, #FF007D 99.18%);
color: #fff;
font-family: "Montserrat", serif;
font-weight: 500;
letter-spacing:0.5px;
z-index: 70;

&:hover{
background: transparent;    
color:#FF007D;
border: 2px solid #FF007D;
cursor: pointer;
font-weight: 600;
}

`

const Button = ({ ButtonContent }) => {
    return (
<ButtonContainer>
{ ButtonContent }
</ButtonContainer>
    )
}

export default Button
