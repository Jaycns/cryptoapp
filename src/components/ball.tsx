import React from "react";
import { TopNav } from "../styles/landingstyles";
import logo from "../images/Logo.webp";

function TopBar() {
  const menu = ["About Us", "WebATL", "Accelerator", "Blog", "Contact"];

  return (
    <TopNav>
      <img src={logo} alt="logo" />
      <div className="menu">
        {menu.map((item, index) => (
          <p className="menuitem" key={index} id={item}>
            {item}
          </p>
        ))}
      </div>
    </TopNav>
  );
}

export default TopBar;
