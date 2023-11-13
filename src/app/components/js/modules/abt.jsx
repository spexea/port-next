import React from "react";

export const Abt = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 min-h-screen">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">More of me</h2>
        <p className="text-xl mt-3"></p>
      </div>
      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        <div className="py-5">
          <details className="group">
            <summary className="flex text-primary-focus justify-between items-center font-medium cursor-pointer list-none">
              <span> What technologies do I use?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-secondary  group-open:animate-fadeIn">
              Mostly React with TypeScript, NPM, and TailwindCSS. I&apos;m also
              familiar with server-oriented frameworks like NextJS.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex  text-primary-focus justify-between items-center font-medium cursor-pointer list-none">
              <span> Why do I use these?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-secondary  group-open:animate-fadeIn">
              I considered these options the best to start my journey as a
              Software Dev. Mostly because they often give me the opportunity to
              create complex websites from scratch more quickly, sustainably,
              and expansively over time.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex text-primary-focus justify-between items-center font-medium cursor-pointer list-none">
              <span> Why would I be a good coworker?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="mt-3  text-secondary  group-open:animate-fadeIn">
              I&apos;m a very respectful, sociable, team-worker, and kind
              person. I would say that I&apos;m a good fit for almost any type
              of team.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex text-primary-focus justify-between items-center font-medium cursor-pointer list-none">
              <span>
                {" "}
                Why did I start learning software development, and how do I
                consider myself in a work environment?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="mt-3  text-secondary  group-open:animate-fadeIn">
              I started learning software development because it&apos;s
              something that I&apos;m passionate about. I love learning more
              every day, taking time off my day to practice it. For that reason,
              I almost guarantee that in a work environment, I would care about
              learning every day, growing with the enterprise. Learning is very
              important to me, to stay with the best practices and create more
              and more clean code, and you need to keep an open mind in those
              things. I feel very proud of the things that I create, and in most
              cases, it would feel very bad knowing that actually; it&apos;s bad
              code. But I need to understand that it&apos;s a normal thing and
              learn from it. In summary: I probably consider myself a learning
              person of the work environment and workflow.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex text-primary-focus justify-between items-center font-medium cursor-pointer list-none">
              <span> Do I know CSS, SASS, and JavaScript or similar?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-secondary  group-open:animate-fadeIn">
              Yes, that&apos;s an important part of my specialty; FrontEnd. I
              don&apos;t use them on my public personal projects; I prefer using
              React, TailwindCss, TypeScript, etc. but I&apos;m open-minded to
              use them if needed.
            </p>
          </details>
        </div>

        <div className="py-5">
          <details className="group">
            <summary className="flex text-primary-focus justify-between items-center font-medium cursor-pointer list-none">
              <span> How do I contact you?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="mt-3   text-secondary  group-open:animate-fadeIn">
              You can contact me at my personal email address:
              lahualdycasilla@icloud.com
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex text-primary-focus justify-between items-center font-medium cursor-pointer list-none">
              <span>
                {" "}
                Do I think of using another framework like Vue, Angular, etc?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="mt-3  text-secondary  group-open:animate-fadeIn">
              My main goal is to have a general knowledge of at least every
              framework that I can. So, the answer is an absolute yes. Anyway,
              that goal is going to take a lot of time because I need to know as
              much as I can about each one of them.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex text-primary-focus justify-between items-center font-medium cursor-pointer list-none">
              <span> Can I suggest changes to your projects? </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="mt-3  text-secondary  group-open:animate-fadeIn">
              Absolutely! You can write me at my email address about the changes
              you propose, and I will consider them.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};
