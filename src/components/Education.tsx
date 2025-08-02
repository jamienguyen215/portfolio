import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'; // Reusing Timeline styles for consistency

function Education() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="08/2021 – 04/2022"
            iconStyle={{ background: '#5000ca', color: 'white' }} // Consistent color
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Master of Science (M.S.), Business Analytics</h3>
            <h4 className="vertical-timeline-element-subtitle">Mercer University, Atlanta, GA, US</h4>
            <p>GPA: 4.0/4.0</p> {/* Added GPA */}
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="09/2013 - 06/2017"
            iconStyle={{ background: '#5000ca', color: 'white' }} // Consistent color
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor’s degree, Marketing</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Economics Ho Chi Minh City, Vietnam</h4>
             <p>GPA: 3.2/4.0</p> {/* Added GPA */}
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;