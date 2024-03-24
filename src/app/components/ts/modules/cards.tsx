import React from "react";
import Card from "./cards_data"; // Importa el componente de tarjeta desde el archivo "cards_data"
import Ti1 from "../../data/image.png"; // Importa la imagen desde un directorio específico

// Arreglo de datos para las tarjetas
const cardsData = [
  {
    imageSrc: Ti1.src, // Fuente de la imagen
    title: "Card 1", // Título de la tarjeta
    content: "Ejemplos de un card con imagen y texto.", // Contenido de la tarjeta
    width: Ti1.width, // Ancho de la imagen
    height: Ti1.height, // Alto de la imagen
  },
  {
    imageSrc: Ti1.src,
    title: "Card 2",
    content: "Ejemplos de un card con imagen y texto.",
    width: Ti1.width,
    height: Ti1.height,
  },
  {
    imageSrc: Ti1.src,
    title: "Card 3",
    content: "Ejemplos de un card con imagen y texto.",
    width: Ti1.width,
    height: Ti1.height,
  },
];

// Componente de React para renderizar las tarjetas
export default function Cards() {
  return (
    <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Mapea los datos de las tarjetas y renderiza el componente Card con cada uno */}
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
