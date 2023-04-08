import React from "react";
import rightIcon from "../images/right icon.webp";
import leftIcon from "../images/left icon.webp";
import death from "../images/death.webp";
import twitter from "../images/twitter.webp";
import linkedin from "../images/linkedin.webp";
import insta from "../images/insta.webp";
import "../styles/about.scss";

function Card({ abb }: any) {
  return (
    <section id="team">
      <h1>
        Our <span>{abb}</span>
      </h1>
      <div className="team-con">
        <img src={leftIcon} className="icon" alt="" />
        <div className="card-scroll">
          <div className="card-holder">
            <div className="card">
              <img src={death} className="dp" alt="dp" />
              <div className="text">
                <h5>Jaycn Jude</h5>
                <h2>Cofounder || CEO</h2>
              </div>
              <div className="socials">
                <img src={insta} alt="" className="social-icon" />
                <img src={twitter} alt="" className="social-icon" />
                <img src={linkedin} alt="" className="social-icon" />
              </div>
            </div>

            <div className="card">
              <img src={death} alt="dp" className="dp" />
              <div className="text">
                <h5>Jaycn Jude</h5>
                <h2>Cofounder || CEO</h2>
              </div>
              <div className="socials">
                <img src={insta} alt="" className="social-icon" />
                <img src={twitter} alt="" className="social-icon" />
                <img src={linkedin} alt="" className="social-icon" />
              </div>
            </div>

            <div className="card">
              <img src={death} alt="dp" className="dp" />
              <div className="text">
                <h5>Jaycn Jude</h5>
                <h2>Cofounder || CEO</h2>
              </div>
              <div className="socials">
                <img src={insta} alt="" className="social-icon" />
                <img src={twitter} alt="" className="social-icon" />
                <img src={linkedin} alt="" className="social-icon" />
              </div>
            </div>
          </div>
        </div>

        <img src={rightIcon} alt="" className="icon" />
      </div>
    </section>
  );
}

export default Card;
