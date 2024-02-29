import { ModeToggle } from "./mode-toggle";
import { NavLink, Link } from "react-router-dom";
import links from "../json/links.json";

export default function Header() {
  return (
    <header className="flex fixed top-0 bg-background w-full h-14 items-center justify-around">
      <nav className="flex items-center gap-10">
        <Link to="/">
          <span className="text-2xl font-bold tracking-tighter">cinemaze</span>
        </Link>
        <div className="flex items-center gap-4 tracking-wide font-semibold text-lg">
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.link}
              className={({ isActive }) => {
                return isActive
                  ? "text-primary "
                  : "text-secondary hover:text-primary";
              }}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
      <ModeToggle />
    </header>
  );
}
