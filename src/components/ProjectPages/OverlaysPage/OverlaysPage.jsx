import React, { Component } from "react";
import "../ProjectPage.css";
import SectionHeader from "../../SectionHeader/SectionHeader";
import Footer from "../../Footer/Footer";
import TagsList from "../../TagsList/TagsList";
import BulletList from "../../BulletList/BulletList";
import CustomButton from "../../CustomButton/CustomButton";

class OverlaysPage extends Component {
  handleAppStoreButtonPress = () => {
    window.open(
      "https://itunes.apple.com/de/app/purchase-tracker/id1457110640?l=en&mt=8"
    );
  };

  handlePlayStoreButtonPress = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.overlaysteam.overlays"
    );
  };

  render() {
    return (
      <>
        <main>
          <SectionHeader text="Overlays" />
          <article className="project-page">
            <img
              src={require("./images/overlays-thumbnail.png")}
              className="project-page-header-image"
              alt="Overlays thumbnail"
            />
            <div>
              <h4 className="project-page-subtitle">
                2018 - University Project
              </h4>
              <h4 className="project-page-subtitle">
                My Role: Project Lead, Lead Programmer
              </h4>
              <TagsList title="Technologies:" skills={["Flutter", "Dart"]} />
              <p>
                Overlays is an educational mobile game that was made as part of
                the IMI Showtime 2018 project convention from the HTW
                University. The game won both the jury&apos;s and
                community&apos;s choice awards for best Bachelor project of the
                show.
                <br />
                <br />
                The game aims to introduce the player to image processing
                concepts (i.e. various algorithms that Adobe Photoshop uses) in
                a laser puzzle format. Players move, rotate and reflect lasers
                to create new and exciting images.
              </p>
              <BulletList
                title="Features:"
                items={[
                  "Levels game mode: 50+ beautifully handcrafted puzzle levels",
                  "Time Attack game mode: Time-limited competitive puzzle solving",
                  "Sandbox game mode: Unrestricted level building",
                  "various image processing options e.g. additive/subtractive image blending, filters and more",
                  "custom UI with animated components",
                  "beautiful particle and screen effects",
                ]}
              />
              <div className="project-page-links">
                <CustomButton
                  label="Google Play"
                  leadingIcon={require("../images/apple-logo.svg")}
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

export default OverlaysPage;
