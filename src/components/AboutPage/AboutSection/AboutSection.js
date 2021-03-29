import React, { Component } from "react";
import "./AboutSection.css";
import SectionHeader from "../../SectionHeader/SectionHeader.js";
import CustomButton from "../../CustomButton/CustomButton.js";

class AboutSection extends Component {
  render() {
    return (
      <section className="about-section">
        <SectionHeader text="About Me" />
        <div className="about-section-container">
          <img src={require("./images/profile-picture.jpg")} alt="Profile" />
          <div className="about-section-content">
            <h4>Khanh Steffen</h4>
            <p>
              I'm a software developer specialised in mobile application, game
              and web development based in Berlin, Germany. I am currently
              pursuing my Bachelor's Degree in International Media Computer
              Science at the Hochschule für Technik und Wirtschaft. A relentless
              work attitude striving for quality products that people enjoy and
              a critical attention to detail are what define me.
            </p>
            <div className="download-button-container">
              <CustomButton
                label={"Download Resume"}
                onPress={this.handleDownloadButtonPress}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  handleDownloadButtonPress() {
    window.open(
      "https://drive.google.com/uc?export=download&id=111EQ18gJFZNA9ONQzHbK2evu1ybE6M32"
    );
  }
}

export default AboutSection;
