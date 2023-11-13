"use client";
import React from "react";
export const Main = () => {
  return (
    <div className="">
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold k sm:text-6xl lg:text-7xl">
                Collaborate remotely, or in oficce with
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-secondary-content"></span>
                  <h1 className="relative text-4xl font-bold  sm:text-6xl lg:text-7xl text-primary-focus">
                    Jesus Casilla.
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-base  sm:text-xl">
                FrontEnd Junior dev.
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="/projects"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold  transition-all duration-200  bg-secondary hover:bg-secondary-focus"
                  role="button"
                >
                  {" "}
                  Start looking{" "}
                </a>
              </div>
            </div>

            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
