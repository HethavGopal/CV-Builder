import React from "react";

export default function ExperienceDetailRender({experience}) {

    return (
        <div className="education-info-card">
            <h2>Experience</h2>
            <div className="education-sub-cards">
                {experience.map((edu) => 
                    <div className="educationResume-sub-card">
                         <div className="date-location-exp">
                           <p>
                            {`${edu.startDate} - ${edu.endDate}`}
                            </p>
                            <p>
                                {edu.location}
                            </p>        
                        </div>
                        <div className="exp-info">
                            <p className="uni-name">
                            {edu.companyName}
                            </p>
                            <p className="uni-degree">
                            {edu.positionTitle}
                            </p>
                            <p className="exp-desc">
                                {edu.desc}
                            </p>
                        </div>
                    </div>
                ) }
            </div>
        </div>


    )
}

