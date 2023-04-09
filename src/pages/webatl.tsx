import React from "react";
import { FlexBox } from "../styles/styles";
import "../styles/webatl.scss";
import building from "../images/building.webp";
import rightIcon from "../images/right icon.webp";
import leftIcon from "../images/left icon.webp";
import bg from "../images/bg.webp";
import stars from "../images/stars.webp";
import death from "../images/death.webp";
import Partners from "../components/partners";
import ContactUs from "../components/contactUs";
import HeaderBox from "../components/header";

interface myProps {
  num: string;
  img: string;
  name: string;
  color: string;
}
const Card = ({ num, name, img, color }: myProps) => {
  return (
    <div className="card">
      <div className="img-con">
        <img src={img} alt="building" />
      </div>{" "}
      <div className="text">
        <h6>{num}</h6>
        <h4 className={color}>{name}</h4>
      </div>
    </div>
  );
};
const ScrollCard = () => {
  return (
    <div className="card">
      <img src={death} className="dp" alt="dp" />
      <div className="text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
        <img src={stars} alt="stars" />
      </div>
    </div>
  );
};

function Webatl() {
  return (
    <div className="holder">
      <HeaderBox title="Web3ATL" />
      <section id="metrics">
        <h1>
          Success <span>Metrices</span>
        </h1>
        <div className="scroller">
          <FlexBox>
            <Card num="500 +" name="Attendances" img={building} color="blue" />
            <Card
              num="11 +"
              name="Universities"
              img={building}
              color="purple"
            />
            <Card num="$10,000" name="Prizes" img={building} color="yellow" />
          </FlexBox>
        </div>
      </section>
      <section id="carousel">
        <div
          className="carousel"
          style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
        >
          <div className="clickable">
            <img src={leftIcon} alt="" />
          </div>
          <div className="main">
            <h2>Welcome To Web3 ATL</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="clickable">
            <img src={rightIcon} alt="" />
          </div>
        </div>
      </section>
      <section id="testimony">
        <h2>Testimonials</h2>
        <div className="scroller">
          <FlexBox>
            <ScrollCard />
            <ScrollCard />
            <ScrollCard />
            <ScrollCard />
          </FlexBox>
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
