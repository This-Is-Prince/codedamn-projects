import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  const [isLSUpdated, setIsLSUpdated] = useState(true);
  return (
    <>
      <Header />
      <AddTodo setIsLSUpdated={setIsLSUpdated} />
      <Todos isLSUpdated={isLSUpdated} setIsLSUpdated={setIsLSUpdated} />
    </>
  );
}

export default App;
