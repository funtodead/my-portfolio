import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-wrap">
        <div className="footer-grid">
          {/* Left */}
          <section className="f-col">
            <h3 className="f-title">Portfolio</h3>
            <p className="f-text">
              Thank you for visiting my personal portfolio website (:
            </p>

            {/* Socials (optional – remove if not needed) */}
            <div className="f-socials">
              <a href="https://github.com/funtodead" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/tohar-abergel/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/to.toshi" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </section>

          {/* Middle */}
          <nav className="f-col f-links">
            <h3 className="f-title">Quick Links</h3>
            <ul>
              <li><a href="#home"><FaChevronRight /> Home</a></li>
              <li><a href="#about-me"><FaChevronRight /> About</a></li>
              <li><a href="#skills"><FaChevronRight /> Skills</a></li>
              <li><a href="#education"><FaChevronRight /> Education</a></li>
              <li><a href="#work"><FaChevronRight /> Work</a></li>
              <li><a href="#contact"><FaChevronRight /> Contact</a></li>
            </ul>
          </nav>

          {/* Right */}
          <section className="f-col">
            <h3 className="f-title">Contact Info</h3>
            <ul className="f-contact">
              <li>
                <FaEnvelope />
                <a href="mailto:totominc@gmail.com">totominc@gmail.com</a>
              </li>
              <li><FaMapMarkerAlt /><span>Israel</span></li>
            </ul>
          </section>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-wrap">
          <p>© {new Date().getFullYear()} Tohar Abergel. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
