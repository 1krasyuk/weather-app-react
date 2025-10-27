import { Logo } from "./icons/Logo";
import UnitsButton from "./UnitsButton";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between ">
        <Logo className="w-34 h-8" />
        <UnitsButton />
      </header>
    </>
  );
}
