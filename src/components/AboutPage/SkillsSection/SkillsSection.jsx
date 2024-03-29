import React, { Component } from "react";
import "./SkillsSection.scss";
import SectionHeader from "../../SectionHeader/SectionHeader";
import TagsList from "../../TagsList/TagsList";

class SkillsSection extends Component {
  render() {
    return (
      <section className="skills-section">
        <SectionHeader text="Things I work with" />
        <div className="skills-section-content">
          <TagsList
            title="Technologies"
            skills={[
              "Java",
              "C#",
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Flutter",
              "Dart",
              "Python",
            ]}
          />
          <TagsList
            title="Tools"
            skills={[
              "Unity3D",
              "Visual Studio",
              "Figma",
              "Android Studio",
              "XCode",
              "GitHub",
              "GitLab",
              "Jira / Trello",
              "Slack / Microsoft Teams",
              "Word",
              "Excel",
              "PowerPoint",
            ]}
          />
          <TagsList
            title="Others"
            skills={[
              "English",
              "German",
              "Vietnamese",
              "Design",
              "Scrum",
              "Quality Assurance",
            ]}
          />
        </div>
      </section>
    );
  }
}

export default SkillsSection;
