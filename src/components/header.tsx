import { ModeToggle } from "./mode-toggle";

export default function Header() {
    return (
        <header className="w-full h-16 border-b flex items-center justify-around">
            <nav className="flex items-center gap-10">
                <span className="text-2xl font-bold">cinemaze</span>
                <div className="flex items-center gap-4">
                <a href="#">Início</a>
                <a href="#">Assistir</a>
                </div>
            </nav>
            <ModeToggle/>
        </header>
    )
}