"use client"; // Uso del cliente
import React from "react";
import Navbar from "@/app/components/ts/main/navbar"; // Importa el componente Navbar
import { Navigation } from "@/app/components/ts/main/nav"; // Importa el componente Navigation
import Cards from "@/app/components/ts/modules/cards"; // Importa el componente Cards

// Componente para la página de Proyectos
export default function Project() {
  return (
    <>
      <div>
        {/* Barra de navegación */}
        <Navbar />
        {/* Contenido principal */}
        <main className="text-dark flex min-h-screen w-full items-center">
          {/* Tarjetas de proyectos */}
          <Cards />
          <div className=""></div>
          {/* Navegación */}
          <Navigation />
        </main>
      </div>
    </>
  );
}
