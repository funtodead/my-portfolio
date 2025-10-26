import React from "react";
import Particles from "../components/Animations/Particles.jsx";
import ContactForm from "../components/ContactForm.jsx";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section fade-section">
      {/* background particles (behind everything) */}
      <div className="contact-bg" aria-hidden="true">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={160}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* single centered card */}
      <div className="contact-shell">
        <div className="contact-card">
          <p className="contact-eyebrow">Get in touch</p>
          <h2 className="contact-title">
            Contact<span>.</span>
          </h2>
          <ContactForm showTitle={false} />
        </div>
      </div>
    </section>
  );
}
