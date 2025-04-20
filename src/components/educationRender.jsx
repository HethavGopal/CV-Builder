import React from "react";



export default function EducationRender ({education}) {

    return (
        <div className="education-info-card">
            <h2>Education</h2>
            <div className="education-sub-cards">
                {education.map((edu) => 
                    <div className="educationResume-sub-card">
                         <div className="date-location">
                           <p>
                            {`${edu.startDate} - ${edu.endDate}`}
                            </p>
                            <p>
                                {edu.location}
                            </p>        
                        </div>
                        <div className="uni-info">
                            <p className="uni-name">
                            {edu.school}
                            </p>
                            <p className="uni-degree">
                            {edu.degree}
                            </p>
                        </div>
                    </div>
                    

                ) }
            </div>
        </div>


    )

}