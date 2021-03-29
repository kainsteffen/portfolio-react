import React, { Component } from "react";
import "./AboutPage.css";
import AboutSection from "./AboutSection/AboutSection";
import MottoSection from "./MottoSection/MottoSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        <main>
          <AboutSection />
          <MottoSection />
          <SkillsSection />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
