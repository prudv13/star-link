import React from 'react'
import RegisterInputGroup from './RegisterInputGroup';

function Pagination1({userRegisterData, setUserRegisterData, formErrors}) {
  return (
    <div>
        <RegisterInputGroup 
            label="Email" 
            type="email" 
            value={userRegisterData.userEmail}
            placeholder="enter your email"
            onChange={(e) => 
                setUserRegisterData({...userRegisterData, userEmail: e.target.value})
            } 
        /> <p style={{color: "red"}}>{formErrors.userEmail}</p>
        <RegisterInputGroup 
            label="Password" 
            type="password" 
            value={userRegisterData.userPassword}
            placeholder="enter your password" 
            onChange={(e) => 
                setUserRegisterData({...userRegisterData, userPassword: e.target.value})
            } 
        />
        <p style={{color: "red"}}>{formErrors.userPassword}</p>
        <RegisterInputGroup 
            label="Confirm Password" 
            type="password" 
            value={userRegisterData.userConfirmPassword}
            placeholder="confirm your password"
            errorMessage= "Passwords didn't match!"
            onChange={(e) => 
                setUserRegisterData({...userRegisterData, userConfirmPassword: e.target.value})
            } 
        />
        <p style={{color: "red"}}>{formErrors.userConfirmPassword}</p>
    </div>
  )
}

export default Pagination1;