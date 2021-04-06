import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./MobileNavbar.css";

function MobileNavbar(props) {
  return (
    <nav
      className={
        props.isToggled ? "mobile-navbar visible" : "mobile-navbar hidden"
      }
    >
      <ul className="center-container">
        <li>
          <Link
            to="/"
            id={props.location.pathname === "/" ? "active" : undefined}
            className={props.isToggled ? "visible" : "hidden"}
            onClick={props.onClick}
          >
            work
          </Link>
        </li>
        <div className="link-hider" />
        <li>
          <Link
            to="/about"
            id={props.location.pathname === "/about" ? "active" : undefined}
            className={props.isToggled ? "visible" : "hidden"}
            onClick={props.onClick}
          >
            about
          </Link>
        </li>
        <div className="link-hider" />
      </ul>
    </nav>
  );
}

export default withRouter(MobileNavbar);
