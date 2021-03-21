import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import ServiceTitle from "./components/Title";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Category1 from "./components/ServiceCategory1";
import Category2 from "./components/ServiceCategory2";
import Category3 from "./components/ServiceCategory3";
import Category4 from "./components/ServiceCategory4";

//This is the container
const ServicesCategoriesContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  overflow: auto;
  width: 100%;
  height: 100%;
  margin-top: 40px;
`;
const ServiceCategoriesNavBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  background: #E03E3E;
  width: 900px;
  margin: auto;
  justify-content: space-around;
  margin-bottom: 40px;

  &::before {
    content: "";
    display: block;
    background: #fff;
    height: 70px;
  }

  &::after {
    content: "";
    display: block;
    background: #E03E3E;
    height: 70px;
  }


  @media screen and (max-width: 1200px) {
    width: 85%;
    height: px;

    &::before {
      content: "";
      display: block;
      background: #fff;
      height: 70px;
    }

    &::after {
      content: "";
      display: block;
      background: #E03E3E;
      height: 70px;
    }
  }

  
  @media screen and (max-width: 800px) {
    width: 95%;
    height: px;

    &::before {
      content: "";
      display: block;
      background: #fff;
      height: 70px;
    }

    &::after {
      content: "";
      display: block;
      background: #E03E3E;
      height: 70px;
    }
  }

  @media screen and (max-width: 500px) {
    width: 95%;
    height: 55px;

    &::before {
      content: "";
      display: block;
      background: #E03E3E;
    }

    &::after {
      content: "";
      display: block;
      background: #E03E3E;
    }
  }
`;

const NavVerticalLine = styled.div`
  height: 30px;
  width: 1px;
  background: #fff;
`;

const mobileActiveStyle = {
  borderTop: "6px solid #0B2755",
};

const activestyle = {
  borderTop: "6px solid #0B2755",
};

const notactivestyle = {};

const StyledNavLink = styled(NavLink)`
  padding: 20px;
  border-top: 6px solid #E03E3E;
  border-radius: 3px;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;

  &:hover {
    border-top: 6px solid #0b2755;
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
    padding: 16px 5px 16px 5px;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 0;
    font-weight: 400;


    &:hover {
      border-top: 3px solid #0b2755;
    transition: 0.3s ease-in-out;
    }
  }
`;

const ServicesCategories = () => {
  const [selectCategory, setSelectCategory] = useState(true);

  const isMobile = useMediaQuery({ query: "(max-width:500px)" });

  const handleSelectCategory = () => {
    setSelectCategory(false);
  };

  const handleSelectCategoryreset = () => {
    setSelectCategory(true);
  };

  return (
    <ServicesCategoriesContainer>
      <ServiceTitle title="Some before and afters" />
      <Router>
        <ServiceCategoriesNavBarContainer>
          <StyledNavLink
            onClick={handleSelectCategoryreset}
            activeStyle={selectCategory ?  activestyle : notactivestyle}
            
            to="/"
          >
            Mascara
          </StyledNavLink>
          <NavVerticalLine />

          <StyledNavLink
            onClick={handleSelectCategory}
            activeStyle={ isMobile ? mobileActiveStyle : activestyle}
            to="/test2"
          >
            Menicure
          </StyledNavLink>
          <NavVerticalLine />

          <StyledNavLink
            onClick={handleSelectCategory}
            activeStyle={isMobile ? mobileActiveStyle : activestyle}
            to="/test3"
          >
            Peticure
          </StyledNavLink>
          <NavVerticalLine />

          <StyledNavLink
            onClick={handleSelectCategory}
            activeStyle={isMobile ? mobileActiveStyle : activestyle}
            to="/test4"
          >
            Nails
          </StyledNavLink>
        </ServiceCategoriesNavBarContainer>
        <Switch>
          <Route path="/" exact component={Category1} />
          <Route path="/test2" component={Category2} />
          <Route path="/test3" component={Category3} />
          <Route path="/test4" component={Category4} />
        </Switch>
      </Router>
    </ServicesCategoriesContainer>
  );
};

export default ServicesCategories;
