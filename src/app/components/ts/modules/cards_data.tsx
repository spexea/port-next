// Card.js
import React from "react";
import Image from "next/image";

// Componente funcional de tarjeta
const Card = ({
  imageSrc, // Fuente de la imagen
  title, // Título de la tarjeta
  content, // Contenido de la tarjeta
  width, // Ancho de la imagen
  height, // Alto de la imagen
}: {
  imageSrc: string;
  title: string;
  content: string;
  width: number;
  height: number;
}) => {
  return (
    <div className="flex">
      <div className="">
        {/* Estructura de la tarjeta */}
        <div className="w-86 card card-bordered card-normal bg-base-100 shadow-xl lg:w-96">
          <figure>
            {/* Imagen */}
            <Image
              className="fill"
              src={imageSrc}
              width={width}
              height={height}
              alt="just a -test."
            />
          </figure>
          {/* Contenido de la tarjeta */}
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{content}</p>
            {/* Acciones de la tarjeta */}
            <div className="card-actions justify-end">
              <button type="submit" className="btn btn-primary">
                Revisalo!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card; // Exporta el componente de tarjeta
