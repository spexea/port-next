"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
export const Pc_Menu = () => {
  const Pathname = usePathname();
  const SearchParams = useSearchParams();
  const Url = `${Pathname}${SearchParams}`;
  return (
    <div className="hidden-lg:block">
      <ul>
        <li
          className={`z-1 tab tab-lifted ${
            "/projects" == Url ? "tab-active" : ""
          }`}
        >
          <Link href="/projects">Projects</Link>
        </li>
        <li className={`z-1 tab tab-lifted ${"/" == Url ? "tab-active" : ""}`}>
          <Link href="/">Home</Link>
        </li>
        <li
          className={`z-1 tab tab-lifted ${
            "/about" == Url ? "tab-active" : ""
          }`}
        >
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
