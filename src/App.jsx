/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/Aboutus/About.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Location from "./components/Location/Location.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Reviews />
      <Gallery />
      <Contact />
      <Location />
    </div>
  );
};

export default App;
