/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/Aboutus/About.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
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
