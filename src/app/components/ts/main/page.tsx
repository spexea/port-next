import Navbar from "./navbar"
import { Navigation } from "./nav"

   
 export const Page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="b flex min-h-screen items-center">
        <div className="w-1/7"></div>
        <div className="ml-8 ">
          <h1 className="mb-4 text-6xl font-bold">
            Turning Vision Into Reality With Code.
          </h1>
          <p className="prose text-base font-medium">
            As a front-end developer, I&apos;m dedicated to turning ideas into
            innovative web applications.
          </p>
          <p className="prose mt-4 text-base font-medium">
            Front-end development involves creating the user interface of a web
            application using technologies like HTML, CSS, and JavaScript.
          </p>
          <p className="prose mt-4 text-base font-medium">
            A skilled front-end developer should possess a keen eye for design,
            a solid understanding of web standards and accessibility, and
            mastery of tools and frameworks that streamline web development.
          </p>
        </div>
      </div>
      <Navigation />
    </div>
  );
};
