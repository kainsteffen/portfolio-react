import React, { Component } from "react";
import "./HomePage.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import Header from "./Header/Header";
import Footer from "../Footer/Footer";

class HomePage extends Component {
  render() {
    return (
      <>
        <main>
          <Header />
          <SectionHeader text="My Projects" />
          <section className="project-section">
            <ProjectCard
              imgSrc={require("./images/purchase-tracker-thumbnail.png")}
              logoSrc={require("./images/purchase-tracker-logo.svg")}
              cardTitle="Purchase Tracker"
              cardDescription="Mobile App | Finance"
              routerPath="/purchase-tracker"
            />
            <ProjectCard
              imgSrc={require("./images/upwards-thumbnail.png")}
              logoSrc={require("./images/upwards.png")}
              cardTitle="Upwards!"
              cardDescription="Mobile Game | Casual"
              routerPath="/upwards"
            />
            <ProjectCard
              imgSrc={require("./images/overlays-thumbnail.png")}
              logoSrc={require("./images/overlays.svg")}
              cardTitle="Overlays"
              cardDescription="Mobile Game | Educational"
              routerPath="/overlays"
            />
            {/*
            <ProjectCard
              imgSrc={require('./images/astendo-event-thumbnail.png')}
              logoSrc={require('./images/astendo-event-logo.png')}
              cardTitle='astendo Event'
              cardDescription='Mobile App | Events'
              routerPath='/astendo-event'
            />
            */}
            <ProjectCard
              imgSrc={require("./images/polywar.jpg")}
              logoSrc={require("./images/polywar-logo.png")}
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
