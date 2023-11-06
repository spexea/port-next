import React from "react";
import Navbar from "@/app/components/ts/main/navbar";
import { Navigation } from "@/app/components/ts/main/nav";

const About = () => {
  return (
    <>
      <Navbar />
      <main className=" flex min-h-screen w-full items-center">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold">¡Hola, soy Jesus Casilla!</h1>
          <p className="text-lg ">
            Como un apasionado programador Front-End, me encanta experimentar y
            crear experiencias que sean del agrado de los usuarios.
          </p>
          <article className="mt-4 text-lg ">
            Explorar el arte de combinar diseño y desarrollo me motiva
            constantemente a aprender nuevas tecnologías y prácticas
            recomendadas. Siendo un amante de la estética y la funcionalidad,
            siempre busco optimizar la experiencia del usuario y mejorar mis
            habilidades para crear interfaces modernas y atractivas.
          </article>
        </div>
        <Navigation />
      </main>
    </>
  );
};

export default About;