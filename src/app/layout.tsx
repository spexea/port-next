import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jesus Temporal Space.",
  description:
    "Este es mi portafolio personal. Sigue bajo construccion, pero puedes ir viendo el trabajo que he hecho hasta ahora. Bugs y errores son esperables... Explorando, aprendiendo las mejores practicas, con la finalidad de llegar a dedicarle buena parte de mi tiempo a mi pasión.❤️",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
