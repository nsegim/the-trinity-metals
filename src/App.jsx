// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import SiteHeader from "./components/header/Header";
// import { BrowserRouter, Router, Route, Routes, HashRouter } from "react-router-dom";
// import HomePage from "./components/Home/Home";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <hashRouter basename={import.meta.env.BASE_URL}>
//         <Routes>
//           <Route path="/" element={<HomePage />}></Route>
//         </Routes>
//       </hashRouter>
//     </>
//   );
// }

// export default App;



import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
