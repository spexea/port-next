"use client"; // Uso del cliente
import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

// Componente funcional para el menú en la versión de escritorio
export const Pc_Menu = () => {
  // Obtiene la ruta actual
  const Pathname = usePathname();
  // Obtiene los parámetros de búsqueda actuales
  const SearchParams = useSearchParams();
  // Construye la URL completa
  const Url = `${Pathname}${SearchParams}`;

  return (
    <div className="hidden-lg:block">
      <ul>
        {/* Elemento de menú para "Proyectos" */}
        <li
          className={`z-1 tab tab-lifted ${
            "/projects" == Url ? "tab-active" : "" // Marca como activo si la URL coincide con "/projects"
          }`}
        >
          <Link href="/projects">Proyectos</Link>
        </li>
        {/* Elemento de menú para "Inicio" */}
        <li className={`z-1 tab tab-lifted ${"/" == Url ? "tab-active" : ""}`}>
          <Link href="/">Inicio</Link>
        </li>
        {/* Elemento de menú para "Sobre" */}
        <li
          className={`z-1 tab tab-lifted ${
            "/about" == Url ? "tab-active" : "" // Marca como activo si la URL coincide con "/about"
          }`}
        >
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </div>
  );
};
