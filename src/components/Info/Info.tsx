import "./Info.css";
import { FaEnvelope } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
// import React from "react";

export default function Info() {
  return (
    <div className="info flex">
      {/* <div className="photo__wrapper"> */}
      <img
        src="https://i.postimg.cc/x8D1rwMc/PASSPORT-CHIADI3.png"
        alt="Profile picture"
      />
      {/* </div> */}
      <div className="intro__wrapper">
        <div className="intro flex">
          <h2 className="name">LEONARD MBIBI</h2>
          <h3 className="profession margin2">Frontend developer</h3>
          <h4 className="website margin2">gregobyte.com</h4>
        </div>

        <div className="contact flex margin1 ">
          <a
            href="mailto:lcim1104@gmail.com"
            className="my__email"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-email flex button">
              <FaEnvelope />
              Email
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/leonard-mbibi-9b57149/"
            target="_blank"
            rel="noreferrer"
            className="toLinkedIn"
          >
            <div className="contact-linkedIn flex button">
              <BsLinkedin />
              LinkedIn
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
