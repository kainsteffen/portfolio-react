import React, { Component } from "react";
import "./Header.scss";
import BallGridAnimation from "../../BallGridAnimation/BallGridAnimation";
import arrowDownIcon from "./images/arrow-down.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { componentHeight: 0 };
  }

  componentDidMount() {
    const height = document.getElementById("header-container").clientHeight;
    const componentHeight = height + 0.15 * height;
    this.setState({ componentHeight });
  }

  handleArrowDownButtonPress = () => {
    if (window.pageYOffset < this.state.componentHeight)
      window.scrollTo({
        top: this.state.componentHeight,
        left: 0,
        behavior: "smooth",
      });
  };

  render() {
    return (
      <div id="header-container">
        <div className="header-animation-container">
          <BallGridAnimation
            size={100}
            rows={3}
            columns={3}
            emptyStartPosition={{ x: 2, y: 2 }}
            animationSpeed={500}
            animationDelay={1000}
          />
        </div>
        <div className="header-quote fadeIn-slideInFromBelow">
          <div className="header-titles">
            <h1>Hello, I&apos;m Khanh</h1>
            <h1 className="wave">👋</h1>
            <h2> I&apos;m good at pushing pixels around the screen.</h2>
          </div>
        </div>
        {window.pageYOffset < this.state.componentHeight && (
          <button
            type="button"
            className="arrow-down-button fadeIn"
            onClick={this.handleArrowDownButtonPress}
          >
            <img src={arrowDownIcon} alt="Arrow down" className="fadeIn" />
          </button>
        )}
      </div>
    );
  }
}

export default Header;
