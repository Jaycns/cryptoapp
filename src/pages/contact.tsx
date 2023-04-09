import React from "react";
import { Link } from "react-router-dom";
import { phSize } from "./landing";
import { Button } from "../styles/styles";
import { FaLongArrowAltRight } from "react-icons/fa";
import "../styles/error.scss";
import babs from "../images/babs.webp";

const Contact = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div className="error-con">
        <img src={babs} alt="work" className="emoji" />
        <div className="text-hol">
          <h1>{`Oops${!phSize ? ", Almost done" : ""}!`}</h1>
          <p>
            This project's information is all-over-the-place.
            <br /> I am working hard to present it beutifully and will update it
            soon
          </p>
        </div>
        <div className="btn-group">
          <a
            href="https://jaycns.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="be"
          >
            {" "}
            <Button className="btn">My portfolio</Button>
          </a>
          <Link to="/">
            <Button className=" btn btn-fill">
              {phSize && (
                <FaLongArrowAltRight style={{ transform: "scale(-1)" }} />
              )}
              Back to Home{" "}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
