import React from "react";
import { Button, Header } from "../styles/styles";
import "../styles/webatl.scss";
import building from "../images/building.webp";
import rightIcon from "../images/right icon.webp";
import leftIcon from "../images/left icon.webp";
import bg from "../images/bg.webp";
import Partners from "../components/partners";
import ContactUs from "../components/contactUs";

function Webatl() {
  return (
    <div className="holder">
      <Header>
        <main>
          <h1>Web3ATL</h1>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <form>
            <Button>
              <p>Try Web3ATL Now</p>
            </Button>
            <Button>
              <p>Try Web3ATL Now</p>
            </Button>
          </form>
        </main>
      </Header>
      <section id="metrics">
        <h2>Success Metrices</h2>
        <div className="flex-box">
          <div className="card">
            <div className="img-con">
              <img src={building} alt="building" />
            </div>{" "}
            <div className="text">
              <h6>500 +</h6>
              <h4 className="blue">Attendances</h4>
            </div>
          </div>
          <div className="card">
            <div className="img-con">
              <img src={building} alt="building" />
            </div>{" "}
            <div className="text">
              <h6>11 +</h6>
              <h4 className="purple">Universities</h4>
            </div>
          </div>
          <div className="card">
            <div className="img-con">
              <img src={building} alt="building" />
            </div>
            <div className="text">
              <h6>$10,000</h6>
              <h4 className="yellow">Prizes</h4>
            </div>
          </div>
        </div>
      </section>
      <section
        id="carousel"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div className="clickable">
          <img src={leftIcon} alt="" />
        </div>
        <div className="main">
          <h2>Welcome To Web3 ATL</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="clickable">
          <img src={rightIcon} alt="" />
        </div>
      </section>
      <div className="margin-gap">
        <Partners />
      </div>
      <ContactUs />
    </div>
  );
}

export default Webatl;
