import React, { Component } from "react";
import "../ProjectPage.css";
import SectionHeader from "../../SectionHeader/SectionHeader";
import Footer from "../../Footer/Footer";
import TagsList from "../../TagsList/TagsList";
import BulletList from "../../BulletList/BulletList";

class PolywarPage extends Component {
  handleAppStoreButtonPress = () => {
    window.open(
      "https://itunes.apple.com/de/app/purchase-tracker/id1457110640?l=en&mt=8"
    );
  };

  handlePlayStoreButtonPress = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.KAIN.purchasetracker"
    );
  };

  render() {
    return (
      <>
        <main>
          <SectionHeader text="Polywar" />
          <article className="project-page">
            <img
              src={require("./images/polywar-thumbnail.jpg")}
              className="project-page-header-image"
              alt="Purchase Tracker thumbnail"
            />
            <div>
              <h4 className="project-page-subtitle">2019 - Personal Project</h4>
              <TagsList title="Technologies:" skills={["Unity 3D", "C#"]} />
              <p>
                Polywar is an arcade, isometric shooter game for iOS and
                Android.
                <br />
                <br />
                It is currently still under development.
              </p>
              <BulletList
                title="Features:"
                items={[
                  "Google Admob and Play Games integration",
                  "randomly generated levels",
                  "customizable player characters and loadouts",
                  "original game soundtrack",
                  "linear progression system",
                  "varied, challenging enemy AIs",
                  "custom UI system",
                ]}
              />
              {/*
                            <div className='project-page-links'>
                                <CustomButton
                                    label='App Store'
                                    leadingIcon={require('../images/apple-logo.svg')}
                                    onPress={this.handleAppStoreButtonPress.bind(this)}
                                />

                                <CustomButton
                                    label='Google Play'
                                    leadingIcon={require('../images/android-logo.svg')}
                                    onPress={this.handlePlayStoreButtonPress.bind(this)}
                                />
                            </div>
                            */}
            </div>
          </article>
        </main>
        <Footer />
      </>
    );
  }
}

export default PolywarPage;
