import { useState } from "react";
import UserRegisterCSS from "./user-register.module.css";
import { Link } from "react-router-dom";
import logo from '../home/truck-logo.png';
import axios from "axios";


export const CustomerRegister = () => {

    // let navigate = useNavigate();

    const [registerData, setRegisterData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        phoneNumber: ""
    });

    const {firstname, lastname, email, password, confirmpassword, phoneNumber} = registerData;

    const handleChange = e => {
        setRegisterData({...registerData, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        console.log(registerData);
        e.preventDefault();
        axios.post("http://192.168.50.18:8080/api/sign-up/customer", JSON.stringify(registerData),
        {
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            console.log(res);
        });
        //console.log(registerData);
        //navigate("/") 
    }



    return (
        <div className={UserRegisterCSS.customer_register_bg}>
            <div className={UserRegisterCSS.customer_register_container}>
            <form autoComplete="off" className={`${UserRegisterCSS.customer_register_form} needs-validation`} onSubmit={(e) => handleSubmit(e)}>
                <div className={`${UserRegisterCSS.customer_register_logo}`}>
                    <img src={logo} style={{width: "350px", marginTop: "30px"}} alt='logo' />
                </div>

                <div className="d-flex">
                <div className="p-3">
                <div className="form-group was-validated m-2">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" name="firstname" placeholder="Enter your first name" className="form-control" onChange={handleChange} value={firstname} required />
                    <div className="invalid-feedback">Please enter your first name</div>
                </div><br/>

                <div className="form-group was-validated m-2">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" name="lastname" placeholder="Enter your last name" className="form-control" onChange={handleChange} value={lastname} required />
                    <div className="invalid-feedback">Please enter your last name</div>
                </div><br/>
                </div>
                
                <div className="p-3">
                <div className="form-group was-validated m-2">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" placeholder="Enter your email" className="form-control" onChange={handleChange} value={email} required />
                    <div className="invalid-feedback">Please Enter your email</div>
                </div><br/>

                <div className="form-group was-validated m-2">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" placeholder="Enter your password" className="form-control" onChange={handleChange} value={password} required />
                    <div className="invalid-feedback">Please Enter your password</div>
                </div><br/>

                </div>

                <div className="p-3">
                <div className="form-group was-validated m-2">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input type="text" name="phoneNumber" placeholder="Enter your phone number" className="form-control" onChange={handleChange} value={phoneNumber} required />
                    <div className="invalid-feedback">Please enter your phone number</div>
                </div><br/>

                <div className="form-group was-validated m-2">
                    <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                    <input type="password" name="confirmpassword" placeholder="Enter your password" className="form-control" onChange={handleChange} value={confirmpassword} required />
                    <div className="invalid-feedback">Please Enter your password</div>
                </div><br/>
                
                </div>
                </div>


               
                <div className="mt-3 d-flex justify-content-center">
                <Link to="/user-login" style={{textDecoration: "none"}}>
                    <button type="submit" className={UserRegisterCSS.customer_register_btn}>Submit</button>
                </Link>
                </div> 

                
            </form>
            
            <Link to="/" style={{textDecoration: "none"}}>
            <button type="button" class="btn btn-outline-light" style={{marginTop: "60px"}}>BACK</button>
            </Link>
            </div>
            
        </div>
    );
}