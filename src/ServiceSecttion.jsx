import React from "react";
import webImg from "./assets/response.jpg";
import backendImg from "./assets/Backen development.jpeg";
import fullstackImg from "./assets/ecommarce.jpg";

const ServicesSection = () => {
  return (
    <section className="services-container">
      <h2 className="services-title">My Services</h2>
      <p className="services-description">
        {/* Explore the range of development services I offer — from clean frontends to robust backend APIs. */}
        <p className="services-description">
          I offer comprehensive web development services tailored to build
          modern, responsive, and scalable applications. With expertise in
          frontend design, backend architecture, and full-stack integration, I
          create solutions that not only look great but also perform seamlessly.
          Whether it’s building a stunning user interface, developing secure
          APIs, or delivering full-stack projects, I’m committed to writing
          clean, efficient code that brings real-world ideas to life.
        </p>
      </p>

      <div className="services-grid">
        {/* Web Development */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <img src={webImg} alt="Web Development" />
              <h3>Web Development</h3>
            </div>
            <div className="card-back">
              <p>
                I build responsive, accessible, and modern web interfaces using
                HTML, CSS, JavaScript, and React.js.
              </p>
            </div>
          </div>
        </div>

        {/* Backend Development */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <img src={backendImg} alt="Backend Development" />
              <h3>Backend Development</h3>
            </div>
            <div className="card-back">
              <p>
                RESTful API design and server-side logic using Java, Spring
                Boot, and MySQL for data-driven apps.
              </p>
            </div>
          </div>
        </div>

        {/* Full Stack Development */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <img src={fullstackImg} alt="Full Stack Development" />
              <h3>Full Stack Development</h3>
            </div>
            <div className="card-back">
              <p>
                Delivering complete end-to-end solutions by combining frontend
                and backend technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Optional Fourth Card
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <img src={extraImg} alt="Other Services" />
              <h3>Extra Service</h3>
            </div>
            <div className="card-back">
              <p>
                Example of a fourth service — can be anything like deployment, DevOps, testing, etc.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;
