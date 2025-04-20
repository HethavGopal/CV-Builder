import React, { useState } from "react";
import ChevronDown from '../assets/down-chevron-svgrepo-com.svg'; 


export default function EducationDetail ({education, setEducation}) {
    const [expDropStatus, setExpDropStatus] = useState(false);
    const [formData, setFormData] = useState({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
    });

    const [showEducationSection, setShowEducationSection] = useState(true);


    const handleSubmit = (event) => {
        event.preventDefault();
        const newEdu = {
            ...formData, 
            id: Date.now(), 
        };
        setEducation(prev => [...prev, newEdu]); 
        setExpDropStatus(!expDropStatus); 
        setFormData({ school: "", degree: "", startDate: "", endDate: "", location: ""}); 
    }

    const handleDelete = (id) => {
        setEducation(prev => prev.filter(item => item.id !== id));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value 
        }));
    }

    const handleToggleForm = () => {
        setExpDropStatus(!expDropStatus);
    }

    return (
        <div className="card">
            <div className="education-header">
                <h2>Education</h2>
                <button className={`chevron-btn ${showEducationSection ? 'open' : ''}`}  
                onClick={() => setShowEducationSection(prev => !prev)}> <img src={ChevronDown}  alt="Toggle Chevron" className="chevron-icon"/> 
                </button>
            </div>
            {showEducationSection && 
            <div className={`education-content ${showEducationSection ? 'open' : 'closed'}`}>
            {
                expDropStatus ? (
                    <form className="content" onSubmit={handleSubmit}>
                        <label>School
                            <input 
                                type="text"     
                                name="school" 
                                value={formData.school}  
                                onChange={handleChange}  
                            />
                        </label>
                        <label>Degree
                            <input 
                                type="text" 
                                name="degree" 
                                value={formData.degree}
                                onChange={handleChange}
                            />
                        </label>
                        <label>Location
                            <input 
                                type="text" 
                                name="location" 
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </label>
                        <div className="date">
                            <label>Start Date
                                <input 
                                    type="text" 
                                    name="startDate" 
                                    value={formData.startDate} 
                                    onChange={handleChange}
                                />
                            </label>
                            <label>End Date
                                <input 
                                    type="text" 
                                    name="endDate" 
                                    value={formData.endDate} 
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className="buttons">
                            <button 
                                type="button" 
                                className="cancel-btn" 
                                onClick={handleToggleForm}
                            >
                                Cancel
                            </button>
                            <button 
                                className="save-btn" 
                                type="submit"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                  )  : (  
                    <div className="education-sub-card"> 
                        <div className="education-list">
                            {education.map((edu) => (
                                <div className="education-details" key={edu.id}>
                                    <p>{edu.school}</p>
                                    <button 
                                        className="delete-btn" 
                                        onClick={() => handleDelete(edu.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))} 
                        </div>
                        <button 
                            className="education-add-btn" 
                            onClick={handleToggleForm}
                        >
                            + Education
                        </button>
                    </div>
                  )
                }
                </div>
        }
        </div>
    )
}
