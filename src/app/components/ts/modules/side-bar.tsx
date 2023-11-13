import Link from "next/link";
import { Github, Linkedin, MenuSvgclose, MenuSvgopen } from "./icons";
import ThemeSelect from "../../js/modules/theme_select";
import dynamic from "next/dynamic";
export const Sidebar = () => {
  const Nossr = dynamic(() => import("../../js/modules/no-ssr"), { ssr: false });
  return (
    <label tabIndex={1} className="btn-circle swap swap-rotate">
      <div className="drawer ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer "></label>
        </div>
        <div className="drawer-side z-10">
          <label htmlFor="my-drawer" className="z-10"></label>
          <ul className="menu z-10 min-h-full w-80 space-y-2 bg-base-200 p-4 text-base-content">
            {/* Sidebar content here */}
            <h1 className="mb-4 text-3xl font-bold ">P O R T F O L I O </h1>
            <ul className="space-y-2">
              <Link href="/projects">
                <li>
                  <h2 className="text-lg">Projects</h2>
                </li>
              </Link>
              <Link href="/about">
                <li>
                  <h2 className="text-lg">About</h2>
                </li>
              </Link>
              <li>
                <a className="text-lg">Socials</a>
              </li>
            </ul>
            <Nossr>
              <ThemeSelect />
            </Nossr>
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
      <MenuSvgopen />
      <MenuSvgclose />
    </label>
  );
};
