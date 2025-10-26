import React from 'react';
import '../styles/Education.css';

export default function Education() {
  return (
    <section id="education" className="section education fade-section">
      <div className="section-inner">
        <h2 className="section-title">Education</h2>

        <div className="edu-stack">
          <article className="edu-card">
            <div className="edu-media">
              <img src="/benzvihigh.jpg" alt="Ben Zvi High School" />
            </div>
            <div className="edu-content">
              <h3 className="edu-title">Ben Zvi High School</h3>
              <div className="edu-sub">Computer Science & Chemistry Major</div>
              <div className="edu-year">2021 – 2024</div>
              <ul className="edu-points">
                <li>Project-based learning with Java</li>
                <li>Algorithms &amp; data structures fundamentals</li>
                <li>Project solvings and learning</li>
              </ul>
            </div>
          </article>

          <article className="edu-card">
            <div className="edu-media">
              <img src="/davidson.png" alt="Davidson Institute for Science Education" />
            </div>
            <div className="edu-content">
              <h3 className="edu-title">Davidson Institute for Science Education</h3>
              <div className="edu-sub">Computer Science Systems planning and programming project</div>
              <div className="edu-year">2022 – 2024</div>
              <ul className="edu-points">
                <li>Java project tackling the Traveling Salesman Problem (TSP)</li>
                <li>Applied algorithms, data structures, and graph theory</li>
                <li>Optimization and problem-solving techniques</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
