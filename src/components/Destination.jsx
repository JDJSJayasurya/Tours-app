import React from "react";
import Mountain1 from "../assets/download.jpg";
import Mountain2 from "../assets/about3.jpg";
import Mountain3 from "../assets/pexels-oleksandr-pidvalnyi-2166553.jpg";
import "./Destination.css";
import Destinationdata from "./Destinationdata";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you a oppurtunity to explore</p>
      <Destinationdata
        className="first"
        heading="Taal Valcano, Bangaras"
        text=" Taal Lake, lake in southwestern Luzon, Philippines, occupying a
                volcanic crater with a maximum width of 15 miles (24 km), at
                less than 10 feet (3 metres) above sea level. It has an area of
                94 square miles (244 square km) and is the country’s third
                largest lake. Within the lake rises Volcano Island (984 feet
                [300 metres]), which itself contains another small crater
                (Yellow Lake). Volcano Island, called Taal Volcano, has erupted
                more than 34 times since 1572, most recently in 2020."
      ></Destinationdata>
      <Destinationdata
        className="first-reverse"
        heading="Mt.Daguldul,Bantagas"
        text=" Mount Daguldol is within the vicinity of the town of San Juan in Batangas. Normally it will take you around 3 hours to reach the jump off point Barrio Hugom by private vehicle.The site has been a favorite trekking location of mountaineers. Although quite new to other hikers, it was discovered by the University of the Philippines Mountaineers in the 1990’s.The trail is man made by the locals of San Juan, Batangas and was worked out to be trekking destination.
        The local government of San Juan organized the Hugom Environmental Guides Association (HEGA) to take care of the place"
      ></Destinationdata>
    </div>
  );
};

export default Destination;
