import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/images.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
const Service = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero
        cName="heroabout"
        heroImg={AboutImg}
        title="Service"
        button="hide"
      ></Hero>
      <Trip></Trip>
      <Footer></Footer>
    </div>
  );
};

export default Service;
