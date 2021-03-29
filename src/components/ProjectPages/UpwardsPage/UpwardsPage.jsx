import React, { Component } from "react";
import "../ProjectPage.css";
import SectionHeader from "../../SectionHeader/SectionHeader";
import Footer from "../../Footer/Footer";
import TagsList from "../../TagsList/TagsList";
import BulletList from "../../BulletList/BulletList";
import CustomButton from "../../CustomButton/CustomButton";

class UpwardsPage extends Component {
  handleAppStoreButtonPress = () => {
    window.open(
      "https://itunes.apple.com/de/app/upwards-arcade-jumper/id1223668803?l=en&mt=8"
    );
  };

  handlePlayStoreButtonPress = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.KAIN.Upwards"
    );
  };

  render() {
    return (
      <>
        <main>
          <SectionHeader text="Upwards!" />
          <article className="project-page">
            <img
              src={require("./images/upwards-thumbnail.png")}
              className="project-page-header-image"
              alt="Upwards thumbnail"
            />
            <div>
              <h4 className="project-page-subtitle">2017 - Personal Project</h4>
              <TagsList
                title="Technologies:"
                skills={["Unity 3D", "C#", "AdMob"]}
              />
              <p>
                Upwards! is a free, casual mobile game that challenges your
                dexterity and reflexes. The game has so far amassed 40.000+
                downloads on both iOS and Android.
                <br />
                <br />
                Players increase their score by making their way up with
                walljumping while avoiding obstacles. They are driven to
                complete on the online leaderboards to see who can climb the
                highest!
              </p>
              <BulletList
                title="Features:"
                items={[
                  "Google Play Games Integration",
                  "Google AdMob advertising",
                  "Leaderboards, Achievements, In-App purchases",
                  "customizable player character and color themes",
                  "adaptive game difficulty and dynamic level generation",
                  "simple, intuitive one-handed controls",
                ]}
              />
              <div className="project-page-links">
                <CustomButton
                  label="App Store"
                  leadingIcon={require("../images/apple-logo.svg")}
                  onPress={this.handleAppStoreButtonPress}
                />

                <CustomButton
                  label="Google Play"
                  leadingIcon={require("../images/android-logo.svg")}
                  onPress={this.handlePlayStoreButtonPress}
                />
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </>
    );
  }
}

export default UpwardsPage;
