import React from "react";
import "./styles/App.css";
import { animateScroll as Scroll } from "react-scroll";
import linkedin from "./img/social/linkedin.png";
import github from "./img/social/github.png";
import instagram from "./img/social/instagram.png";
import twitter from "./img/social/twitter.png";
import mailbox from "./img/social/mail.png";
import arrow from "./img/assets/arrow-up.png";

function Footer() {
  return (
    <footer>
      <div className="scroll-up">
        <a className="arrow-up" href="/#" onClick={Scroll.scrollToTop}>
          <img src={arrow} alt="arrow" />
        </a>
      </div>
      <div className="above-footer">
        <div className="social-links">
          <a
            className="social"
            href="https://www.linkedin.com/in/lestercardoz11/"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a className="social" href="https://twitter.com/lestercardoz11">
            <img src={twitter} alt="twitter" />
          </a>
          <a className="social" href="https://github.com/lestercardoz11">
            <img src={github} alt="github" />
          </a>
          <a
            className="social"
            href="https://www.instagram.com/lestercardoz11/"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a className="social" href="mailto:lestercardoz11@gmail.com">
            <img src={mailbox} alt="mail" />
          </a>
        </div>
      </div>
      <hr />
      <div className="footer">
        <div className="left">
          <p>
            © 2020{" "}
            <a href="https://www.linkedin.com/in/lestercardoz11/">
              Lester Cardoz
            </a>{" "}
            | All rights reserved.
          </p>
        </div>
        <div className="right">
          <p>
            Icons by <a href="https://icons8.com">Icons8</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
