"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Notfound() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>

          <p className="mb-4 text-lg text-gray-600">
            ¡Ups! Parece que estás perdido.
          </p>
          <div className="animate-bounce">
            <svg
              className="mx-auto h-16 w-16 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </div>
          <p className="mt-4 text-gray-600 flex">
            Vamos a llevarte de vuelta&nbsp;
            <motion.div whileHover={{ scale: 1.3 }}>
              <motion.div>
                <Link href="/" className="text-blue-500">
                  {" "}
                  a casa
                </Link>
              </motion.div>
            </motion.div>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
