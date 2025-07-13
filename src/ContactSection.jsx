
import React, { useState } from "react";
// import "./ContactSection.css";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact-futuristic">
      <div className="contact-title-box">
        <h2>Let's Connect</h2>
        <p>Reach out for opportunities or collaborations</p>
      </div>

      <form className="contact-glass-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Subject</label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
        >
          <option  value="">Choose Subject</option>
          <option className="value"  value="collab">Collaboration</option>
          <option className="value"  value="job">Job Opportunity</option>
          <option className="value"  value="feedback">Feedback</option>
        </select>

        <label>Message</label>
        <textarea
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactSection;
