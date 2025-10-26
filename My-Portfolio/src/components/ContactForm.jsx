import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactForm.css";

const ContactForm = ({ showTitle = true }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_wk9kbur",
        "template_xxreqj9",
        formData,
        "JmE1PQpQL6lQStsnM"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => setStatus("Failed to send message. Try again later.")
      );
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {showTitle && <h3>Contact Me</h3>}

      <label className="field">
        <span>Your Name</span>
        <input
          type="text"
          name="name"
          placeholder="What's your good name?"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label className="field">
        <span>Your email</span>
        <input
          type="email"
          name="email"
          placeholder="What's your email address?"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label className="field">
        <span>Your Message</span>
        <textarea
          name="message"
          placeholder="What do you want to say to me?"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit" className="send-btn">Send</button>
      <p className="status">{status}</p>
    </form>
  );
};

export default ContactForm;
