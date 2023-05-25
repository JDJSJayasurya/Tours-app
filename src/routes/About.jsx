import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/about.jpg";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";
const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero
        cName="heroabout"
        heroImg={AboutImg}
        title="ABOUT"
        button="hide"
      ></Hero>
      <Aboutus></Aboutus>
      <Footer></Footer>
    </div>
  );
};

export default About;
