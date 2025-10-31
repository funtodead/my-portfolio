import React from "react";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section fade-section">
      <div className="skills-inner">
        <h2 className="skills-title">
           Skills  <span className="skills-sub">My Technical Level</span>
        </h2>

        <div className="skills-groups">
          {/* ===== Front-End ===== */}
          <div className="skills-box">
            <h3>Front-End</h3>
            <div className="skills-list">
              <Skill name="HTML" level="Expert" icon="html5" />
              <Skill name="CSS" level="Expert" icon="css3" />
              <Skill name="JavaScript" level="Intermediate" icon="javascript" />
              <Skill name="ReactJS" level="Expert" icon="react" />
              <Skill name="TailwindCSS" level="Beginner" icon="tailwindcss" />
              <Skill name="MaterialUI" level="Intermediate" icon="materialui" />
            </div>
          </div>

          {/* ===== Back-End ===== */}
          <div className="skills-box">
            <h3>Back-End</h3>
            <div className="skills-list">
              <Skill name="NodeJS" level="Expert" icon="nodejs" />
              <Skill name="ExpressJS" level="Intermediate" icon="express" />
              <Skill name="MongoDB" level="Intermediate" icon="mongodb" />
              <Skill name="Firebase" level="Intermediate" icon="firebase" />
            </div>
          </div>

          {/* ===== Programming & Others ===== */}
          <div className="skills-box">
            <h3>Programming & Others</h3>
            <div className="skills-list">
              <Skill name="TypeScript" level="Beginner" icon="typescript" />
              <Skill name="Python" level="Intermediate" icon="python" />
              <Skill name="Java" level="Expert" icon="java" />
              <Skill name="Git / GitHub" level="Intermediate" icon="github" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skill({ name, level, icon }) {
  return (
    <div className="skill-item">
      <div className="skill-info">
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
          alt={name}
          className="skill-icon"
        />
        <span className="skill-name">{name}</span>
      </div>
      <span className="skill-level">{level}</span>
    </div>
  );
}
