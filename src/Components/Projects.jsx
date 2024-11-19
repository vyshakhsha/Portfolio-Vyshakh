import React from "react";

function Projects() {
  return (
    <div className="project-container">
      <h2>Academic Projects</h2>
      <div className="project">
        <div className="project-item">
          <p className="proj-name">Wage Protection System</p>
          <p className="proj-desc">
            An electronic salary transfer system developed to ensure the timely
            and full payment of wages to employees. It was introduced by the UAE
            government to protect workers' rights by requiring employers to pay
            salaries through authorized financial institutions. The system has
            been built using various technologies, including ASP.NET and MySQL,
            to develop web pages, Windows and SFTP services, and RESTful APIs,
            ensuring a secure and efficient platform for managing salary
            payments.
          </p>
        </div>
        <div className="project-item">
          <p className="proj-name">LearnHub</p>
          <p className="proj-desc">
            An online learning platform I developed using React for the frontend
            and Redux for state management. The backend is built with Express.js
            and Firebase. The platform allows tutors to easily add and manage
            new courses, while students can browse and purchase them. With an
            intuitive user interface and efficient API integration, the project
            also leverages SASS for styling and Material-UI for reusable
            components to enhance design consistency.
          </p>
          <div className="profile-details">
              <button
                  onClick={() => window.open("https://drive.google.com/file/d/1WQUiSFATYRcKZduBNZ-kAd1fz63Y4LDs/view?usp=sharing", "_blank")}
                  className="btn-credential"
                > Quick look-Demo Video
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
