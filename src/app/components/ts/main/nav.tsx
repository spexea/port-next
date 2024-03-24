"use client"; // Uso del cliente
import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { NavigationHome, NavigationBack } from "../modules/icons";
import { Sidebar } from "../modules/side-bar";

// Componente funcional para la navegación en versiones móviles
export const Navigation = () => {
  const router = useRouter();

  // Función para retroceder en la historia del navegador
  function goBack() {
    router.back();
  }

  // Obtenemos la ruta actual de la página
  const pathname = usePathname();
  // Obtenemos los parámetros de búsqueda de la URL actual
  const searchParams = useSearchParams();
  // Combinamos la ruta y los parámetros de búsqueda para obtener la URL completa
  const url = `${pathname}${searchParams}`;

  return (
    <div className="md:hidden lg:hidden">
      <meta content="fit=cover" />
      {/* Barra de navegación lateral */}
      <div className="btm-nav">
        <div className="">
          {/* Barra lateral */}
          <Sidebar />
        </div>
        {/* Enlace a la página de inicio */}
        <Link href="/">
          <button type="submit" className={`z-0 ${"/" == url ? "active" : ""}`}>
            <NavigationHome />
          </button>
        </Link>
        {/* Botón para retroceder */}
        <button onClick={goBack} type="submit">
          <NavigationBack />
        </button>
      </div>
    </div>
  );
};
