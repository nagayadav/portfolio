import React from "react";

const ExperienceTimeline = () => {
  return (
    <section className="timeline-container">
      <h2 className="timeline-title">Experience</h2>
      <div className="timeline">
        {/* Experience 1 */}
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3 className="company-name">Karthikeya Software Solutions Pvt. Ltd</h3>
            <h4 className="role">Junior Fullstack Java Developer Intern</h4>
            <p className="duration">Jan 2024 – June 2024</p>
          </div>
        </div>
        
        {/* Experience 2 */}
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3 className="company-name">J Spider's</h3>
            <h4 className="role">Full Stack Developer Intern</h4>
            <p className="duration">Jan 2024 – May 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
