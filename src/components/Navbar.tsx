import { CartButton, LinkDropdown, Logo, ModeToggle, NavLinks } from ".";

export default function Navbar() {
  return (
    <nav className=" bg-muted py-4 flex flex-row">
      <div className="align-element flex justify-between items-center w-full">
        <Logo />
        <LinkDropdown />
        <NavLinks />
      </div>
      <div className=" align-element flex justify-center items-center gap-x-4">
        <ModeToggle />
        <CartButton />
      </div>
    </nav>
  );
}
