import React from "react";
import TiltedCard from "../components/Animations/TiltedCard.jsx";
import "../styles/Work.css";

const PROJECTS = [
  {
    title: "To-Do List (Coming Soon)",
    shot: "/shots/todo-preview.png", // update image when ready
    description:
      "A sleek task-management web app built for productivity and simplicity. Features task categorization, status tracking, and a smooth modern UI.",
    tags: ["react", "mongodb", "tailwindcss"],
    repo: "https://github.com/toharabergel/todo-list",
    live: "#", // coming soon, so placeholder
  },
  {
    title: "Running Chatbot (Coming Soon)",
    shot: "/shots/chatbot-preview.png",
    description:
      "An AI-powered chatbot that provides personalized running plans, tracks progress, and offers motivation and fitness insights in real-time.",
    tags: ["react", "openai", "express"],
    repo: "https://github.com/toharabergel/running-chatbot",
    live: "#",
  },
  {
    title: "My Portfolio",
    shot: "/shots/portfolio-preview.png",
    description:
      "A responsive personal portfolio showcasing my projects, skills, and background. Designed with custom React components, animations, and smooth UX.",
    tags: ["react", "vite", "tailwindcss"],
    repo: "https://github.com/toharabergel/portfolio",
    live: "https://toharabergel.dev",
  },
];


export default function Work() {
  return (
    <section id="work" className="work-section fade-section">
      <div className="work-wrap">
        <header className="work-head">
          <span className="eyebrow">My Work</span>
          <h2 className="work-title">Projects.</h2>
          <p className="work-sub">
            A selection of projects showcasing problem-solving, clean UI, and
            modern stacks. Each card includes a short overview plus links to the
            repository and live demo.
          </p>
        </header>

        <div className="work-grid">
          {PROJECTS.map((p) => (
            <article className="work-card" key={p.title}>
              {/* Preview */}
              <div className="shot-wrap">
                <TiltedCard
                  imageSrc={p.shot}
                  altText={`${p.title} preview`}
                  captionText={p.title}
                  containerHeight="230px"
                  containerWidth="100%"
                  imageHeight="230px"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  scaleOnHover={1.06}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                />
              </div>

              {/* Body */}
              <div className="work-body">
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">{p.description}</p>
              </div>

              {/* Footer */}
              <div className="work-footer">
                <div className="tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="actions">
                  <a
                    className="btn ghost"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} GitHub repository`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      width="18"
                      height="18"
                      focusable="false"
                    >
                      <path
                        fill="currentColor"
                        d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.27.82-.59V21c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.09 1.87 2.86 1.33 3.56 1.02.11-.8.43-1.33.77-1.64-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.47 11.47 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.44.38.83 1.13.83 2.28v3.38c0 .33.22.7.83.59A12 12 0 0 0 12 .5Z"
                      />
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a
                    className="btn solid"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} live site`}
                  >
                    Live
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
