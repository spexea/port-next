"use client";
import React from "react";
import Navbar from "@/app/components/ts/main/navbar";
import { Navigation } from "@/app/components/ts/main/nav";
import Cards from "@/app/components/ts/modules/cards";

export default function Project() {
  return (
    <>
      <div>
        <Navbar />
        <main className="text-dark flex min-h-screen w-full items-center">
          <Cards />
          <div className=""></div>
          <Navigation />
        </main>
      </div>
    </>
  );
}
