"use client";
import Navbar from "./navbar";
import { Navigation } from "./nav";
import { Main } from "../modules/main";

export const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Navigation />
    </>
  );
};
