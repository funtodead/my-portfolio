import React, { useEffect } from 'react';
import Header from '../sections/Header.jsx';
import Hero from '../sections/Hero.jsx';
import AboutMe from '../sections/AboutMe.jsx';
import Skills from '../sections/Skills.jsx';
import Education from '../sections/Education.jsx';
import Experience from '../sections/Experience.jsx';
import Work from '../sections/Work.jsx';
import Contact from '../sections/Contact.jsx';
import Footer from '../sections/Footer.jsx';
import ScrollToTop from "../components/ScrollToTop.jsx";
import '../styles/home.css';

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible'));
    }, { threshold: 0.1 });

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

   return (
    <div className="app">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Education />
      <Experience />
      <Work />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}