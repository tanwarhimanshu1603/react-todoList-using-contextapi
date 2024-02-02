import AddTodo from "./components/AddTodo";
import DropDown from "./components/DropDown";
import Todos from "./components/Todos";

function App() {
  return (
    // Container class
    <div className="flex flex-col items-center h-screen">
      {/* Header */}
      <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-gray-600 mt-8">TODO LIST</h1>
      {/* .Add todo and Selective option */}
      <div className="lg:w-[700px] md:w-[500px] w-[348px] mt-5 flex justify-between items-center px-2 py-5">
        <AddTodo />
        <DropDown />
      </div>
      {/* Todos */}
      <Todos />
    </div>
  );
}

export default App;
