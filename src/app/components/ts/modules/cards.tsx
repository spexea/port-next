import React from "react";
import Card from "./cards_data";
import laptop from "../../data/image.png";

const cardsData = [
  {
    imageSrc: laptop.src,
    title: "Card 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    width: laptop.width,
    height: laptop.height,
  },
];

export default function Cards() {
  return (
    <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
