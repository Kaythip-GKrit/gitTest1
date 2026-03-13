import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Test from "./pages/Test";
import MainLayout from "./layouts/MainLayout";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* have navbar */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Test" element={<Test />}></Route>
          </Route>
          
          
          
        {/* no have navbar */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
