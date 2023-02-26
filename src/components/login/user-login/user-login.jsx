import { useState } from "react";
import UserLoginCSS from "./user-login.module.css";
import { Link } from "react-router-dom";
import logo from '../../home/truck-logo.png';
import axios from "axios";

export const UserLogin = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const {email, password} = loginData;

    const handleChange = e => {
        setLoginData({...loginData, [e.target.name] : e.target.value});
    }

    const submitHandler = (e) => {
        console.log(loginData);
        e.preventDefault();
        axios.post("http://192.168.50.18:8080/api/login", JSON.stringify(loginData),
        {
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            console.log(res);
        });

        // await axios.get("http://192.168.50.18:8080/api/login")
        // .then((res) => console.log(res));
    }
    
    return (
        <div className={UserLoginCSS.customer_login_bg}>
            <div className={UserLoginCSS.customer_login_container}>
            <form autoComplete="off" className={`${UserLoginCSS.customer_login_form} needs-validation`} onSubmit={(e) => submitHandler(e)}>
                <div className="d-flex justify-content-center" >
                    <img className={UserLoginCSS.customer_login_icon} src={logo} alt="login logo" style={{width: "220px", marginTop: "30px"}} />
                </div>
                <h6 className="text-center p-3">Login into your account</h6>
                <div className="form-group was-validated">
                    <label htmlFor="userEmail" className="form-label">Email</label>
                    <input type="email" name="email" placeholder="enter your email" className="form-control" value={email} required
                        onChange={handleChange} /><div className="invalid-feedback">Please Enter your email</div>
                </div><br/>
                <div className="form-group was-validated">
                    <label htmlFor="password" className="form-label">Password</label><br />
                    <input type="password" name="password" placeholder="enter your password" className="form-control" value={password} required
                    onChange={handleChange} /><div className="invalid-feedback">Please Enter your password</div>
                </div><br/>

                
                {/* <div className="text-center">
                <Link to="/vendor-dashboard" style={{textDecoration: "none"}}>
                    <button type="submit" name="submit" className={UserLoginCSS.customer_login_btn}>Login</button> <br />
                </Link>
                </div> */}

                <div className="dropdown text-center p-3">
                <button className={`${UserLoginCSS.customer_login_btn} btn btn-outline-light dropdown-toggle`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                 Login
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="/customer-dashboard">Customer</a></li>
                <li><a className="dropdown-item" href="/vendor-dashboard">Vendor</a></li>
               </ul>
              </div>


                <div className="dropdown text-center p-3">
                <button className={`btn btn-outline-light dropdown-toggle`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                 Signup
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="/customer-register">Customer</a></li>
                <li><a className="dropdown-item" href="/vendor-register">Vendor</a></li>
               </ul>
              </div>

                <Link to="/" style={{textDecoration: "none"}}>
                <button type="submit" className="btn btn-outline-light" style={{marginTop: "-20px", marginLeft:"-35px"}}>BACK</button>
                </Link>
                
            </form>
            </div>
        </div>
    );
}