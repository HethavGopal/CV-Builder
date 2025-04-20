// import { useState } from 'react
import './styles/App.css'
import PersonalDetail from './components/personalDetail'
import EducationDetail from './components/educationDetail'
import ExperienceDetail from './components/experienceDetails'

function App() {
 

  return (
    <div className="main">
       <div className="left">
        <PersonalDetail />
        <EducationDetail />
        <ExperienceDetail />
      </div>
      <div className="right">
         
      </div>
    </div>
  )
}

export default App
