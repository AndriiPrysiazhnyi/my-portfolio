// import React from "react";
import "./ContactPage.css";

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import profileHeadshot from "../assets/profileHeadshot.jpg";
import HandshakeAnimation from './HandshakeAnimation';

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nvfs9ss",
        "template_2afo1nf",
        form.current,
        "g6A_RJy2vJD5QmC4Z" 
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message, please try again.");
          console.log(error);
        }
      );
  };

  return (
    <div className="contact-section">

      <div className="contact-wrapper">
        <div className="contact-left">
          <HandshakeAnimation width={250} height={250} />
          {/* <img src={profileHeadshot} alt="Andrii Prysiazhnyi" /> */}
          <h1>Let’s work together</h1>
          <p>I’m open to freelance, full-time, and consulting opportunities.</p>
        </div>


        <div className="contact-right">
          
          <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h2>Contact Me</h2>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows="5" required />
            </div>

            <button type="submit" className="send-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
