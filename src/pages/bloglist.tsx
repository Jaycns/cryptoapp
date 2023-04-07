import React from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../components/header";

const PageCard = () => {
  return (
    <div className="page-card">
      <img src="" alt="purple-bg" />
      <div className="title-box">
        <h3>My freeform page title</h3>
        <p>April,2023</p>
        <div className="num">
          <img src="" alt="" />
          <h3>5</h3>
        </div>
        <p>Authored by John</p>
      </div>
    </div>
  );
};

function Bloglist() {
  return (
    <div>
      <HeaderBox title="Blog List" />
      <div className="grid-con">
        <PageCard />
        <PageCard />
        <PageCard />
        <PageCard />
        <PageCard />
        <PageCard />
      </div>
    </div>
  );
}

export default Bloglist;
