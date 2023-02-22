import React from 'react'
import RegisterInputGroup from './RegisterInputGroup';

function Pagination3({userRegisterData, setUserRegisterData, formErrors}) {
  return (
    <div>
        <RegisterInputGroup 
            label="State" 
            type="text" 
            value={userRegisterData.userState}
            placeholder="enter the state name" 
            onChange={(e) => 
                setUserRegisterData({...userRegisterData, userState: e.target.value})
            } 
        /><p style={{color: "red"}}>{formErrors.userState}</p>
        <RegisterInputGroup 
            label="District" 
            type="text" 
            value={userRegisterData.userDistrict}
            placeholder="enter the district name" 
            onChange={(e) => 
                setUserRegisterData({...userRegisterData, userDistrict: e.target.value})
            } 
        /> <p style={{color: "red"}}>{formErrors.userDistrict}</p>
        <RegisterInputGroup 
            label="City" 
            type="text" 
            value={userRegisterData.userCity}
            placeholder="enter the city name" 
            onChange={(e) => 
                setUserRegisterData({...userRegisterData, userCity: e.target.value})
            } 
        /><p style={{color: "red"}}>{formErrors.userCity}</p>
    </div>
  )
}

export default Pagination3;