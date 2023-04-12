import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Settings from "./pages/Settings";
import ViewRecipe from "./pages/ViewRecipe";
import Searched from "./pages/Searched";


function App() {
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
