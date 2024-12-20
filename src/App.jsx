/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About us/About";
import Menu from "./components/Menu/Menu";
import Reviews from "./components/Reviews/Reviews";
import Gallery from "./components/Gallery/Gallery";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Reviews />
      <Gallery />
    </div>
  );
};

export default App;
