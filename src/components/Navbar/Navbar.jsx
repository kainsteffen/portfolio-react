import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";
import HamburgerButton from "./HamburgerButton/HamburgerButton";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import logo from "./images/logo.svg";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isScrolled: false, isToggled: false };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleClick = () => {
    this.setState((state) => ({
      isToggled: !state.isToggled,
    }));
  };

  handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0) {
      this.setState({
        // isScrolled: true,
      });
    } else if (scrollTop === 0) {
      this.setState({
        // isScrolled: false,
      });
    }
  };

  render() {
    if (!this.state.isScrolled) {
      return (
        <nav className="navbar fadeIn">
          <h1>
            <Link to="/">
              <img src={logo} className="logo" alt="Khanh Steffen" />
            </Link>
          </h1>
          <ul className="navbar-right">
            <Link
              to="/"
              id={this.props.location.pathname === "/" ? "active" : undefined}
            >
              work
            </Link>
            <Link
              to="/about"
              id={
                this.props.location.pathname === "/about" ? "active" : undefined
              }
            >
              about
            </Link>
          </ul>
          <HamburgerButton
            isCollapsed={this.state.isToggled}
            onClick={this.handleClick}
          />
          <MobileNavbar
            isToggled={this.state.isToggled}
            onClick={this.handleClick}
          />
        </nav>
      );
    }
    return <div />;
  }
}

export default withRouter(Navbar);
