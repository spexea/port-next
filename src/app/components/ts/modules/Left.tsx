"use client"; // Uso del cliente
import { Github, SunIcon, MoonIcon, Linkedin } from "./icons"; // Importa los iconos desde el archivo "icons"
import Link from "next/link"; // Importa el componente Link de Next.js
import React from "react";
import ThemeSwitcher from "../../js/modules/theme"; // Importa el componente ThemeSwitcher desde el módulo "theme"

// Componente funcional para el menú izquierdo
export default function Left() {
  return (
    <div className="hidden lg:block">
      {/* Navegación */}
      <nav className="flex">
        <div className="top-5"></div> {/* Espacio vacío */}
        {/* Iconos para cambiar el tema */}
        <SunIcon />
        <ThemeSwitcher />
        <MoonIcon />
        {/* Enlace a Github */}
        <Link
          href="https://github.com/spexea"
          target="_blank"
          aria-label="Github"
        >
          <Github className="mr-1 h-6 w-6" /> {/* Icono de Github */}
        </Link>
        {/* Enlace a Linkedin */}
        <Link
          href="https://www.linkedin.com/in/jesus-casilla-ynirio-7b1387262/"
          target="_blank"
          aria-label="Linkedin"
        >
          <Linkedin className="h-6 w-6" /> {/* Icono de Linkedin */}
        </Link>
      </nav>
    </div>
  );
}
