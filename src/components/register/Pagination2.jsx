import React from 'react'
import RegisterInputGroup from './RegisterInputGroup';

function Pagination2({userRegisterData, setUserRegisterData, formErrors}) {
  return (
    <div>
        <RegisterInputGroup
            label="First Name" 
            type="text" 
            value={userRegisterData.userFirstname}
            placeholder="enter your first name"
            onChange={(e) => 
                setUserRegisterData({...userRegisterData, userFirstname: e.target.value})
            } 
        />
        <p style={{color: "red"}}>{formErrors.userFirstname}</p>
        <RegisterInputGroup
            label="Last Name" 
            type="text" 
            value={userRegisterData.userLastname}
            placeholder="enter your last name" 
            onChange={(e) => 
                setUserRegisterData({...userRegisterData, userLastname: e.target.value})
            } 
        /><p style={{color: "red"}}>{formErrors.userLastname}</p>
        <RegisterInputGroup
            label="Phone Number" 
            type="text" 
            value={userRegisterData.userPhonenumber}
            placeholder="enter your phone number" 
            onChange={(e) => 
                setUserRegisterData({...userRegisterData, userPhonenumber: e.target.value})
            } 
        /><p style={{color: "red"}}>{formErrors.userPhonenumber}</p>
    </div>
    
  )
}

export default Pagination2;