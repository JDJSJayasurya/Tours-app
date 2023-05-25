import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div className={props.cName}>
      <img className="nature" src={props.heroImg} alt="Heroimg"></img>
      <div className="text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.button}>
          {props.buttontext}
        </a>
      </div>
    </div>
  );
};

export default Hero;
