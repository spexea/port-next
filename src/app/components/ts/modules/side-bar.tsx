import Link from "next/link";
import { Github, Linkedin, MenuSvgclose, MenuSvgopen } from "./icons";
import ThemeSelect from "../../js/modules/theme_select";
import dynamic from "next/dynamic";

// Componente funcional para la barra lateral
export const Sidebar = () => {
  // Componente dinámico para el manejo de SSR
  const Nossr = dynamic(() => import("../../js/modules/no-ssr"), {
    ssr: false,
  });

  return (
    <label tabIndex={1} className="btn-circle swap swap-rotate">
      {/* Contenedor de la barra lateral */}
      <div className="drawer ">
        {/* Toggle para abrir/cerrar la barra lateral */}
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer "></label>
        </div>
        {/* Contenido de la barra lateral */}
        <div className="drawer-side z-10">
          <label htmlFor="my-drawer" className="z-10"></label>
          {/* Menú de la barra lateral */}
          <ul className="menu z-10 min-h-full w-80 space-y-2 bg-base-200 p-4 text-base-content">
            {/* Encabezado del menú */}
            <h1 className="mb-4 text-3xl font-bold ">P O R T F O L I O </h1>
            {/* Elementos del menú */}
            <ul className="space-y-2">
              {/* Enlace a "Proyectos" */}
              <Link href="/projects">
                <li>
                  <h2 className="text-lg">Proyectos</h2>
                </li>
              </Link>
              {/* Enlace a "Sobre" */}
              <Link href="/about">
                <li>
                  <h2 className="text-lg">Sobre</h2>
                </li>
              </Link>
            </ul>
            {/* Selector de tema */}
            <Nossr>
              <ThemeSelect />
            </Nossr>
            {/* Enlaces a perfiles sociales */}
            <div className="flex items-center ">
              <li>
                {" "}
                <Link
                  href="https://github.com/spexea"
                  target="_blank"
                  aria-label="Github"
                >
                  <Github className="h-6 w-6" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/jesus-casilla-ynirio-7b1387262/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
      {/* Iconos para abrir/cerrar la barra lateral */}
      <MenuSvgopen />
      <MenuSvgclose />
    </label>
  );
};
