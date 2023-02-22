import { Axios } from "axios";
import { useState } from "react";
import UserLoginCSS from "./user-login.module.css";
import UserLoginIcon from "../user-login/truck-img1.jpg";
import { Link } from "react-router-dom";

export const UserLogin = () => {

    const[customerEmail, setCustomerEmail] = useState("");
    const[customerPassword, setCustomerPassword] = useState("");

    // const customerLogin = async(event) => {
    //     event.preventDefault();
    //     await Axios.post("http://localhost:8080/check",
    //     {
    //         custmrEmail: customerEmail,
    //         custmrPassword: customerPassword
    //     });

    //     setCustomerEmail();
    //     setCustomerPassword();
    // }
    
    return (
        <div className={UserLoginCSS.customer_login_bg}>
            <div className={UserLoginCSS.customer_login_container}>
            <form autoComplete="off" className={`${UserLoginCSS.customer_login_form} needs-validation`}>
                <div className="d-flex justify-content-center" >
                    <img className={UserLoginCSS.customer_login_icon} src={UserLoginIcon} alt="Customer Login Icon" />
                </div>
                <h6 className="text-center p-3">Login into your account</h6>
                <div className="form-group was-validated">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" placeholder="enter your email" className="form-control" required
                        onChange={(event)=>{
                            setCustomerEmail(event.target.value);
                        }} /><div className="invalid-feedback">Please Enter your email</div>
                </div><br/>
                <div className="form-group was-validated">
                    <label htmlFor="password" className="form-label">Password</label><br />
                    <input type="password" name="password" placeholder="enter your password" className="form-control" required
                    onChange={(event)=>{
                        setCustomerPassword(event.target.value);
                    }} /><div className="invalid-feedback">Please Enter your password</div>
                </div><br/>
                <div className="text-center">
                    <button className={UserLoginCSS.customer_login_btn} onClick>Login</button> <br />
                </div>
                <div className="text-center p-3">
                    <p className="small">Don't have an account? <br /> <span className={UserLoginCSS.customer_login_span}>
                        <Link to="/user-register">SIGN UP</Link></span>
                    </p>
                </div>
                <Link to="/">
                    <p className={UserLoginCSS.back_click}>BACK</p>
                </Link>
                
            </form>
            </div>
        </div>
    );
}