"use client";
// Importar el hook personalizado useTheme
import useTheme from "../../ts/modules/Local_storage.tsx";
import React, { useEffect } from "react";
import { BrushIcon } from "../../ts/modules/icons.tsx";

export default function ThemeSelect() {
  // Usar una sola variable para guardar el tema actual
  const themes = ["Dark", "Light", "Synthwave", "Forest", "Luxury", "Cupcake"];
  const [theme, setTheme] = useTheme("");

  useEffect(() => {
    // Asignar el tema actual al atributo data-theme del elemento raíz
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

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
        <label tabIndex={0} className="btn m-1">
          {theme}
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content rounded-box z-[1] w-52 bg-base-100 p-2 shadow"
        >
          {themes.map((theme, index) => (
            <li key={index}>
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
