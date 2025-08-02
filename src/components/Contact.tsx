import React from 'react';
import '../assets/styles/Contact.scss';
import Typography from '@mui/material/Typography';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Every great idea starts with a conversation. Let’s talk about how we can bring yours to life!
           You can reach me directly at <a href="mailto:jamienguyen215@gmail.com" style={{ color: '#007bff', textDecoration: 'underline' }}>jamienguyen215@gmail.com</a> or connect on{' '}
            <a href="https://www.linkedin.com/in/tramnguyen210598/" style={{ color: '#007bff', textDecoration: 'underline' }}>LinkedIn</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;