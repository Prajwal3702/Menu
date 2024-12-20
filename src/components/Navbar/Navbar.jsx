import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  return (
    <div className="navbar">
      <ul ref={menuRef} className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src="" alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#menu">
            <p onClick={() => setMenu("menu")}>Menu</p>
          </AnchorLink>
        </li>
        <img src={logo} alt="" />
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#reviews">
            <p onClick={() => setMenu("reviews")}>Reviews</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#gallery">
            <p onClick={() => setMenu("gallery")}>Gallery</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
