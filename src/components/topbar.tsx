import React from "react";
import { TopNav } from "../styles/styles";
import logo from "../images/Logo.webp";
import { Link } from "react-router-dom";

function TopBar() {
  // const menu: string[] = useMemo(
  //   () => ["About Us", "WebATL", "Accelerator", "Blog", "Contact"],
  //   []
  // );
  return (
    <TopNav>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
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
