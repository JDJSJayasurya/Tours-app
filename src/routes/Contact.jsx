import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/about2.jpg";
import Footer from "../components/Footer";
import contactform from "../components/contactform";
const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero
        cName="heroabout"
        title="Contact"
        heroImg={AboutImg}
        button="hide"
      ></Hero>
      <contactform></contactform>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
