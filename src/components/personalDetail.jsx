import React from "react";



export default function PersonalDetail ({formData,setFormData}) {

    const handleChange = (event) => {
        const key = event.target.name;
        const val = event.target.value;

        setFormData((prevInfo) => ({
            ...prevInfo,
            [key]: val
        }))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return ( 
        <div className="card">
            <h2 className="heading">Personal Details</h2>
            <form className="content" onSubmit={handleSubmit}> 
                <label>Full Name
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                </label>

                <label> Email
                    <input type="text" name="email" value={formData.email} onChange={(handleChange)}/>
                </label>  

                <label> Phone Number
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={(handleChange)}/>
                </label>  

                <label> Address
                    <input type="text" name="Address" value={formData.Address} onChange={(handleChange)}/>
                </label>  
            </form>
        </div>
    )
} 