import UserRegisterCSS from "./user-register.module.css";

function RegisterInputGroup({label, type, value, onChange, placeholder}) {

    return (
      <div>
          <div className="form-group was-validated">
              <label htmlFor="input" className='form-label'>{label}</label>
              <input type={type} value={value} onChange={onChange} placeholder={placeholder} required
              className={`${UserRegisterCSS.customer_register_form_input} form-control`} />
          </div>
      </div>
    )
  }
  
  export default RegisterInputGroup;