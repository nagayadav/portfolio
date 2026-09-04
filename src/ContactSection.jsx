import React, { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copiedField, setCopiedField] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("sending");
    
    setTimeout(() => {
      setSubmitStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 6000);
    }, 1000);
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    setTimeout(() => setCopiedField(null), 3000);
  };

  return (
    <div className="contact-section-wrapper">
      <section className="contact-futuristic" id="contact">
        <h2 className="section-title">LET'S <span className="highlight-text">CONNECT</span></h2>
        <p className="section-subtitle">
          Have an exciting project, a job opportunity, or technical inquiry? Reach out directly via the form below or copy my contact coordinates instantly!
        </p>

        {/* Copy Notification Toast */}
        {copiedField && (
          <div className="toast-notification animate-bounce">
            ✓ Copied {copiedField} to clipboard!
          </div>
        )}

        <div className="contact-layout">
          {/* Left Side: Futuristic Contact Info Cards */}
          <div className="contact-info-panel">
            <div className="contact-info-card glass-panel">
              <div className="scan-laser"></div>
              <div className="cyber-corner-tl"></div>
              <div className="cyber-corner-br"></div>
              <div className="contact-info-icon">
                📧
              </div>
              <div className="contact-info-details">
                <h4>EMAIL ADDRESS</h4>
                <a href="mailto:nagendrababuyadav2003@gmail.com">nagendrababuyadav2003@gmail.com</a>
              </div>
              <button 
                className="copy-btn"
                onClick={() => handleCopy("nagendrababuyadav2003@gmail.com", "Email")}
                title="Copy Email"
              >
                {copiedField === "Email" ? "✓ Copied" : "📋 Copy"}
              </button>
            </div>

            <div className="contact-info-card glass-panel">
              <div className="scan-laser"></div>
              <div className="cyber-corner-tl"></div>
              <div className="cyber-corner-br"></div>
              <div className="contact-info-icon">
                📞
              </div>
              <div className="contact-info-details">
                <h4>PHONE / MOBILE</h4>
                <a href="tel:+919908238544">+91 9908238544</a>
              </div>
              <button 
                className="copy-btn"
                onClick={() => handleCopy("+919908238544", "Phone")}
                title="Copy Phone"
              >
                {copiedField === "Phone" ? "✓ Copied" : "📋 Copy"}
              </button>
            </div>

            <div className="contact-info-card glass-panel">
              <div className="scan-laser"></div>
              <div className="cyber-corner-tl"></div>
              <div className="cyber-corner-br"></div>
              <div className="contact-info-icon">
                📍
              </div>
              <div className="contact-info-details">
                <h4>LOCATION</h4>
                <p>Andhra Pradesh, India</p>
              </div>
              <span className="location-badge">Open to Remote / Relocation</span>
            </div>

            <div className="contact-info-card glass-panel">
              <div className="scan-laser"></div>
              <div className="cyber-corner-tl"></div>
              <div className="cyber-corner-br"></div>
              <div className="contact-info-icon">
                ⚡
              </div>
              <div className="contact-info-details">
                <h4>AVAILABILITY</h4>
                <p>Immediate Joiner | Full Stack Roles</p>
              </div>
            </div>
          </div>

          {/* Right Side: Futuristic Glass Form */}
          <form className="contact-glass-form glass-panel" onSubmit={handleSubmit}>
            <div className="scan-laser"></div>
            <div className="cyber-corner-tl"></div>
            <div className="cyber-corner-br"></div>

            <div className="form-header">
              <h3>SEND A DIRECT MESSAGE</h3>
              <p>Fill out the fields below to initiate communication.</p>
            </div>

            <div className="form-group">
              <label htmlFor="name">YOUR FULL NAME</label>
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
              <label htmlFor="email">EMAIL ADDRESS</label>
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
              <label htmlFor="subject">INQUIRY CATEGORY</label>
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select Inquiry Subject</option>
                <option value="job">💼 Full Stack / Software Engineer Opportunity</option>
                <option value="collab">🚀 Project Collaboration</option>
                <option value="freelance">🛠️ Custom Web Development Contract</option>
                <option value="general">💬 General Inquiry / Hello</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">YOUR MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your project details or message..."
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {submitStatus === "sending" && (
              <div className="submit-status-msg sending">
                ⏳ Transmitting message packet to Nagendra...
              </div>
            )}

            {submitStatus === "success" && (
              <div className="submit-status-msg success">
                ✓ Message transmitted successfully! Nagendra will get back to you shortly.
              </div>
            )}

            <button type="submit" className="cyber-submit-btn" disabled={submitStatus === "sending"}>
              {submitStatus === "sending" ? "TRANSMITTING..." : "SEND MESSAGE ➔"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
