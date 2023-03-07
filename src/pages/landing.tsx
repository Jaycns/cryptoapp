import React from "react";
import "../styles/landing.scss";
import bg from "../images/bg.webp";
import { Hero, Button } from "../styles/landingstyles";
import circuit1 from "../images/circuit 1.webp";
import group6 from "../images/Group 6.webp";
import group5 from "../images/Group 5.webp";
import hat from "../images/hats.webp";
import building from "../images/building.webp";
import TopBar from "../components/ball";
import babs from "../images/babs.webp";
import block from "../images/block.webp";
import center from "../images/center.webp";

const Landing = () => {
  //   const colNum: string = "10";
  //   const rollNum: string = "20";
  return (
    <div className="container">
      <img src={bg} className="bg" alt="background" />
      <div className="blur"></div>
      <img src={group5} className="blur-img" alt="bg" />

      <div className="margin-box">
        <section id="header">
          <TopBar />
          <main>
            <div className="text">
              <h1>Build Inform Advance</h1>
              <p className="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit inventore omnis nisi excepturi id debitis
                consequuntur aliquam iusto. Porro, quisquam.
              </p>
              <form>
                <Button>
                  <p>Apply For Accelerator</p>
                </Button>
                <div className="input-box">
                  <input type="text" />
                </div>
              </form>
            </div>
            <img src={circuit1} alt="animated block" />
          </main>
        </section>
        <Hero>
          <img src={group6} className="circuit" alt="cloudatron" />
          <div className="text">
            <h1>
              What is <span>Web3ATL</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              officia reprehenderit pariatur quia minus. Illum nihil nostrum
              ducimus dolores debitis necessitatibus omnis dicta neque hic
              possimus, unde quo.{" "}
              <p className="next">
                Perferendis nisi amet veniam magni praesentium, libero impedit
                possimus aspernatur unde corporis illo! Ipsa aliquid voluptatum
                consequatur nulla aut quia. Amet, pariatur! Soluta quibusdam,
                incidunt neque molestias similique laudantium ullam
                exercitationem deleniti magnam alias, totam asperiores vel
                praesentium animi earum doloribus? Quidem.
              </p>
            </p>
            <Button className="btn">
              <p>View Detail</p>
            </Button>
          </div>
        </Hero>
        <section id="hero-3">
          <h1>
            Our <span>Vertical</span>
          </h1>
          <div className="flex-box">
            <div className="block-1">
              <img src={hat} className="hats" alt="topimg" />
              <h3>Education</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, possimus. Natus accusamus non blanditiis a
                laudantium consectetur consequuntur! Nam, vero?
              </p>
              <Button className="btn">
                <p>Read More Detail</p>
              </Button>
            </div>
            <div className="block-1">
              <img src={building} className="hats" alt="topimg" />
              <h3>Governance</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, possimus. Natus accusamus non blanditiis a
                laudantium consectetur consequuntur! Nam, vero?
              </p>
              <Button className="btn">
                <p>Read More Detail</p>
              </Button>
            </div>
            <div className="block-1">
              <img src={hat} className="hats" alt="topimg" />
              <h3>Education</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, possimus. Natus accusamus non blanditiis a
                laudantium consectetur consequuntur! Nam, vero?
              </p>
              <Button className="btn">
                <p>Read More Detail</p>
              </Button>
            </div>
            <div className="block-1">
              <img src={building} className="hats" alt="topimg" />
              <h3>Governance</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, possimus. Natus accusamus non blanditiis a
                laudantium consectetur consequuntur! Nam, vero?
              </p>
              <Button className="btn">
                <p>Read More Detail</p>
              </Button>
            </div>
          </div>
        </section>
        <section id="hero-4">
          <h1>
            Our <span>Partners</span>
          </h1>
          <div className="flex-box">
            <img src={block} className="block" alt="blockchain" />
            <img src={center} className="block center" alt="blockchain" />
            <img src={babs} className="block babs" alt="blockchain" />
            <img src={block} className="block" alt="blockchain" />
            <img src={center} className="block center" alt="blockchain" />
          </div>
        </section>
        <Hero>
          <div className="text">
            <h1>
              How to use <span>Web3ATL</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              doloremque nobis accusamus qui a recusandae harum et praesentium
              consequatur tempora, minima, ducimus repellat aspernatur in illum,
              voluptates dolores aperiam.
              <p className="next">
                Magni vero velit quisquam dignissimos nihil quia quo
                voluptatibus saepe natus? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Id deleniti dolor fugit eveniet cumque
                corrupti repellat necessitatibus atque dolorem maxime!
              </p>
            </p>
            <Button className="btn">
              <p>View Details</p>
            </Button>
          </div>
          <img src={group6} alt="circuit-box" className="circuit" />
        </Hero>
        <section id="contact-us">
          <img src={group6} alt="circuit-box" className="circuit" />
          <div className="contact-box">
            <h1>Contact Us</h1>
            <form>
              <div className="input-box">
                <input type="text" name="" id="" />
              </div>
              <div className="input-box">
                <textarea name="" id="" cols={10} rows={20}></textarea>
              </div>
              {/* <button type="submit">Submit</button> */}
              <Button className="btn">
                <p>Submit</p>
              </Button>
            </form>
          </div>
        </section>
        <footer>
          <TopBar />
        </footer>
      </div>
    </div>
  );
};

export default Landing;
