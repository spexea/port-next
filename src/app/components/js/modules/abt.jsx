import React from "react";

export const Abt = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 min-h-screen">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">Más Sobre Mí</h2>
        <p className="text-xl mt-3"></p>
      </div>
      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        <div className="py-5">
          <details className="group">
            <summary className="flex text-primary-focus justify-between items-center font-medium cursor-pointer list-none">
              <span> ¿Qué tecnologías uso?</span>
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
            <p className="mt-3 text-secondary group-open:animate-fadeIn">
              Principalmente React con TypeScript, NPM y TailwindCSS. También
              estoy familiarizado con frameworks orientados al servidor como
              NextJS.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex text-primary-focus justify-between items-center font-medium cursor-pointer list-none">
              <span> ¿Por qué uso estas tecnologías?</span>
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
            <p className="mt-3 text-secondary group-open:animate-fadeIn">
              Considero que estas opciones son las mejores para comenzar mi
              trayectoria como desarrollador de software. Principalmente porque
              me brindan la oportunidad de crear sitios web complejos desde cero
              de manera más rápida, sostenible y expansiva con el tiempo.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex text-primary-focus justify-between items-center font-medium cursor-pointer list-none">
              <span> ¿Por qué sería un buen compañero de trabajo?</span>
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
            <p className="mt-3 text-secondary group-open:animate-fadeIn">
              Soy una persona muy respetuosa, sociable, trabajo bien en equipo y
              amable. Diría que encajo bien en casi cualquier tipo de equipo.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex text-primary-focus justify-between items-center font-medium cursor-pointer list-none">
              <span>
                {" "}
                ¿Por qué empecé a aprender desarrollo de software y cómo me
                considero en un entorno laboral?
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
            <p className="mt-3 text-secondary group-open:animate-fadeIn">
              Empecé a aprender desarrollo de software porque es algo que me
              apasiona. Me encanta aprender más cada día, dedicar tiempo de mi
              día para practicarlo. Por esa razón, casi garantizo que en un
              entorno laboral, me preocuparía por aprender cada día, crecer con
              la empresa. Aprender es muy importante para mí, para mantener las
              mejores prácticas y crear código cada vez más limpio. Necesitas
              mantener la mente abierta en esas cosas. Me siento muy orgulloso
              de las cosas que creo, y en la mayoría de los casos, me sentiría
              muy mal sabiendo que, en realidad, es un mal código. Pero necesito
              entender que es algo normal y aprender de ello. En resumen:
              probablemente me considero una persona de aprendizaje en el
              entorno laboral y flujo de trabajo.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex text-primary-focus justify-between items-center font-medium cursor-pointer list-none">
              <span> ¿Conozco CSS, SASS y JavaScript o similares?</span>
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
            <p className="mt-3 text-secondary group-open:animate-fadeIn">
              Sí, esa es una parte importante de mi especialidad: FrontEnd. No
              los uso en mis proyectos personales públicos; prefiero usar React,
              TailwindCss, TypeScript, etc., pero estoy abierto a usarlos si es
              necesario.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex text-primary-focus justify-between items-center font-medium cursor-pointer list-none">
              <span> ¿Cómo puedo contactarte?</span>
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
            <p className="mt-3 text-secondary group-open:animate-fadeIn">
              Puedes contactarme en mi correo electrónico personal:
              lahualdycasilla@icloud.com
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex text-primary-focus justify-between items-center font-medium cursor-pointer list-none">
              <span>
                {" "}
                ¿Piensa en usar otro framework como Vue, Angular, etc.?
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
            <p className="mt-3 text-secondary group-open:animate-fadeIn">
              Mi objetivo principal es tener un conocimiento general de al menos
              cada framework que pueda. Así que la respuesta es un sí rotundo.
              De todos modos, ese objetivo llevará mucho tiempo porque necesito
              saber tanto como sea posible sobre cada uno de ellos.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex text-primary-focus justify-between items-center font-medium cursor-pointer list-none">
              <span> ¿Puedo sugerir cambios en tus proyectos?</span>
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
            <p className="mt-3 text-secondary group-open:animate-fadeIn">
              ¡Absolutamente! Puedes escribirme a mi dirección de correo
              electrónico sobre los cambios que propones, y los consideraré.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};
