import DynaSelect from "./components/dynaselect/DynaSelect";
import { data } from "./data";

function App() {
  return (
    <div className="h-screen w-screen bg-slate-500 text-white flex flex-col justify-center items-center">
      <div>Hello</div>
      <div className="w-full px-8">
        <DynaSelect
          data={data}
          displayKey={"name"}
          valueKey={"index"}
          label={"Select a Person"}
          onSelect={(e) => console.log(e)}
        />
      </div>
    </div>
  );
}

export default App;
