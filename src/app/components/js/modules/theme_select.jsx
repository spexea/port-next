// Importar el hook personalizado useTheme
import useTheme from "../../ts/modules/Local_storage.tsx";
import React, { useEffect } from "react";
import { BrushIcon } from "../../ts/modules/icons.tsx";

// Componente funcional para seleccionar el tema
export default function ThemeSelect() {
  // Usar una sola variable para guardar el tema actual
  const themes = ["Dark", "Light", "Synthwave", "Forest", "Luxury", "Cupcake"];
  const [theme, setTheme] = useTheme(""); // Obtener el tema actual y la función para cambiarlo desde el hook useTheme

  useEffect(() => {
    // Asignar el tema actual al atributo data-theme del elemento raíz
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]); // Volver a ejecutar el efecto cuando cambie el tema

  // Función para manejar el cambio de tema
  const handleThemeChange = (selectedTheme) => {
    // Cambiar el tema usando la función devuelta por el hook useTheme
    setTheme(selectedTheme);
  };

  return (
    <div className="flex items-center gap-1">
      <div>
        <BrushIcon />
      </div>
      <div className="dropdown">
        {/* Mostrar el tema actual */}
        <label tabIndex={0} className="btn m-1">
          {theme}
        </label>
        {/* Lista desplegable para seleccionar el tema */}
        <ul
          tabIndex={0}
          className="menu dropdown-content rounded-box z-[1] w-52 bg-base-100 p-2 shadow"
        >
          {/* Iterar sobre los temas disponibles */}
          {themes.map((theme, index) => (
            <li key={index}>
              {/* Manejar el clic en un tema para cambiarlo */}
              <a onClick={() => handleThemeChange(theme.toLowerCase())}>
                {theme}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
