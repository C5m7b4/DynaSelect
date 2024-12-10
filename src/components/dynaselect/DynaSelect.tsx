import ChevronUpDown from "../../svgs/ChevronUpDown";

const DynaSelect = () => {
  return (
    <div className="flex flex-col mt-2">
      <div>
        <label htmlFor="search" className="text-sm font-medium mb-2">
          my label
        </label>
        <div className="relative">
          <div>
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
          <div>my list</div>
        </div>
      </div>
    </div>
  );
};

export default DynaSelect;
