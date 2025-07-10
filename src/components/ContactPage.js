// src/components/ContactPage.js

import React from "react";
import "./ContactPage.css";
import profilePic from "../assets/profile.jpg"; // Use your real image here

export default function ContactPage() {
  return (
    <div className="contact-wrapper">
      <div className="contact-left">
        <img src={profilePic} alt="Andrii Prysiazhnyi" />
        <h1>Let’s work together</h1>
        <p>I’m open to freelance, full-time, and consulting opportunities.</p>
      </div>

      <div className="contact-right">
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent!");
          }}
        >
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="6" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
