import "./NavBar.css";

import { useRef } from "react";
import LOGO from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

export function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsiveNav");
  };

  return (
    <header>
      <img className="logo" src={LOGO} alt="logo" />
      <nav ref={navRef}>
        <a href="#">Features</a>
        <a href="#">FAQ</a>
        <a href="#">Contact</a>
        <Link to={"/login"}>
          <Button name="Login" />
        </Link>
        <button className="navBtn navCloseBtn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="navBtn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}
