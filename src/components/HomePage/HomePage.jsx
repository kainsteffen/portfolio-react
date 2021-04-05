import React, { Component } from "react";
import "./HomePage.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import Header from "./Header/Header";
import Footer from "../Footer/Footer";
import purchaseTrackerThumbnail from "./images/purchase-tracker-thumbnail.png";
import purchaseTrackerIcon from "./images/purchase-tracker-logo.svg";

import upwardsThumbnail from "./images/upwards-thumbnail.png";
import upwardsIcon from "./images/upwards.png";

import overlaysThumbnail from "./images/overlays-thumbnail.png";
import overlaysIcon from "./images/overlays.svg";

import polywarThumbnail from "./images/polywar.jpg";
import polywarIcon from "./images/polywar-logo.png";

import astendoThumbnail from "./images/astendo-event-thumbnail.png";
import astendoIcon from "./images/astendo-event-logo.png";

class HomePage extends Component {
  render() {
    return (
      <>
        <main>
          <Header />
          <SectionHeader text="My Projects" />
          <section className="project-section">
            <ProjectCard
              imgSrc={purchaseTrackerThumbnail}
              logoSrc={purchaseTrackerIcon}
              cardTitle="Purchase Tracker"
              cardDescription="Mobile App | Finance"
              routerPath="/purchase-tracker"
            />
            <ProjectCard
              imgSrc={upwardsThumbnail}
              logoSrc={upwardsIcon}
              cardTitle="Upwards!"
              cardDescription="Mobile Game | Casual"
              routerPath="/upwards"
            />
            <ProjectCard
              imgSrc={overlaysThumbnail}
              logoSrc={overlaysIcon}
              cardTitle="Overlays"
              cardDescription="Mobile Game | Educational"
              routerPath="/overlays"
            />

            <ProjectCard
              imgSrc={astendoThumbnail}
              logoSrc={astendoIcon}
              cardTitle="astendo Event"
              cardDescription="Mobile App | Events"
              routerPath="/astendo-event"
            />

            <ProjectCard
              imgSrc={polywarThumbnail}
              logoSrc={polywarIcon}
              cardTitle="Polywar"
              cardDescription="Mobile Game | Shooter"
              routerPath="/polywar"
            />
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default HomePage;
