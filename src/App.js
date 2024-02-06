import { Route, Routes } from "react-router";
import Home from "./Home";
import Buy from "./Buy";

function App() {
  return (
    <div className="App">
      {/* <h1 className="text-3xl font-bold underline">
      Welcome to React Tailwind
      </h1> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/buy" element={<Buy/>}/>
      </Routes>

    </div>
  );
}

export default App;
