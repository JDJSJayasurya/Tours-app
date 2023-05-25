import React from "react";
import "./Trip.css";
import Trippdata from "./Trippdata";
import Trip1 from "../assets/kodaikanal-tamil-nadu.jpg";
import Trip2 from "../assets/england.jpg";
import Trip3 from "../assets/images.jpg";

const Trip = () => {
  return (
    <div>
      <div className="trip">
        <h1> Recent Trips</h1>
        <p>You can discover unique destination using google maps.</p>
        <div className="tripcard"></div>
        <Trippdata
          image={Trip1}
          heading="Trip to Indonesia"
          text="Indonesia is a kaleidoscope of taste, sight, sound, and smells bottled up in the world's largest archipelago. Spread out over a mind-boggling 17,000 islands, the country offers a vast melange of experiences begging to be sampled by visitors from across the world. Ranging from the smouldering volcanoes of central Java to the verdant expanses of Bali's rice terraces, from Jakarta's sprawling luxury malls to the untouched marine"
        ></Trippdata>
        <Trippdata
          image={Trip2}
          heading="Trip to England"
          text="One of the most popular countries in the world, England is located in Europe. It is also the dream destination for a lot of people for its beauty and grandeur. With a great history behind it, it has a rich heritage and culture. The English countryside is one of the most peaceful places in the country. The most famous historical sites include the old castles on the countryside, Roman sites and the royal palaces. Each city in the country has its own charm."
        ></Trippdata>
        <Trippdata
          image={Trip3}
          heading="Trip to India"
          text="India is a country that attracts millions of tourists every year and is considered one of the most popular tourist destinations in the world. These visitors are attracted to its natural beauty and cultural heritage. It has many historic sites as well like the Taj Mahal, Golden Temple, "
        ></Trippdata>
      </div>
    </div>
  );
};

export default Trip;
