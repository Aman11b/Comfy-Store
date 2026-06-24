import { NavLink } from "react-router-dom";
import { links } from "../utils";
import { Label } from "radix-ui";

export default function NavLinks() {
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-4">
      {links.map((link) => {
        return (
          <NavLink
            to={link.href}
            key={link.label}
            className={({ isActive }) => {
              return `capitalize font-light tracking-wide ${isActive ? "text-primary" : ""}`;
            }}
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
}
