import React from "react";
import Feature from "../../components/features/Features";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
  },
];

const Features = () => (
  <div className="aiy__features section__padding">
    <div className="aiy__features-heading">
      <h1 className="aiy_text">Your Future is Now. Let's Make it Happen</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature
          title={item.title}
          text={item.text}
          classColor="variation"
          key={item.title + index}
        />
      ))}
    </div>
  </div>
);

export default Features;
