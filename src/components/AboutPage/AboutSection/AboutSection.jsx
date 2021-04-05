import React, { Component } from "react";
import "./AboutSection.css";
import CustomButton from "../../CustomButton/CustomButton";
import profilePicture from "./images/profile-picture.jpg";

class AboutSection extends Component {
  handleDownloadButtonPress = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=111EQ18gJFZNA9ONQzHbK2evu1ybE6M32"
    );
  };

  render() {
    return (
      <section className="about-section">
        <div className="about-section-container">
          <img src={profilePicture} alt="Profile" />
          <div className="about-section-content">
            <h4>Hi there, I&apos;m Khanh Steffen!</h4>

            <p>
              I&apos;m a software developer who is passionate about mobile, game
              and web application development based in Berlin, Germany. I am
              currently pursuing my Bachelor&apos;s Degree in International
              Media Computer Science at the Hochschule für Technik und
              Wirtschaft. A relentless work attitude striving for quality
              products that people enjoy and a critical attention to detail are
              what define me.
            </p>
            <div className="download-button-container">
              <CustomButton
                label="Download Resume"
                onPress={this.handleDownloadButtonPress}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSection;
