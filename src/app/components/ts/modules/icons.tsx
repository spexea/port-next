import React from "react";

// Interfaz para los props del componente SVG
interface SvgProps {
  className?: string; // Clase CSS opcional
  width?: string; // Ancho opcional
  height?: string; // Alto opcional
  // Otros props específicos del componente SVG si los tienes
}

// Componente funcional de SVG para el ícono de menú abierto
export const MenuSvgopen: React.FC<SvgProps> = (props) => {
  return (
    <svg
      className={props.className || "swap-off fill-current"} // Clase CSS de DaisyUI, que controla el estado.
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "32"} // Ancho predeterminado si no se proporciona ninguno
      height={props.height || "32"} // Alto predeterminado si no se proporciona ninguno
      viewBox="0 0 512 512"
    >
      <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
    </svg>
  );
};
// Exactamente la misma logica, una y otra vez, para cada icono que necesites.
export const Github: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "1em"}
      height={props.height || "1em"}
      viewBox="0 0 512 512"
    >
      <rect
        x="0"
        y="0"
        width="512"
        height="512"
        fill="rgba(255, 255, 255, 0)"
      />
      <path
        fill="currentColor"
        d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4c0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6c-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8c11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32Z"
      />
    </svg>
  );
};
export const Linkedin: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "1em"}
      height={props.height || "1em"}
      viewBox="0 0 256 256"
    >
      <rect
        x="0"
        y="0"
        width="256"
        height="256"
        fill="rgba(255, 255, 255, 0)"
      />
      <g fill="none">
        <rect width="256" height="256" fill="#fff" rx="60" />
        <rect width="256" height="256" fill="#0A66C2" rx="60" />
        <path
          fill="#fff"
          d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
        />
      </g>
    </svg>
  );
};
export const MenuSvgclose: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <svg
      className={props.className || "swap-on fill-current"}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "32"}
      height={props.height || "32"}
      viewBox="0 0 512 512"
    >
      <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
    </svg>
  );
};
export const SunSvg: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <svg
      className={props.className || "swap-on h-6 w-6 fill-current"}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "32"}
      height={props.height || "32"}
      viewBox="0 0 24 24"
    >
      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
    </svg>
  );
};
export const MoonSvg: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <svg
      className={props.className || "swap-off h-6 w-6 fill-current"}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "32"}
      height={props.height || "32"}
      viewBox="0 0 24 24"
    >
      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
    </svg>
  );
};
export const NavigationBack: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "24"}
      height={props.height || "24"}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875L9.55 12Z"
      />
    </svg>
  );
};
export const NavigationHome: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className || "h-5 w-5"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
};
export const NavigationMenu: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className || "h-5 w-5"}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  );
};
export const SunIcon: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={props.width || "27"}
      height={props.height || "27"}
      viewBox="0 0 50 50"
    >
      <path d="M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 24.90625 15 C 24.875 15.007813 24.84375 15.019531 24.8125 15.03125 C 24.75 15.035156 24.6875 15.046875 24.625 15.0625 C 24.613281 15.074219 24.605469 15.082031 24.59375 15.09375 C 19.289063 15.320313 15 19.640625 15 25 C 15 30.503906 19.496094 35 25 35 C 30.503906 35 35 30.503906 35 25 C 35 19.660156 30.746094 15.355469 25.46875 15.09375 C 25.433594 15.09375 25.410156 15.0625 25.375 15.0625 C 25.273438 15.023438 25.167969 15.003906 25.0625 15 C 25.042969 15 25.019531 15 25 15 C 24.96875 15 24.9375 15 24.90625 15 Z M 24.9375 17 C 24.957031 17 24.980469 17 25 17 C 25.03125 17 25.0625 17 25.09375 17 C 29.46875 17.050781 33 20.613281 33 25 C 33 29.421875 29.421875 33 25 33 C 20.582031 33 17 29.421875 17 25 C 17 20.601563 20.546875 17.035156 24.9375 17 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z"></path>
    </svg>
  );
};
export const MoonIcon: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "25"}
      height={props.height || "25"}
      viewBox="0 0 100 100"
      version="1.1"
    >
      <path d="" stroke="none" fill="#080404" fillRule="evenodd" />
      <path
        d="M 50.002 5.750 C 50.004 6.855, 52.029 8.557, 55.492 10.367 C 68.503 17.165, 75.500 31.434, 72.870 45.803 C 67.131 77.152, 25.090 83.669, 10.367 55.492 C 4.834 44.903, 1.773 50.666, 5.895 63.909 C 10.438 78.509, 22.266 90.134, 36.932 94.415 C 48.084 97.670, 63.129 95.935, 72.937 90.263 C 103.786 72.421, 103.786 27.579, 72.937 9.737 C 63.922 4.523, 49.997 2.102, 50.002 5.750 M 70.317 16.743 C 76.221 24.798, 78.288 31.793, 77.804 42.081 C 77.315 52.482, 74.061 60.034, 67.048 67.048 C 60.034 74.061, 52.482 77.315, 42.081 77.804 C 31.793 78.288, 24.798 76.221, 16.743 70.317 L 11.535 66.500 13.920 70.500 C 17.843 77.079, 25.120 83.919, 31.500 87.024 C 47.468 94.797, 65.682 92.034, 78.519 79.894 C 98.509 60.988, 94.529 28.248, 70.500 13.920 L 66.500 11.535 70.317 16.743"
        stroke="none"
        fill="#040404"
        fillRule="evenodd"
      />
    </svg>
  );
};
export const BrushIcon: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <svg
      width={props.width || "25"}
      height={props.height || "25"}
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 512 512"
    >
      <path d="M450.6 66.5c-19.5 6.9-50.4 29.8-93.5 69.5-35.5 32.6-89.8 87.3-132 132.8-19.6 21.2-20.7 22.3-23.6 21.7-15-2.9-26.4-2.5-37.8 1.4-21.2 7.3-40.9 25.3-50.8 46.6-1.6 3.4-4.3 11.8-6 18.5-1.6 6.7-4.1 14.3-5.4 16.9-3.1 6.1-9.3 11.7-14.7 13.2-5.7 1.6-18 1.4-30.5-.5-15.4-2.4-19.7-2.2-22.2 1-3.1 3.9-2.6 6.5 2.5 13.3 9.4 12.5 26.3 26.2 42.4 34.4 47.1 23.8 112.8 12.6 151.6-25.8 19.9-19.7 28.6-42.7 24.2-63.7l-1.4-6.7 8.5-7.8c22.4-20.4 62.8-59.2 88.8-85.1C439 158.1 480 105.9 480 81.6c0-6.3-3.7-12.5-9-15.3-5.6-3-11.6-2.9-20.4.2zM464 82.2c-.1 8.9-16.3 34.3-39.1 61.4-33.2 39.5-93.1 100.7-157.4 160.8l-21 19.6-2.9-3.8c-4.3-5.4-14.1-14.7-19.2-18.3-2.5-1.7-4.4-3.4-4.2-3.9.5-1.3 34.2-37.3 60.9-65C362.3 148.9 424.8 94.4 454 82.3c7.3-3 10-3 10-.1zM197.1 305.6c9.7 2.9 17 7.5 26.5 16.9 11.7 11.6 15.5 19 16.2 31.2.8 15.7-5.4 28.9-20.9 44.3-11.3 11.2-23.3 19.1-38.6 25-17.5 6.9-26.1 8.4-46.3 8.4-15.7 0-18.5-.3-27.2-2.6-12.6-3.4-26.6-10.2-36.7-17.8-4.5-3.4-8.1-6.3-8.1-6.5 0-.2 5.1-.2 11.3-.2 27.8.3 41.1-11 48.6-41.3 3.3-13.4 4.6-16.7 9.6-24.6 13.5-21 34-34.3 53.1-34.4 3.9 0 9.5.7 12.5 1.6z" />
    </svg>
  );
};
