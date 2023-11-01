import React from "react";
import { Pc_Menu } from "../modules/Pc_menu";
import Left from "../modules/Left";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start hidden lg:block">
        <Pc_Menu />
      </div>
      <div className="navbar-center">
        <a
          className="btn btn-ghost normal-case text-xl"
          data-text="Portfolio"
          href="/"
        >
          <div className="letter">P</div>
          <div className="letter">O</div>
          <div className="letter">R</div>
          <div className="letter">T</div>
          <div className="letter">F</div>
          <div className="letter">O</div>
          <div className="letter">L</div>
          <div className="letter">I</div>
          <div className="letter">O</div>
        </a>
      </div>
      <div className="navbar-end">
        <Left />
      </div>
    </div>
  );
}
