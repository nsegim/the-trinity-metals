import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SiteHeader from "./components/header/Header";
import { BrowserRouter, Router, Route, Routes, HashRouter } from "react-router-dom";
import HomePage from "./components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter basename="/trinity-metals/">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
