import React, { useState, useEffect, useRef } from "react";
import useTheme from "../../ts/modules/Local_storage";

// Componente para cambiar entre temas claro y oscuro
export default function ThemeSwitcher() {
  // Obtener el tema actual y la función para cambiarlo desde el hook useTheme
  const [themeUser, setThemeUser] = useTheme("light");
  // Estado para almacenar si el tema actual es oscuro
  const [isDarkTheme, setIsDarkTheme] = useState(themeUser);
  // Referencia para el input de tipo checkbox
  const toggleRef = useRef(null);

  // Esta función se ejecuta solo una vez al montar el componente
  useEffect(() => {
    // Lee el tema del almacenamiento local
    const theme = localStorage.getItem("theme");
    // Si hay un tema guardado, actualiza el estado y el atributo del DOM
    if (theme) {
      setIsDarkTheme(theme === "dark");
      document.documentElement.setAttribute("data-theme", theme);
    }
    // Actualiza el atributo indeterminado del input si el tema no es ni claro ni oscuro
    if (toggleRef.current !== "dark" && toggleRef.current !== "light") {
      toggleRef.current.indeterminate = true;
    }
  }, []); // El array vacío indica que no hay dependencias para este efecto

  // Función para manejar el cambio de estado del input
  const handleInputChange = () => {
    // Cambia el estado del tema claro al oscuro o viceversa
    setIsDarkTheme(!isDarkTheme);
    // Cambia el tema usando setThemeUser
    setThemeUser(isDarkTheme ? "light" : "dark");
    // Actualiza el atributo del DOM para reflejar el cambio de tema
    document.documentElement.setAttribute(
      "data-theme",
      isDarkTheme ? "light" : "dark"
    );
  };

  return (
    <div className="flex">
      {/* Input de tipo checkbox para cambiar entre temas */}
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
