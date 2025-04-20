import React from "react";
import emailIcon from '../assets/email-1-svgrepo-com.svg'
import phoneIcon from '../assets/phone-svgrepo-com.svg'
import locationIcon from '../assets/location-pin-alt-1-svgrepo-com.svg'

export default function PersonalDetailRender ({formData}) {
    


    return (
        <div className="personal-detail-card">
            <h2>{formData.name}</h2>
            <div className="sub-personal-info-card">
                <p>
                    <img src={emailIcon} alt="Email Icon" className="icon"/>
                    {formData.email}
                </p>
                <p>
                    <img src={phoneIcon} alt="Phone Icon" className="icon"/>
                    {formData.phoneNumber}
                </p>
                <p>
                    <img src={locationIcon} alt="Location Icon" className="icon" />
                    {formData.Address} 
                </p>
            </div>
        </div>
    )

}