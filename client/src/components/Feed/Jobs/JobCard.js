import React, { useState, useEffect } from "react";

function JobCard({ job, onToggle }) {
  const {
    title,
    company,
    companyImage,
    location,
    description,
    qualifications,
    applicationDeadline,
    postedBy,
    CreationDate,
    /* expanded, */
  } = job;

  const [expanded, setExpanded] = useState(false);

  const [imagePath, setImagePath] = useState("");

  const toggleDescription = () => {
    setExpanded(!expanded);
  };
  const image = companyImage;
  useEffect(() => {
    if (image) {
      const correctedImagePath = image.replace(/\\/g, "/");
      setImagePath("http://localhost:4000/" + correctedImagePath);
      console.log(imagePath);
    }
  }, [imagePath, image]);
  return (
    <div className="job-card">
      <div className="company-logo">
        <img src={imagePath} alt={`${company} Logo`} />
        <div className="location">
          <p style={{ fontSize: "1.2rem", fontWeight: "600" }}>{company}</p>
          <p>{location}</p>
        </div>
      </div>
      <div className="job-details">
        <h2 style={{ margin: "15px 0px" }}>{title}</h2>
        <div className="description-details">
          <p>Qualifications: {qualifications}</p>
          <p>
            Application Deadline: {new Date(applicationDeadline).toDateString()}
          </p>
        </div>

        <div className="buttons">
          <button
            className="toggle-button description"
            onClick={toggleDescription}
          >
            {" "}
            {/* onClick={() => onToggle(job)} */}
            {expanded ? "Hide Description" : "View Description"}
          </button>
          <button className="apply">Apply</button>
        </div>
        {/* You can add more details if needed */}
        <div
          className="expanded-details"
          style={{ display: expanded ? "block" : "none" }}
        >
          <p>Description: {description}</p>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
