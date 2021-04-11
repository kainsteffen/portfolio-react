import React, { Component } from "react";
import "./HomePage.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import Header from "./Header/Header";
import Footer from "../Footer/Footer";
import projects from "../ProjectPages/content";

class HomePage extends Component {
  render() {
    return (
      <>
        <main>
          <Header />
          <SectionHeader text="My Projects" />
          <section className="project-section">
            {Object.keys(projects).map((key, index) => {
              const project = projects[key];
              return (
                <ProjectCard
                  key={key}
                  index={index + 1}
                  project={project}
                  routerPath={`projects/${key}`}
                />
              );
            })}
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default HomePage;
