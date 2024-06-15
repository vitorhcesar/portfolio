import { ToggleThemeButton } from "@/components/ToggleThemeButton";
import VHLogo from "@/components/VHLogo";

export default function Home() {
  return (
    <>
      <header >
        <VHLogo />
        <nav>
          <button>Quem sou eu</button>
          <button>Experiência</button>
          <button>Faça seu orçamento</button>
        </nav>
        <ToggleThemeButton />
      </header>
      <main>

      </main>
    </>
  );
}
