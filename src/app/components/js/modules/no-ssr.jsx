import React from "react";

// Componente funcional para renderizado sin SSR (Server-Side Rendering)
export default function NoSSR({ children }) {
  return (
    <div suppressHydrationWarning>
      {/* Verifica si el código se está ejecutando en el servidor o en el cliente */}
      {typeof window === "undefined" ? null : children}
    </div>
  );
}
