import React from 'react';
import '../styles/Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience fade-section">
      <div className="section-inner">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {/* High School & Self-Learning */}
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>Ben Zvi High School</h3>
              <h4>Computer Science Major — Self-Learning &amp; Development</h4>
              <span className="timeline-date">2022 – 2024</span>
              <p>
                Focused on <strong>computer science fundamentals</strong> while exploring programming independently.
                Learned <strong>Java</strong> and built <strong>Spigot plugins</strong>, along with small web projects
                using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.
                This period built my foundation in logic and creativity.
              </p>
            </div>
          </div>

          {/* Personal Projects */}
          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>Personal Projects</h3>
              <h4>Full Stack &amp; Web Developer</h4>
              <span className="timeline-date">2024 – Present</span>
              <p>
                Developed multiple <strong>web applications</strong> focused on performance and design.
                Worked with <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>,
                building authentication systems, REST APIs, and dashboards.
                Continuously experimenting with <strong>AI/ML</strong> integrations and UI/UX improvement.
              </p>
            </div>
          </div>

          {/* ARC Internship */}
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>ARC — Sheba Medical Center</h3>
              <h4>Intern — Full Stack Developer</h4>
              <span className="timeline-date">2025 – Current</span>
              <p>
                Currently working as an <strong>intern</strong> at ARC, developing full-stack tools and
                <strong> AI dashboards</strong> using <strong>React</strong>, <strong>Python</strong>,
                and <strong>SQL</strong>. Focused on creating solutions that improve healthcare data
                management and real-time insights for clinical operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
