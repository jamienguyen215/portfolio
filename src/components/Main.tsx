import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* Using the provided WordPress image URL */}
          <img src="https://tramnguyen215.wordpress.com/wp-content/uploads/2025/05/44908278_1410271862439595_889313033501802496_n-edited.jpg" alt="Tram Nguyen - Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            {/* Email Link */}
            <a href={`mailto:jamienguyen215@gmail.com`} target="_blank" rel="noreferrer"><EmailIcon /></a>
            <a href="https://www.linkedin.com/in/tramnguyen210598/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Tram Nguyen</h1>
          <p>Data Analyst</p>
          <div className="mobile_social_icons">
            {/* Email Link */}
            <a href={`mailto:jamienguyen215@gmail.com`} target="_blank" rel="noreferrer"><EmailIcon /></a>
            <a href="https://www.linkedin.com/in/tramnguyen210598/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;