import React from "react";
import Card from "./cards_data";
import Ti1 from "@/app/components/data/Tiara1.jpg";
import Ti2 from "@/app/components/data/Tiara2.jpg";

const cardsData = [
  {
    imageSrc: Ti1.src,
    title: "Card 1",
    content: "Lorem ipsum dolor sit amt, consectetur adipisicing elit.",
    width: Ti1.width,
    height: Ti1.height,
  },
  {
    imageSrc: Ti2.src,
    title: "Card 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    width: Ti2.width,
    height: Ti2.height,
  },
  {
    imageSrc: Ti1.src,
    title: "Card 1",
    content: "Lorem ipsum dolor sit amt, consectetur adipisicing elit.",
    width: Ti1.width,
    height: Ti1.height,
  },
  {
    imageSrc: Ti2.src,
    title: "Card 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    width: Ti2.width,
    height: Ti2.height,
  },
  {
    imageSrc: Ti1.src,
    title: "Card 1",
    content: "Lorem ipsum dolor sit amt, consectetur adipisicing elit.",
    width: Ti1.width,
    height: Ti1.height,
  },
  {
    imageSrc: Ti2.src,
    title: "Card 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    width: Ti2.width,
    height: Ti2.height,
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
