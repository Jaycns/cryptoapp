import React, { useContext } from "react";
import { TopNav } from "../styles/styles";
import logo from "../images/Logo.webp";
import { Link } from "react-router-dom";
import AppContext from "../context/context";

function TopBar() {
  const {
    handleMenu,
    hamburger,
  } = useContext(AppContext);
  return (
    <TopNav>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div
        className={`hamburger ${hamburger ? "active" : ""}`}
        onClick={handleMenu}
      >
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
      <div className="menu">
        <Link to="about-us" className="menuitem">
          About us
        </Link>
        <Link to="webatl" className="menuitem">
          WebATL
        </Link>
        <Link to="accelerator" className="menuitem">
          Accelerator
        </Link>
        <Link to="blog" className="menuitem">
          Blog
        </Link>
        <Link to="contact" className="menuitem">
          Contact
        </Link>
      </div>
    </TopNav>
  );
}

export default React.memo(TopBar);
