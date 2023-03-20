import React from "react";
import "../styles/landing.scss";
import { Button } from "../styles/styles";
import group6 from "../images/Group 6.webp";

function ContactUs() {
  return (
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
  );
}

export default ContactUs;
