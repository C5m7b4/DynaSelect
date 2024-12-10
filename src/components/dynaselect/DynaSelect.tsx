import ChevronUpDown from "../../svgs/ChevronUpDown";
import { useState, useEffect, useRef } from "react";

interface DynaSelectProps<T> {
  data: T[];
  valueKey: keyof T;
  displayKey: keyof T;
  label: string;
  onSelect: (selection: string) => void;
}

const DynaSelect = <T,>({
  data,
  valueKey,
  displayKey,
  label,
  onSelect,
}: DynaSelectProps<T>) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFileteredData] = useState<T[]>([]);

  const listRef = useRef<HTMLDivElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (listRef.current && triggerRef.current) {
      if (!listRef.current.contains(e.target as Node)) {
        if (!triggerRef.current.contains(e.target as Node)) {
          listRef.current.setAttribute("data-display", "closed");
        }
      }
    }
  };

  useEffect(() => {
    if (!data || data.length === 0) return;
    setFileteredData(data);

    if (componentRef.current) {
      const parent = componentRef.current.parentElement;
      if (parent) {
        parent.addEventListener("mousedown", handleClickOutside);
      }
    }

    return () => {
      if (componentRef.current) {
        const parent = componentRef.current.parentElement;
        if (parent) {
          parent.removeEventListener("mousedown", handleClickOutside);
        }
      }
    };
  }, [data]);

  const handleTriggerClick = () => {
    if (listRef.current) {
      const currentStatus = listRef.current.getAttribute("data-display");
      listRef.current.setAttribute(
        "data-display",
        currentStatus === "open" ? "closed" : "open"
      );
    }
  };

  return (
    <div ref={componentRef}>
      <div className="flex flex-col mt-2">
        <label htmlFor="search" className="text-sm font-medium mb-2">
          {label}
        </label>
        <div className="relative">
          <div ref={triggerRef} onClick={handleTriggerClick}>
            <input
              type="text"
              name="search"
              autoComplete="off"
              className=" flex w-full flex-1 rounded-lg
                    focus:border-2 focus:border-purple-400
                    focus:ring-0"
            />
            <div className="absolute top-1 right-0 px-2">
              <ChevronUpDown className="cursor-pointer" />
            </div>
          </div>
          <div
            ref={listRef}
            data-display="closed"
            className="absolute w-full mt-2 p-2 py-2
            max-h-[350px] overflow-y-scroll
            z-20 rounded-b-xl shadow-lg
            data-[display=open]:animate-appear
            data-[display=closed]:animate-dissapear"
          >
            {filteredData.map((d, idx) => (
              <div key={`d-${idx}`}>
                <div className="grid grid-cols-[35px_1fr] min-h-[35px]">
                  <div className="flex items-center">
                    {d[displayKey] as string}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynaSelect;
