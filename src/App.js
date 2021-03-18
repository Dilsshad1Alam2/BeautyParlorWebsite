import "./App.css";
import React from "react";
import Homepage from "./Homepage";
import Services from "./Services";
import Gallery from "./Gallery";
import ServicesCategories from "./ServicesCategories";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Homepage />
      <Services />
      <Gallery />
      <ServicesCategories />
      <Carousel />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
