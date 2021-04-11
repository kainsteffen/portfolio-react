import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BulletList from "../BulletList/BulletList";
import Footer from "../Footer/Footer";
import SectionHeader from "../SectionHeader/SectionHeader";
import TagsList from "../TagsList/TagsList";
import CustomButton from "../CustomButton/CustomButton";
import "./ProjectPage.scss";
import projects from "./content";
import appleLogo from "./images/apple-logo.svg";
import androidLogo from "./images/android-logo.svg";
import githubLogo from "./images/github-logo.svg";
import websiteLogo from "./images/website-logo.svg";

export default function ProjectPage() {
  const params = useParams();
  const project = projects[params.id];

  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    setLoading(true);
    const importThumbnail = async () => {
      try {
        const importedThumbnail = await import(`./images/${project.thumbnail}`);
        setThumbnail(importedThumbnail.default);
      } catch (e) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    importThumbnail();
  }, []);

  const handleButtonPress = (event, url) => {
    window.open(url);
  };

  return (
    <>
      <main>
        <SectionHeader text={project.name} />
        <article className="project-page">
          {!loading ? (
            <img
              src={thumbnail}
              className="project-page-header-image"
              alt="thumbnail"
            />
          ) : (
            <div className="project-page-header-image project-page-skeleton" />
          )}
          <div>
            <h4 className="project-page-subtitle">
              {`${project.date} - ${project.type}`}
            </h4>
            <TagsList skills={project.tags} />
            <p>
              {project.shortDescription}
              <br />
              <br />
              {project.description}
            </p>
            <BulletList title="Features:" items={project.features} />
            <div className="project-page-links">
              {project.websiteUrl && (
                <CustomButton
                  label="Website"
                  leadingIcon={websiteLogo}
                  onPress={(event) =>
                    handleButtonPress(event, project.websiteUrl)
                  }
                />
              )}
              {project.gitHubUrl && (
                <CustomButton
                  label="GitHub"
                  leadingIcon={githubLogo}
                  onPress={(event) =>
                    handleButtonPress(event, project.gitHubUrl)
                  }
                />
              )}
              {project.appStoreUrl && (
                <CustomButton
                  label="App Store"
                  leadingIcon={appleLogo}
                  onPress={(event) =>
                    handleButtonPress(event, project.appStoreUrl)
                  }
                />
              )}
              {project.playStoreUrl && (
                <CustomButton
                  label="Google Play"
                  leadingIcon={androidLogo}
                  onPress={(event) =>
                    handleButtonPress(event, project.playStoreUrl)
                  }
                />
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
