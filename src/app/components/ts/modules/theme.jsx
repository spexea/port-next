"use client";
import React, { useState, useEffect, useRef } from "react";
import useTheme from "./Local_storage";
export default function ThemeSwitcher() {
  const [themeUser, setThemeUser] = useTheme("light");
  const [isDarkTheme, setIsDarkTheme] = useState(themeUser);
  const toggleRef = useRef(null);

  // Esta función se ejecuta solo una vez al montar el componente
  useEffect(() => {
    // Lee el tema del almacenamiento local
    const theme = localStorage.getItem("theme");
    // Si hay un tema guardado, actualiza el estado y el atributo del DOM
    if (theme) {
      setIsDarkTheme(theme === "light");
      document.documentElement.setAttribute("data-theme", theme);
    }
    if (toggleRef.current !== "dark" && toggleRef.current !== "light") {
      // Código a ejecutar si toggleRef.current no es ni 'dark' ni 'light'

      toggleRef.current.indeterminate = true;
    }
  }, []); // El array vacío indica que no hay dependencias para este efecto

  const handleInputChange = () => {
    setIsDarkTheme(!isDarkTheme);
    // Cambia el tema usando setThemeUser
    setThemeUser(isDarkTheme ? "light" : "dark");
    // Actualiza el estado
    document.documentElement.setAttribute(
      "data-theme",
      isDarkTheme ? "dark" : "light",
    );
  };
  return (
    <div className="flex">
      <input
        type="checkbox"
        className="toggle toggle-info"
        checked={isDarkTheme}
        onChange={handleInputChange}
        id="my-toggle"
        ref={toggleRef}
      />
    </div>
  );
}
