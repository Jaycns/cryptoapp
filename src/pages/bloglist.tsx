import React from "react";
import HeaderBox from "../components/header";
import star from "../images/star.webp";
import cardBg from "../images/card bg.webp";
import "../styles/bloglist.scss";

// interface myProps {
//   img: string;
// }
const PageCard = () => {
  return (
    <div className="page-card">
      <img src={cardBg} alt="purple-bg" className="bg" />
      <div className="title-box">
        <h3>My freeform page title</h3>
        <div className="num">
          <img src={star} className="star" alt="star" />
          <h3>5</h3>
        </div>
        <p>April,2023</p>

        <p>Authored by John</p>
      </div>
    </div>
  );
};

function Bloglist() {
  return (
    <div className="holder">
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
