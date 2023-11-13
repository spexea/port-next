"use client";
import Navbar from "./navbar";
import { Navigation } from "./nav";
import { Main } from "../modules/main";

export default function Page() {
  return (
    <>
      <Navbar />
      <Main />
      <Navigation />
    </>
  );
}
