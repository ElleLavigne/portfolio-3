
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className="flex mx-auto w-1/2 justify-between mt-5 font-medium">
      <img src="logo.svg" alt="" />

      <nav className="flex items-center gap-4 ">
        <NavLink  to="/">
          Projetos
        </NavLink>
      <a 
      className="text-sm font-medium text-zinc-600 hover:text-foreground "
      href="">
      Currículo
      </a>
     
     
      </nav>
    </div>
  );
}
