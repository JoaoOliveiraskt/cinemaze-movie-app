import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="flex fixed top-0 bg-background w-full h-14 items-center justify-around">
      <nav className="flex items-center gap-10">
        <span className="text-2xl font-bold tracking-tighter">cinemaze</span>
        <div className="flex items-center gap-4 tracking-wide">
          <a href="#">Início</a>
          <a href="#">Assistir</a>
        </div>
      </nav>
      <ModeToggle />
    </header>
  );
}
