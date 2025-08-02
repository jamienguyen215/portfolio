import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email'; // Import the Email icon
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href={`mailto:tramnguyen210598@gmail.com`} target="_blank" rel="noreferrer"><EmailIcon /></a> {/* Email Link */}
        <a href="https://www.linkedin.com/in/tramnguyen210598/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
         <p>Tram Nguyen </p>
    </footer>
  );
}

export default Footer;