"use client"; // Uso del cliente
import { useEffect, useState } from "react";

// Hook personalizado para manejar el tema
export default function useTheme(initialTheme = "light") {
  const isBrowser = typeof window !== "undefined";

  // Estado para almacenar el tema del usuario
  const [themeUser, setThemeUser] = useState(() => {
    if (isBrowser) {
      // Obtener el tema almacenado en el almacenamiento local del navegador
      const savedTheme = localStorage.getItem("theme");
      return savedTheme || initialTheme; // Devuelve el tema almacenado o el tema inicial si no hay ninguno almacenado
    } else {
      return initialTheme; // Devuelve el tema inicial si no se está ejecutando en el navegador
    }
  });

  // Efecto para actualizar el tema en el almacenamiento local y en el cuerpo del documento
  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem("theme", themeUser); // Almacena el tema en el almacenamiento local del navegador
      document.body.setAttribute("data-theme", themeUser); // Establece el tema en el cuerpo del documento
    }
  }, [themeUser]); // Se ejecuta cada vez que el tema del usuario cambia

  return [themeUser, setThemeUser, isBrowser]; // Devuelve el tema del usuario, la función para establecer el tema y un indicador booleano que indica si se está ejecutando en el navegador
}
