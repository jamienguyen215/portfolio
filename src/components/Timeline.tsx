import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="08/2022 – present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Business Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Bekaert Cooperation, Atlanta - GA, US</h4>
      
            <p>Led the development of an e-commerce B2B portal and managed its analytics with Looker Studio, driving UX/UI improvements and increased user engagement. Further responsibilities included analyzing market data using Power BI, optimizing web performance resulting in $35K savings, and building CRM dashboards for revenue attribution analysis.</p>
                      
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="02/2020 – 08/2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Assistant to Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Dreamchasers Interactive, Singapore - Vietnam</h4>
        
              <p>Supported the Director of Operations by preparing reports, presentations, and managing communications. Assisted with project management tasks and facilitated the smooth operation of the office.</p>
            
          </VerticalTimelineElement>
<VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2017–2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Digital Marketing Officer</h3>
            <h4 className="vertical-timeline-element-subtitle">Ho Chi Minh, Vietnam</h4>
      
            <p>Digital Marketing Officer for multiple clients (Faroe Eyewear, 38 Degrees Flower, Victaland Real Estate, and GARASTEM Education). Analyzed data to optimize campaigns, created content, managed ads and budgets, tracked performance, and coordinated with stakeholders.</p>
                      
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;