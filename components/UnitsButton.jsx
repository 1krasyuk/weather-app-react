import { UnitsIcon } from "./icons/UnitsIcon";
import { DropdownIcon } from "./icons/DropdownIcon";

export default function UnitsButton() {
  return (
    <div>
      <button className="flex items-center text-neutral-0 gap-1.5 bg-neutral-800 px-2.5 py-1.5 rounded-md text-xs font-normal">
        <UnitsIcon className="w-3 h-3" />
        Units
        <DropdownIcon className="w-2 h-2" />
      </button>
    </div>
  );
}
