"use client"; // Uso del cliente
import React from "react";

// Componente funcional principal
export const Main = () => {
  return (
    <div className="">
      {/* Sección principal */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contenido de la izquierda */}
            <div>
              <h1 className="text-4xl font-bold k sm:text-6xl lg:text-7xl">
                Colabora de forma remota o en la oficina con
                {/* Subtítulo con efecto de subrayado */}
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-secondary-content"></span>
                  <h1 className="relative text-4xl font-bold  sm:text-6xl lg:text-7xl text-primary-focus">
                    Jesus Casilla.
                  </h1>
                </div>
              </h1>

              {/* Descripción */}
              <p className="mt-8 text-base  sm:text-xl">
                Desarrollador FrontEnd Junior.
              </p>

              {/* Botón */}
              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="/proyectos"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold  transition-all duration-200  bg-secondary hover:bg-secondary-focus"
                  role="button"
                >
                  {" "}
                  Comienza a explorar{" "}
                </a>
              </div>
            </div>

            {/* Imagen */}
            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
