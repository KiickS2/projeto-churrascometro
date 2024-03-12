import { Route, Routes } from "react-router-dom";
import Results from "./pages/Results";
import Calculator from "./pages/Calculator";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Calculator />}/>
        <Route path="/results" element={<Results />}/>
      </Routes>
    </>
  );
}

export default App;
