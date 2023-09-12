import "./Footer.css";
// import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://twitter.com/NoSecondChance7"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a
        href="https://web.facebook.com/profile.php?id=100007507664789"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-facebook-f"></i>
      </a>
      <a
        href="https://www.instagram.com/tracepath/"
        target="_blank"
        rel="noreferrer"
      ><i className="fa-brands fa-instagram"></i></a>
      <a href="https://github.com/lcim" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  ); 
}
