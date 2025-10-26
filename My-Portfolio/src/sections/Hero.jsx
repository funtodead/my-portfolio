import React from 'react';
import LiquidEther from '../components/Animations/Liquid-Ether.jsx';
import TextType from '../components/Animations/Type-Text.jsx';
import { FaArrowDown, FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="ether-container">
        <LiquidEther
          colors={['#1D4ED8', '#2563EB', '#3B82F6']}
          mouseForce={20}
          cursorSize={110}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={true}
          autoDemo={true}
          autoSpeed={1}
          autoIntensity={1.5}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div className="hero-status">
        <span className="status-dot"></span>
        <span className="status-text">Currently completing my internship in ARC</span>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Hi there,<br />I'm Tohar Abergel
        </h1>
        <TextType
          text={[
            'Full-stack Developer',
            'React / Node Enthusiast',
            'AI / ML Developer',
            'ARC Experience Worker',
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
        <div className="hero-buttons">
          <a href="#about-me" className="about-me-btn">
            About Me <FaArrowDown className="arrow-down" />
          </a>
        </div>

        <div className="socials">
          <a href="https://linkedin.com/in/tohar-abergel/" target="_blank" className="social-btn" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/funtodead" target="_blank" className="social-btn" rel="noreferrer"><FaGithub /></a>
          <a href="mailto:totominc@gmail.com" className="social-btn"><FaEnvelope /></a>
          <a href="https://www.instagram.com/to.toshi" target="_blank" className="social-btn" rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </section>
  );
}
