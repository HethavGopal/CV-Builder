import {useState } from 'react'
import './styles/App.css'
import PersonalDetail from './components/personalDetail'
import EducationDetail from './components/educationDetail'
import ExperienceDetail from './components/experienceDetails'
import PersonalDetailRender from './components/PersonalDetailRender'
import EducationRender from './components/educationRender'
import ExperienceDetailRender from './components/ExperienceDetailRender'

function App() {
   const [formData, setFormData] = useState({
    name: "Johnny Donald",
    email: "johndonald@gmail.com",
    phoneNumber: "+1 647 789 989",
    Address: "New York City, US",
      })

  const [education, setEducation] = useState([
    {
      school: "University of Toronto",
      degree: "B.Sc. in Computer Science",
      startDate: "Sep 2020",
      endDate: "Apr 2024",
      location: "Toronto, ON",
    }
    
  ]);
  const [experience, setExperience] = useState([
    {
      id: Date.now(), 
      companyName: "Microsoft",
      positionTitle: "Software Engineer Intern",
      startDate: "08/2020",
      endDate: "present",
      desc: "Worked on frontend performance optimizations using React.Optimized React components to reduce re-renders, improving page load speed by 35% across the dashboard.",
      location: "Redmond, WA",
    },
    {
      companyName: "Amazon",
      positionTitle: "Frontend Developer Intern",
      startDate: "May 2023",
      endDate: "Aug 2023",
      location: "Remote",
      desc: 
        "Built responsive UI components in React and Tailwind CSS for a SaaS dashboard used by 5K+ users Integrated REST APIs using Axios and managed global state with Redux Toolkit Optimized load times by 40% using code-splitting and lazy loading techniques."
    }
  ]);


  return (
    <div className="main">
       <div className="left">
        <PersonalDetail formData={formData} setFormData={setFormData}/>
        <EducationDetail  education={education} setEducation={setEducation} />
        <ExperienceDetail  education={experience} setEducation={setExperience}/>
      </div>
      <div className="right">
        <div className="resume">
          <PersonalDetailRender formData={formData}/>
          <EducationRender education={education} />
          <ExperienceDetailRender experience={experience}/>
        </div>
      </div>
    </div>
  )
}

export default App
