import { UnitsIcon } from "./icons/UnitsIcon";
import { DropdownIcon } from "./icons/DropdownIcon";

export default function UnitsButton() {
  return (
    <div>
      <button className="flex items-center text-sm text-neutral-0 gap-1.5 bg-neutral-800 px-2.5 py-1.5 rounded-md  font-normal">
        <UnitsIcon className="w-3.5 h-3.5" />
        Units
        <DropdownIcon className="w-3 h-3" />
      </button>
    </div>
  );
}
