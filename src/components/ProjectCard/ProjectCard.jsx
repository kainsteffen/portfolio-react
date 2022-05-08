import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./ProjectCard.scss";
import TagsList from "../TagsList/TagsList";
import CustomButton from "../CustomButton/CustomButton";
import appleLogo from "../ProjectPages/images/apple-logo.svg";
import androidLogo from "../ProjectPages/images/android-logo.svg";
import githubLogo from "../ProjectPages/images/github-logo.svg";
import websiteLogo from "../ProjectPages/images/website-logo.svg";

export default function ProjectCard(props) {
  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    setLoading(true);

    const importImgs = async () => {
      try {
        const importedThumbnail = await import(
          `../ProjectPages/images/${props.project.thumbnail}`
        );
        const importedIcon = await import(
          `../ProjectPages/images/${props.project.logo}`
        );
        setThumbnail(importedThumbnail.default);
        setIcon(importedIcon.default);
      } catch (e) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    importImgs();
  }, []);

  const handleButtonPress = (event, link) => {
    event.stopPropagation();
    window.open(link);
  };

  return (
    <Link to={props.routerPath} className="project-card">
      <div
        className="project-card__container"
        style={{
          flexDirection: props.index % 2 === 0 ? "row-reverse" : "row",
        }}
      >
        {!loading && (
          <img
            src={thumbnail}
            className="project-card__image"
            alt="Thumbnail"
            style={{
              flexDirection: props.index % 2 === 0 ? "row-reverse" : "row",
              marginLeft: props.index % 2 === 0 ? "var(--space-md)" : 0,
              marginRight: props.index % 2 !== 0 ? "var(--space-md)" : 0,
            }}
          />
        )}
        <div className="project-card__content">
          <div className="project-card__header">
            {!loading && (
              <img src={icon} alt="Logo" className="project-card__logo" />
            )}
            <div>
              <h4 className="project-card__title">{props.project.name}</h4>
              <div className="project-card__subtitle">{props.project.type}</div>
            </div>
          </div>
          <div className="project-card__tags">
            <TagsList skills={props.project.tags} flat />
          </div>
          <p className="project-card__description">
            {props.project.shortDescription}
            <br />
            <br />
            {props.project.description}
          </p>

          <div className="project-card__buttons">
            {props.project.websiteUrl && (
              <>
                <div className="project-card__spacer" />
                <CustomButton
                  label="Website"
                  leadingIcon={websiteLogo}
                  onPress={(event) =>
                    handleButtonPress(event, props.project.websiteUrl)
                  }
                />
              </>
            )}
            {props.project.gitHubUrl && (
              <>
                <div className="project-card__spacer" />
                <CustomButton
                  label="GitHub"
                  leadingIcon={githubLogo}
                  onPress={(event) =>
                    handleButtonPress(event, props.project.gitHubUrl)
                  }
                />
              </>
            )}
            {props.project.appStoreUrl && (
              <>
                <div className="project-card__spacer" />
                <CustomButton
                  label="App Store"
                  leadingIcon={appleLogo}
                  onPress={(event) =>
                    handleButtonPress(event, props.project.appStoreUrl)
                  }
                />
              </>
            )}
            {props.project.appStoreUrl && (
              <>
                <div className="project-card__spacer" />
                <CustomButton
                  label="Google Play"
                  leadingIcon={androidLogo}
                  onPress={(event) =>
                    handleButtonPress(event, props.project.playStoreUrl)
                  }
                />
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
