import React from "react";
import openSkyETL from '../assets/images/OpenSky_ETL.png';
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                 <a href="https://github.com/jamienguyen215/OpenSky-ETL-Pipeline" target="_blank" rel="noreferrer"><img src={openSkyETL} className="zoom" alt="OpenSky ETL Pipeline" width="100%" /></a>
                 <a href="https://github.com/jamienguyen215/OpenSky-ETL-Pipeline" target="_blank" rel="noreferrer"><h2>OpenSky ETL Pipeline</h2></a>
                 <p>Tools: Python, PostgreSQL, Power BI</p>
                 <p> This project is an automated ETL pipeline that extracts real-time flight data from the OpenSky Network API, transforms it in Python, and loads it into a PostgreSQL database. The data is then used to create interactive dashboards in Power BI, showcasing key metrics and visualizations of air traffic. The pipeline is scheduled to run daily, capturing a snapshot of flights at a specific time.</p>
                </div>
            <div className="project">
                <a href="https://jamienguyen215.github.io/Predict-Podcast-Listening-Time/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://jamienguyen215.github.io/Predict-Podcast-Listening-Time/" target="_blank" rel="noreferrer"><h2>Podcast Listener Behavior Analysis </h2></a>
                <p>Tools: Python (Pandas, Scikit-learn, XGBoost, Seaborn, Matplotlib)</p>
                <p>Performed end-to-end analysis on a dataset of 750,000 podcast episodes to identify key factors influencing listener engagement. Conducted thorough exploratory data analysis (EDA), cleaned data by handling missing values and outliers, engineered features such as converting episode titles to numeric representations, and visualized insights using Seaborn and Matplotlib. Developed predictive models using Linear Regression and XGBoost to forecast listening time, evaluating performance with RMSE. Demonstrated strong expertise in data cleaning, feature engineering, categorical encoding, model training and machine learning techniques.</p>
            </div>
            <div className="project">
                <a href="https://jamienguyen215.github.io/georgia-film-tax-incentive/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://jamienguyen215.github.io/georgia-film-tax-incentive/" target="_blank" rel="noreferrer"><h2>Georgia Film Tax Incentives - Economic Impacts</h2></a>
                <p>Tools: PowerBI, Advanced Exel, Public Government data sources (BLS, Census, BEA)</p>
                <p>Analyzed the Georgia film industry's economic impact (2005-2019) using Public Government data (BLS, Census, and BEA data). Applied Input-Output modeling to quantify inter-industry linkages. Created interactive Power BI dashboards and presentations to visualize significant job and wage growth linked to tax incentives and studio investments. Skills include data acquisition, cleaning, exploratory analysis, economic modeling, and using Power BI for interactive dashboards.</p>
            </div>
            <div className="project">
                <a href="https://jamienguyen215.github.io/Adobe-Stock-Prediction/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://jamienguyen215.github.io/Adobe-Stock-Prediction/" rel="noreferrer"><h2>Adobe Inc. Stock Prediction</h2></a>
                <p>Tools: Advanced Exel, PowerBI</p>
                <p>Conducted a financial analysis of Adobe (ADBE) to provide stock investment recommendations. Using advanced Excel, Discounted Cash Flow (DCF) and relative valuation models were utilized to project future stock prices under different scenarios, including Metaverse considerations. The analysis included revenue forecasting, analyze income statements, financial ratios, and assessing financial risks. PowerBI was used to create an interactive dashboard presenting key findings.</p>
            </div>
            <div className="project">
                <a href="https://jamienguyen215.github.io/Customer-Engagement-Sales-Analysis/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://jamienguyen215.github.io/Customer-Engagement-Sales-Analysis/" target="_blank" rel="noreferrer"><h2>Customer Engagement & Sales Analysis</h2></a>
                <p>Tools: Tableau, Exel</p>
                <p>Developed a Tableau dashboard for sales and customer engagement analysis, visualizing key metrics and trends.  A custom correlation matrix was implemented to effectively illustrate relationships between sales and engagement data, aiding in identifying successful campaigns and customer behavior patterns.</p>
            </div>
            <div className="project">
                <a href="https://jamienguyen215.github.io/E-commerce-Data-Model-Project/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://jamienguyen215.github.io/E-commerce-Data-Model-Project/" target="_blank" rel="noreferrer"><h2>E-shop Clothing: E-commerce Data Model Project</h2></a>
                <p>Tools: R (lm, glm, factor, VIF, Breusch-Pagan, tidy, kable), Excel, PowerPoint</p>
                <p>Developed R-based predictive models to drive business decisions for an e-commerce clothing store. The project utilized data mining techniques, including data cleaning, feature engineering, and the application of linear regression to predict sales and logistic regression to analyze customer behavior (e.g., purchase probability). R was employed to analyze customer demographics, purchase history, and website interaction data. Model results and actionable recommendations were effectively communicated through PowerPoint presentations</p>
            </div>
            <div className="project">
                <a href="https://jamienguyen215.github.io/1994-Census-Income-project/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://jamienguyen215.github.io/1994-Census-Income-project/" target="_blank" rel="noreferrer"><h2>1994 Census Income project - Predict Income of a person</h2></a>
                <p>Tools: Python (Pandas, Numpy, Seaborn, Matplotlib, Scikit-learn)</p>
                <p>Developed a Python-based machine learning classification model to predict income exceeding $50,000 annually using the 1994 Census Income dataset. The project encompassed exploratory data analysis (EDA), data cleaning (handling missing values and outliers), feature engineering (reducing categorical variables to improve model efficiency), and model selection. Logistic Regression was employed, achieving an accuracy of over 81%.  Model evaluation included accuracy metrics, confusion matrix, and classification report, with a focus on preventing overfitting and ensuring generalization.</p>
            </div>
            <div className="project">
                <a href="https://jamienguyen215.github.io/Hardy-Business-Loan/" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://jamienguyen215.github.io/Hardy-Business-Loan/" target="_blank" rel="noreferrer"><h2>Hardy Business Loan (HBL) Project</h2></a>
                <p>Tools: Python (Pandas, Numpy, Matplotlib, Seaborn, Scikit-learn)</p>
                <p>Developed a model using Python and machine learning to predict customer loan defaults for Hardy Business Loan (HBL). Employed Logistic Regression, achieving high accuracy in identifying potential defaulters. The project included data preprocessing, feature selection, and model evaluation to optimize predictive performance.</p>
            </div>
            <div className="project">
                <a href="https://jamienguyen215.github.io/Predicting-Risk-with-State-Farm-Data-Using-Logistic-and-KNN-Models/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://jamienguyen215.github.io/Predicting-Risk-with-State-Farm-Data-Using-Logistic-and-KNN-Models/" target="_blank" rel="noreferrer"><h2>Predicting Risk with State Farm Data</h2></a>
                <p>Tools: R (tidyverse (dplyr, ggplot2, etc.), knitr, kableExtra, car, MASS, zoo, stargazer)</p>
                <p>Utilized R to develop a risk prediction model on State Farm data, employing Logistic Regression and K-Nearest Neighbors (KNN). This project showcased skills in data manipulation, cleaning, and model development through extensive exploratory data analysis, data cleaning (including imputation of missing values, standardization of categorical variables, and removal of redundant features), and preprocessing. Model performance was rigorously evaluated to determine the effectiveness of risk prediction, addressing a real-world prediction challenge.</p>
            </div>
            <div className="project">
                <a href="https://jamienguyen215.github.io/Predicting-Secondary-Heart-Attacks-Using-Health-Insurance-Data/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://jamienguyen215.github.io/Predicting-Secondary-Heart-Attacks-Using-Health-Insurance-Data/" target="_blank" rel="noreferrer"><h2>Predicting Secondary Heart Attacks Using Health Insurance Data</h2></a>
                <p>Tools: Python (Pandas, Numpy, Seaborn, Matplotlib, Scikit-learn)</p>
                <p>Developed a predictive model using Python to forecast secondary heart attacks based on health insurance data. The project involved data cleaning, feature engineering, and the application of machine learning classification model (Logistic Regression), to identify key risk factors and predict patient outcomes. Model performance was evaluated to assess the accuracy and effectiveness of the predictions.</p>
            </div>
            <div className="project">
                <a href="https://jamienguyen215.github.io/SQL-Level-Up/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://jamienguyen215.github.io/SQL-Level-Up/" target="_blank" rel="noreferrer"><h2>SQL - Level Up</h2></a>
                <p>Tools: SQL (CREATE TABLE, INSERT INTO, SELECT, WHERE, ORDER BY, JOIN (INNER, LEFT, RIGHT), UPDATE, DELETE FROM, etc.)</p>
                <p>Enhanced SQL proficiency through a LinkedIn Learning course, "Level Up: SQL." The project involved creating and manipulating databases, including designing tables, inserting data, and performing various SQL queries to retrieve and update information. Key skills demonstrated include database design, data manipulation (CRUD operations), and querying using SELECT statements with filtering, sorting, and joins.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;