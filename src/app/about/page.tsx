"use client";
import React from "react";
import Navbar from "@/app/components/ts/main/navbar";
import { Navigation } from "@/app/components/ts/main/nav";
import { Abt } from "../components/js/modules/abt";
import Image from "next/image";
import Laptop from "../components/data/image.png";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div className="aspect-[1097/845] w-[68.5625rem] "></div>
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div className="aspect-[1097/845] w-[68.5625rem] "></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Trabaja conmigo
              </h2>
              <p className="mt-6 text-lg leading-8">
                Un desarrollador FrontEnd junior y animado que te ayudará a
                alcanzar los objetivos con tu equipo a tiempo. Desarrollador
                bilingüe, ESP-ENG.
              </p>
            </div>
            <div className=" hidden lg:block">
              <Image src={Laptop} alt="laptop" width="220" height="220" />
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 ">Horas de Práctica</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight ">
                  +1900
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 ">Proyectos Finalizados</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight ">
                  4
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 ">Inicio del Aprendizaje</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight ">
                  Dic; 2022.
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 ">
                  Educación Universitaria En Curso
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight ">
                  Ingeniería de Software
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <Abt />
      <div className="px-2"></div>
      <Navigation />
    </>
  );
};

export default About;
