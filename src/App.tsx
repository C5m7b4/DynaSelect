import DynaSelect from "./components/dynaselect/DynaSelect";
import { data } from "./data";

function App() {
  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col justify-center items-center">
      <div>Hello</div>
      <DynaSelect
        data={data}
        displayKey={"name"}
        valueKey={"index"}
        label={"Select a Person"}
      />
    </div>
  );
}

export default App;
