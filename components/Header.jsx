import { Logo } from "./icons/Logo";
import UnitsButton from "./UnitsButton";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between ">
        <Logo className="w-34 h-8" />
        <UnitsButton />
      </header>
      <h1 className="text-neutral-0 text-center text-[55px] font-semibold  font-family-bricolage my-12 leading-16">
        How's the sky looking today?
      </h1>
    </>
  );
}
