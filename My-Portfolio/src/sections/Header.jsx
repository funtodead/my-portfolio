import React, { useEffect, useState } from "react";
import "../styles/Header.css";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about-me", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
     { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      {
        root: null,
        threshold: 0.4,             // 40% visible counts as active
        rootMargin: "-64px 0px 0px" // account for header height
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="site-header">
      <div className="nav-inner">
        {/* Brand (left) */}
        <a href="#home" className="brand" onClick={(e) => handleClick(e, "home")}>
          <span className="brand-mark">TA</span>
          <span className="brand-name">Tohar</span>
        </a>

        {/* Centered nav */}
        <nav className="nav-center">
          <ul className="nav-list">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`nav-link ${active === item.id ? "active" : ""}`}
                  aria-current={active === item.id ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right spacer to balance layout (add socials later if you want) */}
        <div className="nav-right" />
      </div>
    </header>
  );
}
