import React from "react";
import "../styles/landing.scss";
import { Hero, Button } from "../styles/styles";
import circuit1 from "../images/circuit 1.webp";
import group6 from "../images/Group 6.webp";

import hat from "../images/hats.webp";
import building from "../images/building.webp";
import { FaLongArrowAltRight } from "react-icons/fa";
import ContactUs from "../components/contactUs";
import Partners from "../components/partners";

interface myProps {
  title: string;
  img: string;
}
export const phSize = window.matchMedia("(max-width: 768px)").matches;
const Block = ({ title, img }: myProps) => {
  return (
    <div className="block-1">
      <img src={img} className="hats" alt="topimg" />
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        possimus. Natus accusamus non blanditiis a laudantium consectetur
        consequuntur! Nam, vero?
      </p>
      <Button className="btn">
        <p>Read More Detail</p>
        {phSize && <FaLongArrowAltRight />}
      </Button>
    </div>
  );
};

const Landing = () => {
  //   const colNum: string = "10";
  //   const rollNum: string = "20";

  return (
    <div className="container">
      <section id="header">
        <main>
          <div className="text">
            <div className="scroll">
              <h1>Build Inform Advance</h1>
            </div>
            <p className="p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit inventore omnis nisi excepturi id debitis
              consequuntur aliquam iusto. Porro, quisquam.
            </p>
            <form>
              <Button>
                <p>Apply For Accelerator</p>
                {phSize && <FaLongArrowAltRight />}
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
              incidunt neque molestias similique laudantium ullam exercitationem
              deleniti magnam alias, totam asperiores vel praesentium animi
              earum doloribus? Quidem.
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
          <Block title="Education" img={hat} />
          <Block title="Governance" img={building} />
          <Block title="Education" img={hat} />
          <Block title="Governance" img={building} />
        </div>
      </section>
      <Partners />
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
              Magni vero velit quisquam dignissimos nihil quia quo voluptatibus
              saepe natus? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Id deleniti dolor fugit eveniet cumque corrupti repellat
              necessitatibus atque dolorem maxime!
            </p>
          </p>
          <Button className="btn">
            <p>View Details</p>
          </Button>
        </div>
        <img src={group6} alt="circuit-box" className="circuit" />
      </Hero>
      <ContactUs />
    </div>
  );
};

export default Landing;
