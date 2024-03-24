"use client"; // Uso del cliente
import React from "react";
import { Pc_Menu } from "../modules/Pc_menu"; // Importa el componente Pc_Menu
import Left from "../modules/Left"; // Importa el componente Left

// Componente para la barra de navegación
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 ">
      {/* Menú de la barra de navegación en versión de escritorio */}
      <div className="navbar-start hidden lg:block">
        <Pc_Menu />
      </div>
      {/* Centro de la barra de navegación */}
      <div className="navbar-center">
        <a
          className="btn btn-ghost normal-case text-xl"
          data-text="Portfolio"
          href="/"
        >
          {/* Texto "Portfolio" con efecto de letras */}
          <div className="letter">P</div>
          <div className="letter">O</div>
          <div className="letter">R</div>
          <div className="letter">T</div>
          <div className="letter">F</div>
          <div className="letter">O</div>
          <div className="letter">L</div>
          <div className="letter">I</div>
          <div className="letter">O</div>
        </a>
      </div>
      {/* Elementos de la barra de navegación en el extremo derecho */}
      <div className="navbar-end">
        <Left />
      </div>
    </div>
  );
}
