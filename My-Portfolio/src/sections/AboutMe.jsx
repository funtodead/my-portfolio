import React from 'react';
import TiltedCard from '../components/Animations/TiltedCard.jsx';
import CountUp from '../components/Animations/CountUp.jsx';
import profilePic from '/me.png';
import '../styles/AboutMe.css';

export default function AboutMe() {
  const birthDate = new Date(2006, 4, 21);
  const today = new Date();
  const age =
    today.getFullYear() -
    birthDate.getFullYear() -
    (today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
      ? 1
      : 0);

  return (
    <section className="about-me fade-section" id="about-me">
      <h2 className="section-title">
        <i className="fa-solid fa-user"></i> About <span>Me</span>
      </h2>

      <div className="about-me-container">
            <div className="tilt-guard">
        <div className="about-me-image">
          <TiltedCard
            imageSrc={profilePic}
            altText="Tohar Abergel - Profile Picture"
            captionText="Tohar Abergel"
            containerHeight="550px"
            containerWidth="700px"
            imageHeight="700px"
            imageWidth="620px"
            rotateAmplitude={7}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
        </div>
        </div>

        <div className="about-me-text">
          <h4>Full Stack Developer</h4>
          <p>
           I’m a tech enthusiast and Full Stack Developer passionate about building projects that combine creativity, functionality, and real-world impact. I enjoy exploring new technologies, designing intuitive UI/UX, and constantly learning to solve challenging problems. I’m currently specializing as an intern at ARC, working on innovative healthcare projects that improve medical experiences and outcomes.
          </p>

          <div className="about-info">
            <p><strong>Email:</strong> <a href="mailto:totominc@gmail.com">totominc@gmail.com</a></p>
            <p><strong>Place:</strong> Israel</p>
            <p><strong>Age:</strong>{' '}
              <CountUp from={0} to={age} duration={2} className="count-up-text" />
            </p>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Resume <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
