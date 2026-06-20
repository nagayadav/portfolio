import React, { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    
    // Auto clear success message after 5 seconds
    setTimeout(() => {
      setSubmitStatus(null);
    }, 5000);
  };

  return (
    <section className="contact-futuristic">
      <h2 className="section-title">Let's Connect</h2>
      <p className="section-subtitle">Reach out for opportunities, collaborations, or just to say hello!</p>

      <div className="contact-layout">
        {/* Left Side: Contact Info Details */}
        <div className="contact-info-panel">
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="contact-info-details">
              <h4>Email</h4>
              <a href="mailto:nagendrababuyadav2003@gmail.com">nagendrababuyadav2003@gmail.com</a>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="contact-info-details">
              <h4>Phone</h4>
              <p>+91 9908238544</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="contact-info-details">
              <h4>Location</h4>
              <p>Andhra Pradesh, India</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="contact-glass-form glass-panel" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="e.g. Nagendra Babu"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="e.g. name@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Choose Subject</label>
            <select
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
            >
              <option value="">Choose Subject</option>
              <option value="collab">Collaboration</option>
              <option value="job">Job Opportunity</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Type your message here..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {submitStatus === "success" && (
            <div className="submit-status-msg success">
              ✓ Message sent successfully! I will get back to you soon.
            </div>
          )}

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
