import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faChartBar, faBrain } from '@fortawesome/free-solid-svg-icons'; // Changed icons
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsDataAnalysis = [
    "Python",
    "R",
    "SQL",
    "Advanced Excel",
    "SPSS",
    "Data Cleaning",
    "Data Mining",
    "Statistical Programming"
];

const labelsDataVisualization = [
    "Tableau",
    "Power BI",
    "Advanced PowerPoint",
    "Adobe Creative Suite",
     
];

const labelsAnalyticalMethods = [
    "Linear Regression",
    "Logistic Regression",
    "Naïve Bayes",
    "K-NN",
    "Decision Tree",
    "Time Series",

    "Monte Carlo Simulation",
    "XGBoost (XGBRegressor)",
    "Descriptive Analytics",
    "Diagnostic Analytics",
    "Predictive Analytics",
    "Prescriptive Analytics"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/> {/* Changed icon */}
                    <h3>Data Analysis</h3>
                    <p>Proficient in extracting, cleaning, and analyzing complex datasets to derive actionable insights and inform strategic decision-making. Experienced in utilizing various statistical programming languages and tools to perform in-depth analysis.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & Technologies:</span>
                        {labelsDataAnalysis.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartBar} size="3x"/> {/* Changed icon */}
                    <h3>Data Visualization</h3>
                    <p>Skilled in creating compelling data visualizations and dashboards to effectively communicate complex information to both technical and non-technical audiences. Adept at using industry-leading data visualization tools to present data in a clear and insightful manner.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {labelsDataVisualization.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/> {/* Changed icon */}
                    <h3>Analytical Methods</h3>
                    <p>Possess a strong foundation in applying diverse analytical methods and techniques to solve business problems and drive data-driven solutions. Experienced in implementing various statistical and machine learning models to analyze data and generate predictions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Methods & Types:</span>
                        {labelsAnalyticalMethods.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;