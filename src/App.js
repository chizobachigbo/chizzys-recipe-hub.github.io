import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Settings from "./pages/Settings";
import ViewRecipe from "./pages/ViewRecipe";
import Searched from "./pages/Searched";
import { useEffect } from "react";



function App() {
 
  const loadSetting = () => {
    const defaultSetting = {
      "--background-color": "rgb(255, 255, 255)",
      "--background-light": "rgb(255, 255, 255)",
      "--shadow-color": "rgba(0, 0, 0, 0.2)",
      "--primary-color": "rgb(255, 0, 86)",
      "--text-color": "rgb(10, 10, 10)",
      "--text-light": "rgb(87, 87, 87)",
      "--font-size": "16px",
      "--animation-speed": 1,
    };
    const previousSetting = JSON.parse(localStorage.getItem("settings"));
    if (previousSetting === null) {
      return defaultSetting;
    } else {
      return previousSetting;
    }
  }

  let settingsOnload = loadSetting();

  useEffect(() => {
    const root = document.documentElement;
    for (let key in settingsOnload) {
      root.style.setProperty(key, settingsOnload[key]);
    }
  });

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/recipes" element={<Recipe/>}></Route>
            <Route path="/settings" element={<Settings/>}></Route>
            <Route path="/viewRecipe/:name" element={<ViewRecipe/>}></Route>
            <Route path="/searched/:search" element={<Searched/>}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
