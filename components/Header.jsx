import { Logo } from "./icons/Logo";
import UnitsDropdown from "./UnitsDropdown";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between ">
        <Logo className="w-34 h-8" />
        <UnitsDropdown />
      </header>
    </>
  );
}
