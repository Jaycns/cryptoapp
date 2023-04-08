import React from "react";
import "../styles/landing.scss";
import bg from "../images/bg.webp";
import group5 from "../images/Group 5.webp";
import left from "../images/left.webp";
import leftBot from "../images/left bot.webp";
import right from "../images/right.webp";
import rightBot from "../images/right bot.webp";
import TopBar from "../components/topbar";
import Sidebar from "./sidebar";

function Layout({ children }: any) {
  return (
    <div className="container">
      <img src={bg} className="bg" alt="background" />
      <div className="blur"></div>
      <img src={group5} className="blur-img" alt="bg" />
      <img src={left} className="left-blur" alt="bg" />
      <img src={right} className="right-blur" alt="bg" />
      <img src={leftBot} className="left-bot" alt="bg" />
      <img src={rightBot} className="right-bot" alt="bg" />
      <div className="big-flex">
        <div className="margin-box">
          <TopBar />
          <Sidebar />
          <main>{children}</main>
          <footer>
            <TopBar />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Layout;
