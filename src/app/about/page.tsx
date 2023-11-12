import React from "react";
import Navbar from "@/app/components/ts/main/navbar";
import { Navigation } from "@/app/components/ts/main/nav";
import { Abt } from "../components/js/modules/abt";
import Image from "next/image";

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
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl">
              Work with me
            </h2>
            <p className="mt-6 text-lg leading-8 ">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 ">Offices worldwide</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight ">
                  12
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 ">Full-time colleagues</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight ">
                  300+
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 ">Hours per week</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight ">
                  40
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 ">Paid time off</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight ">
                  Unlimited
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <Abt />
      <Navigation />
    </>
  );
};

export default About;
