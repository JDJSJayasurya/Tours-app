import "./Destination.css";
import Mountain1 from "../assets/download.jpg";
import Mountain2 from "../assets/about3.jpg";
import Mountain3 from "../assets/pexels-oleksandr-pidvalnyi-2166553.jpg";
import React, { Component } from "react";
class Destinationdata extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="second">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img src={Mountain2} alt="img"></img>
          <img src={Mountain1} alt="img"></img>
        </div>
      </div>
    );
  }
}
export default Destinationdata;
