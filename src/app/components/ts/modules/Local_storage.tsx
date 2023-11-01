"use client";
import { useEffect, useState } from "react";
export default function useTheme(initialTheme = "light") {
  const isBrowser = typeof window !== "undefined";

  const [themeUser, setThemeUser] = useState(() => {
    if (isBrowser) {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme || initialTheme;
    } else {
      return initialTheme;
    }
  });

  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem("theme", themeUser);
      document.body.setAttribute("data-theme", themeUser);
    }
  }, [themeUser]);

  return [themeUser, setThemeUser, isBrowser];
}
