import React, { useContext } from "react";
import AppContext from "../context/context";
import { Link } from "react-router-dom";
import { SideBar, Blur } from "../styles/styles";

function Sidebar() {
  const { menu, navActive, handleClick } = useContext(AppContext);
  return (
    <>
      <SideBar className={menu ? "" : "sidebar"}>
        <div className="box">
          <Link
            id="about"
            to="about-us"
            className={`${navActive === "about" ? "active" : ""}`}
            onClick={handleClick}
          >
            About us
          </Link>
          <Link
            to="webatl"
            id="webatl"
            onClick={handleClick}
            className={`${navActive === "webatl" ? "active" : ""}`}
          >
            WebATL
          </Link>
          <Link
            to="accelerator"
            id="accelerator"
            onClick={handleClick}
            className={`${navActive === "accelerator" ? "active" : ""}`}
          >
            Accelerator
          </Link>
          <Link
            to="blog"
            id="blog"
            onClick={handleClick}
            className={`${navActive === "blog" ? "active" : ""}`}
          >
            Blog
          </Link>
          <Link
            to="contact"
            id="contact"
            onClick={handleClick}
            className={`${navActive === "contact" ? "active" : ""}`}
          >
            Contact
          </Link>
        </div>
      </SideBar>
      {menu && (
        <Blur>
          <div className="non"></div>
        </Blur>
      )}
    </>
  );
}

export default Sidebar;
