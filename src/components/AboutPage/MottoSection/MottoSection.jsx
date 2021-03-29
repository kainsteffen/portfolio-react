import React, { Component } from "react";
import "./MottoSection.css";
import SectionHeader from "../../SectionHeader/SectionHeader";
import arrowRightIcon from "./images/arrow-right.svg";
import brushIcon from "./images/brush.svg";
import wrenchIcon from "./images/wrench.svg";
import clipBoardIcon from "./images/clipboard.svg";

class MottoSection extends Component {
  render() {
    return (
      <section className="motto-section">
        <SectionHeader text="My Workflow" />
        <div className="motto-section-content">
          <MottoCard
            index="01"
            title="Design"
            description="I have a keen eye for aesthetics and am always in pursuit for the most visually pleasing product."
            image={brushIcon}
          />
          <img
            src={arrowRightIcon}
            className="motto-connector"
            alt="Arrow right"
          />
          <MottoCard
            index="02"
            title="Develop"
            description="I strive for understandable systems that are consistently extensible and improveable."
            image={wrenchIcon}
          />
          <img
            src={arrowRightIcon}
            className="motto-connector"
            alt="Arrow right"
          />
          <MottoCard
            index="03"
            title="Deliver"
            description="I value products that offer quality experiences but are nevertheless finished in a timely manner."
            image={clipBoardIcon}
          />
        </div>
      </section>
    );
  }
}

function MottoCard(props) {
  return (
    <div className="motto">
      <div className="motto-header">
        <h4>
          {props.index}
          <br />
          {props.title}
        </h4>
        <img src={props.image} alt="Icon" />
      </div>
      <div className="motto-description">{props.description}</div>
    </div>
  );
}

export default MottoSection;
