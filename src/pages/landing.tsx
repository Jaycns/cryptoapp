import React from "react";
import "../styles/landing.scss";
import bg from "../images/bg.webp";
import logo from "../images/Logo.webp";
import { TopNav } from "../styles/landingstyles";
import circuit1 from "../images/circuit 1.webp";
import group6 from "../images/Group 6.webp";
import group5 from "../images/Group 5.webp";

const menu = ["About Us", "WebATL", "Accelerator", "Blog", "Contact"];
const Landing = () => {
  const colNum: string = "10";
  const rollNum: string = "20";
  return (
    <div className="container">
      <img src={bg} className="bg" alt="background" />
      <div className="blur"></div>
      <img src={group5} className="blur-img" alt="bg" />

      <div className="margin-box">
        <section id="header">
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
          <main>
            <div className="text">
              <h1>Build Inform Advance</h1>
              <p className="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit inventore omnis nisi excepturi id debitis
                consequuntur aliquam iusto. Porro, quisquam.
              </p>
              <form>
                <div className="btn">
                  <p>Apply For Accelerator</p>
                </div>
                <div className="input-box">
                  <input type="text" />
                </div>
              </form>
            </div>
            <img src={circuit1} alt="animated block" />
          </main>
        </section>
        <section id="hero-2">
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
            <div className="btn">
              <p>View Detail</p>
            </div>
          </div>
        </section>
        <section id="hero-3">
          <h1>
            Our <span>Vertical</span>
          </h1>
          <div className="flex-box">
            <div className="block-1">
              <img src="" alt="topimg" />
              <h3>Education</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, possimus. Natus accusamus non blanditiis a
                laudantium consectetur consequuntur! Nam, vero?
              </p>
              <div className="btn">
                <p>Read More Detail</p>
              </div>
            </div>
            <div className="block-1">
              <img src="" alt="topimg" />
              <h3>Governance</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, possimus. Natus accusamus non blanditiis a
                laudantium consectetur consequuntur! Nam, vero?
              </p>
              <div className="btn">
                <p>Read More Detail</p>
              </div>
            </div>
            <div className="block-1">
              <img src="" alt="topimg" />
              <h3>Education</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, possimus. Natus accusamus non blanditiis a
                laudantium consectetur consequuntur! Nam, vero?
              </p>
              <div className="btn">
                <p>Read More Detail</p>
              </div>
            </div>
            <div className="block-1">
              <img src="" alt="topimg" />
              <h3>GOvernance</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, possimus. Natus accusamus non blanditiis a
                laudantium consectetur consequuntur! Nam, vero?
              </p>
              <div className="btn">
                <p>Read More Detail</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1>Our Partners</h1>
          <div className="flex-box">
            <img src="" alt="blockchain" />
            <img src="" alt="blockchain" />
            <img src="" alt="blockchain" />
            <img src="" alt="blockchain" />
          </div>
        </section>
        <section>
          <div className="flex-box">
            <h1>How to use Web3ATL</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              doloremque nobis accusamus qui a recusandae harum et praesentium
              consequatur tempora, minima, ducimus repellat aspernatur in illum,
              voluptates dolores aperiam. Magni vero velit quisquam dignissimos
              nihil quia quo voluptatibus saepe natus?
            </p>
            <div className="btn">
              <p>View Details</p>
            </div>
            <img src="" alt="circuit-box" />
          </div>
        </section>
        <section id="contact-us">
          <div className="flex-box">
            <img src="" alt="circits" />
            <div className="contact-box">
              <form className="input-box">
                <input type="text" name="" id="" />
                <textarea name="" id="" cols={10} rows={20}></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </section>
        <footer id="footer">
          <img src="" alt="logo" />
          <div className="menu">
            {menu.map((item) => (
              <p className="">{item}</p>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
