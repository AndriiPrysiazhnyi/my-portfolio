import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate submit
    console.log(form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get in Touch</h2>
      {submitted ? (
        <p className="thanks-msg">Thanks for reaching out! I will reply soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            className="input"
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="input"
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="textarea"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
