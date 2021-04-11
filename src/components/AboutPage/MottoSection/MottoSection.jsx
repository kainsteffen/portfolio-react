import React, { Component } from "react";
import "./MottoSection.scss";
import SectionHeader from "../../SectionHeader/SectionHeader";
import brushIcon from "./images/brush.svg";
import wrenchIcon from "./images/wrench.svg";
import clipBoardIcon from "./images/clipboard.svg";

class MottoSection extends Component {
  render() {
    return (
      <section className="motto-section">
        <SectionHeader text="My Methodology" />
        <div className="motto-section-content">
          <MottoCard
            index="01"
            title="Design"
            description="I have a keen eye for aesthetics and am always in pursuit for the most visually pleasing product."
            image={brushIcon}
          />
          <div className="divider" />
          <MottoCard
            index="02"
            title="Develop"
            description="I strive for understandable systems that are consistently extensible and improveable."
            image={wrenchIcon}
          />
          <div className="divider" />
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
        <div className="motto-img">
          <img src={props.image} alt="Icon" />
        </div>
        <h2>{props.title}</h2>
      </div>
      <p className="motto-description">{props.description}</p>
    </div>
  );
}

export default MottoSection;
