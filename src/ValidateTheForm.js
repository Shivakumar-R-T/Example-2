

import React, { useState, useEffect } from 'react';
import "./ValidateTheForm.css";
import * as EmailValidator from 'email-validator';
import Topic3 from './Topic3';
const ValidateTheForm = () => {
    const [formData, setformData] = useState([{
        email: "",
        pass: "",
        cnpass: ""
    }])
    const [areCorrect, setareCorrect] = useState(true);


    const handleValidation = () => {
        
        if (formData.pass !== formData.cnpass  ||formData.pass.length >15  ||formData.pass.length <8 )
        setareCorrect(true);

         else if(EmailValidator.validate(formData.email))
            setareCorrect(false);

        else
            setareCorrect(true);
    }
    useEffect(() => {
        handleValidation();
    }, [formData.email, formData.pass, formData.cnpass]);

    const handleSubmit=()=>{
        setformData({email:"",
        pass:"",
    cnpass:""});

  
    };

    return (
        <div >
            <input type="text" placeholder="Enter the Email" value={formData.email} onChange={(event) => {
                const updates = { ...formData };
                updates.email = event.target.value;
                setformData(updates);
            }} />
            <input type="password" placeholder="Enter Password" value={formData.pass} onChange={(event) => {
                const updates = { ...formData };
                updates.pass = event.target.value;
                setformData(updates);
            }} />
            <input type="password" placeholder="Confirm Password" value={formData.cnpass} onChange={(event) => {
                const updates = { ...formData };
                updates.cnpass = event.target.value;
                setformData(updates);
            }} />
            <button disabled={areCorrect} onClick={handleSubmit}>Submit</button>
            


        </div>
    )
}

export default ValidateTheForm