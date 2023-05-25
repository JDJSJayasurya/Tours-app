import React from "react";
import "./Trip.css";
const Trippdata = (props) => {
  return (
    <div className="t-card">
      <div className="t-img">
        <img src={props.image} alt="image"></img>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default Trippdata;
