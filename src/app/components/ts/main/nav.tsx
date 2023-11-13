"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {
  NavigationHome,
  NavigationBack,
  NavigationMenu,
} from "../modules/icons";
import { Sidebar } from "../modules/side-bar";


export const Navigation = () => {
  const router = useRouter();
  function goBack() {
    router.back();
  }
  // Obtenemos la ruta actual de la página
  const pathname = usePathname();
  // Obtenemos los parámetros de búsqueda de la URL actual
  const searchParams = useSearchParams();
  // Combinamos la ruta y los parámetros de búsqueda para obtener la URL completa
  const url = `${pathname}${searchParams}`;
  return (
    <div className="md:hidden lg:hidden">
      <meta content="fit=cover" />
      <div className="btm-nav">
        <div className="">
          <Sidebar />
        </div>
        <Link href="/">
          <button type="submit" className={`z-0 ${"/" == url ? "active" : ""}`}>
            <NavigationHome />
          </button>
        </Link>
        <button onClick={goBack} type="submit">
          <NavigationBack />
        </button>
      </div>
    </div>
  );
};
