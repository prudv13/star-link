import { useEffect, useState } from "react";
import UserRegisterCSS from "./user-register.module.css";
import Pagination1 from "./Pagination1";
import Pagination2 from "./Pagination2";
import Pagination3 from "./Pagination3";
import Pagination4 from "./Pagination4";
import RegisterButtons from "./RegisterButtons";


export const UserRegister = () => {

    const [userRegisterData, setUserRegisterData] = useState({
        userFirstname: "",
        userLastname: "",
        userEmail: "",
        userPassword: "",
        userConfirmPassword: "",
        userPhonenumber: "",
        userState: "",
        userDistrict: "",
        userCity: "",
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(userRegisterData);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        if(!values.userFirstname){
            errors.userFirstname = "First name is required!";
        }
        if(!values.userLastname){
            errors.userLastname = "Last name is required!";
        }
        if(!values.userEmail){
            errors.userEmail = "Email is required!";
        }
        if(!values.userPassword){
            errors.userPassword = "Password is required!";
        }
        else if(values.userPassword.length < 4){
            errors.userPassword = "Password must be more than 4 characters";
        }
        else if(values.userPassword.length > 15){
            errors.userPassword = "Password cannot exceed more than 15 characters";
        }
        if(!values.userConfirmPassword){
            errors.userConfirmPassword = "Confirm your password!";
        }
        else if(values.userConfirmPassword !== values.customerPassword){
            errors.userConfirmPassword = "Password didn't match!";
        }
        if(!values.userFirstname){
            errors.userFirstname = "First name is required!";
        }
        else if(!values.userLastname){
            errors.userLastname = "Last name is required!";
        }
        if(!values.userPhonenumber){
            errors.userPhonenumber = "Phone Number is required!";
        }
        else if(typeof parseInt(values.userPhonenumber) !== "number" ){
            errors.userPhonenumber = "Enter only numeric values";
        }
        else if(values.userPhonenumber.length > 10){
            errors.userPhonenumber = "Phone Number should be 10 characters long!";
        }
        if(!values.userState){
            errors.userState = "State is required!";
        }
        if(!values.userDistrict){
            errors.userDistrict = "District is required!";
        }
        if(!values.userCity){
            errors.userCity = "City is required!";
        }
        return errors;
    }

    const [userRegisterPage, setUserRegisterPage] = useState(0);
    const userRegisterTitle = ["Register", "Personal Information", "Address", "Done"];

    const UserRegisterPageDisplay = () => {
        if(userRegisterPage === 0){
            return <Pagination1 userRegisterData={userRegisterData} setUserRegisterData={setUserRegisterData} formErrors={formErrors} />;
        }
        else if (userRegisterPage === 1){
            return <Pagination2 userRegisterData={userRegisterData} setUserRegisterData={setUserRegisterData} formErrors={formErrors} />;
        }
        else if (userRegisterPage === 2){
            return <Pagination3 userRegisterData={userRegisterData} setUserRegisterData={setUserRegisterData} formErrors={formErrors} />;
        }
        else {
            return <Pagination4 userRegisterData={userRegisterData} setUserRegisterData={setUserRegisterData} />;
        }
        
    }

    // async function handleSubmit(event) {
    //     event.preventDefault();
    //     await Axios.post("http://localhost:8080/save", 
    //     {
    //         customerFirstname: customerFirstname,
    //         customerLastname: customerLastname,
    //         customerEmail: customerEmail,
    //         customerPassword: customerPassword,
    //         customerPhonenumber: customerPhonenumber,
    //         customerState: customerState,
    //         customerDistrict: customerDistrict,
    //         customerCity: customerCity,
    //         customerZipcode: customerZipcode
    //     });

        // setCustomerFirstname("");
        // setCustomerLastname("");
        // setCustomerEmail("");
        // setCustomerPassword("");
        // setCustomerPhonenumber("");
        // setCustomerState("");
        // setCustomerDistrict("");
        // setCustomerCity("");
        // setCustomerZipcode("");
    //}

    return (
        <div className={UserRegisterCSS.customer_register_bg}>
            <div className={UserRegisterCSS.customer_register_container}>

            <div className={UserRegisterCSS.progress_bar}>
            <div className={UserRegisterCSS.progress_bar_div} style={{
                width: userRegisterPage===0 ? "1%" : userRegisterPage===1 ? "33.3%" : userRegisterPage===2 ? "66.6%" : "100%",
                backgroundImage: userRegisterPage===3 ? "linear-gradient( 135deg, #70F570 10%, #49C628 100%)" : "linear-gradient(111.8deg, rgba(0,104,155,1) 19.8%, rgba(0,173,239,1) 92.1%)"
                }}>
            </div>
            </div>
            
            <form autoComplete="off" className={`${UserRegisterCSS.customer_register_form} needs-validation`}>

                <h3 className="text-center p-3">{userRegisterTitle[userRegisterPage]}</h3>
                <div className="text-start">{UserRegisterPageDisplay()}</div>

                <div className="mt-5 d-flex justify-content-center">
                {userRegisterPage !== 0 && userRegisterPage !== 3 ? (<RegisterButtons text="Prev" 
                    onClick={(e)=>{
                        e.preventDefault();
                        setUserRegisterPage((currentPage) => currentPage-1);
                    }}
                />) : null}
                <RegisterButtons text={userRegisterPage !==3 ? "Next" : "Finish"} 
                    onClick={(e)=>{
                        e.preventDefault();
                        
                        if(userRegisterPage === userRegisterTitle.length - 1){
                            console.log(userRegisterData);
                            //window.location.reload();
                        }
                        else{
                            setUserRegisterPage((currentPage) => currentPage+1);
                        }
                        setFormErrors(validate(userRegisterData));
                        setIsSubmit(true);
                    }}
                />
            </div>
            </form>
            </div>
            
        </div>
    );
}