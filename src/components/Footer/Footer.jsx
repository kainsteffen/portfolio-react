import React, { Component } from "react";
import "./Footer.scss";
import arrowUpIcon from "./images/arrow_up.svg";
import xingLogo from "./images/xing-logo.svg";
import linkedinLogo from "./images/linkedin-logo.svg";
import githubLogo from "./images/github-logo.svg";

class Footer extends Component {
  handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  render() {
    return (
      <footer className="footer-container">
        <address className="contact-section">
          <div>
            Khanh Steffen
            <br />
            Software Developer
          </div>
          <div>
            Berlin, Germany
            <br />
            13055, Lichtenberg
          </div>
          <div>
            <a href="tel:0176 4388 4355">+ 0176 4388 4355</a>
            <br />
            <a href="mailto:khanhsteffen@gmail.com">khanhsteffen@gmail.com</a>
          </div>
          <div className="contact-section-spacer" />
          <div className="social-media-links">
            <a href="https://github.com/kainsteffen">
              <img src={githubLogo} alt="Github logo" />
            </a>
            <a href="https://www.linkedin.com/in/khanh-steffen/">
              <img src={linkedinLogo} alt="Linkedin logo" />
            </a>
            <a href="https://www.xing.com/profile/TranDuyKhanh_Steffen">
              <img src={xingLogo} alt="Xing logo" />
            </a>
          </div>
        </address>
        <span className="copyright-text">
          {`Designed and Coded by Khanh Steffen © ${new Date().getFullYear()} `}
        </span>
        <button
          type="button"
          onClick={this.handleClick}
          className="scroll-top-button"
        >
          <img src={arrowUpIcon} alt="Arrow up" />
        </button>
      </footer>
    );
  }
}

export default Footer;
