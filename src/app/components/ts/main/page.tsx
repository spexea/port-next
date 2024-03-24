"use client"; // Uso del cliente
import Navbar from "./navbar"; // Importa el componente Navbar
import { Navigation } from "./nav"; // Importa el componente Navigation
import { Main } from "../modules/main"; // Importa el componente Main

// Componente para la página principal
export default function Page() {
  return (
    <>
      {/* Renderiza el componente Navbar */}
      <Navbar />
      {/* Renderiza el componente Main */}
      <Main />
      {/* Renderiza el componente Navigation */}
      <Navigation />
    </>
  );
}
