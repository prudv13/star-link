import { Link } from "react-router-dom";
import UserRegisterCSS from "./user-register.module.css";

function RegisterButtons({text, onClick, isDisabled}) {
    return (
      <div>
          <button 
              className={UserRegisterCSS.customer_register_btn} 
              onClick={onClick}
              disabled={isDisabled}
              >{text === "Finish" ? <Link to="/user-login" style={{textDecoration: "none", color: "white"}}>Finish</Link> : text === "Next" ? "Next" : "Prev" }
          </button>
      </div>
    )
  }
  
  export default RegisterButtons;