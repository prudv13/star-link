import React from 'react';
import UserRegisterIcon from "./truck-img2.jpg";
import UserRegisterCSS from "./user-register.module.css";

function Pagination4({userRegisterData, setUserRegisterData}) {
  return (
    <div>
        <div className="d-flex justify-content-center">
          <img className={UserRegisterCSS.customer_register_icon} src={UserRegisterIcon} alt="Customer Login Icon" />
        </div>
        <h4 className="text-center mt-2">Registration was successful for...</h4>
        <div className="card mt-4">
            <h6 className="card-header bg-scondary text-green">{userRegisterData.userFirstname} {userRegisterData.userLastname}</h6>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Email: <span className='h6 text-success'>{userRegisterData.userEmail}</span></li>
                    <li className="list-group-item">Password: <span className='h6 text-success'>{userRegisterData.userPassword}</span></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Pagination4;