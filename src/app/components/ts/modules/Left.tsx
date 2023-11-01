import { Github, SunIcon, MoonIcon, Linkedin } from "./icons";
import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./theme";

export default function Left() {
  return (
    <div className="hidden lg:block">
      <nav className="flex">
        <div className="top-5"></div>

        <SunIcon />
        <ThemeSwitcher />
        <MoonIcon />
        <Link
          href="https://github.com/spexea"
          target="_blank"
          aria-label="Github"
        >
          <Github className="mr-1 h-6 w-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jesus-casilla-ynirio-7b1387262/"
          target="_blank"
          aria-label="Linkedin"
        >
          <Linkedin className="h-6 w-6" />
        </Link>
      </nav>
    </div>
  );
}
