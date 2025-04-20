import React, { useState } from "react";

export default function EducationDetail () {
    const [education, setEducation] = useState([]);
    const [expDropStatus, setExpDropStatus] = useState(false);
    const [formData, setFormData] = useState({
        school: "",
        degree: "",
        startDate: "",
        endDate: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const newEdu = {
            ...formData, 
            id: Date.now(), 
        };
        setEducation(prev => [...prev, newEdu]); 
        setExpDropStatus(!expDropStatus); 
        setFormData({ school: "", degree: "", startDate: "", endDate: "" }); 
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
            <h2 className="heading">Education</h2>
            {expDropStatus ? 
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
            :  
                <div className="education-sub-card"> 
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
                    <button 
                        className="education-add-btn" 
                        onClick={handleToggleForm}
                    >
                        + Education
                    </button>
                </div>
            }
        </div>
    );
}
