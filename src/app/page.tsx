import Page from "./components/ts/main/page";
import "tailwindcss";

// Página principal
export default function Home() {
  return (
    <main data-theme="">
      <div>
        {/* Renderiza el componente Page */}
        <Page />
      </div>
    </main>
  );
}
