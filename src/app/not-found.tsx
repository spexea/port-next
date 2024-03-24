"use client"; // Uso del cliente
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Componente para la página de error 404
export default function Notfound() {
  return (
    <div>
      {/* Contenedor principal */}
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          {/* Título */}
          <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
          {/* Mensaje */}
          <p className="mb-4 text-lg text-gray-600">
            ¡Ups! Parece que estás perdido.
          </p>
          {/* Animación de rebote */}
          <div className="animate-bounce">
            <svg
              className="mx-auto h-16 w-16 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </div>
          {/* Mensaje de redirección */}
          <p className="mt-4 text-gray-600 flex">
            Vamos a llevarte de vuelta&nbsp;
            {/* Enlace a la página de inicio */}
            <motion.div whileHover={{ scale: 1.3 }}>
              <motion.div>
                <Link href="/" className="text-blue-500">
                  {" "}
                  a casa
                </Link>
              </motion.div>
            </motion.div>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
