import logo from '../home/truck-logo.png';
import React from 'react';
import CustomerDashboardCSS from "./customer-dashboard.module.css";

const Sidemenu = () => {
  return (
    <div className={`${CustomerDashboardCSS.sidebar}`}>
      <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class={`offcanvas-header text-center ${CustomerDashboardCSS.sidebar_header}`}>
          <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
          <img src={logo} style={{width: "200px"}} alt='logo' />
          </h5>
          <button type="button" class="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            <form autoComplete="off" className={`${CustomerDashboardCSS.customer_dashboard_form} needs-validation`}>
                <div className="form-group was-validated">
                    <label htmlFor="origin" className="form-label">Origin</label>
                    <input type="text" name="origin" placeholder="enter your pickup location" className="form-control" required
                        onChange={(event)=>{
                            //setCustomerEmail(event.target.value);
                        }} /><div className="invalid-feedback">Enter your pickup location</div>
                </div><br/>
                <div className="form-group was-validated">
                    <label htmlFor="destination" className="form-label">Destination</label><br />
                    <input type="text" name="destination" placeholder="enter your drop location" className="form-control" required
                    onChange={(event)=>{
                        //setCustomerPassword(event.target.value);
                    }} /><div className="invalid-feedback">Enter your drop location</div>
                </div><br/>
                <div className="form-group was-validated">
                    <label htmlFor="capacity" className="form-label">Capacity</label><br />
                    <input type="text" name="capacity" placeholder="enter the load capacity" className="form-control" required
                    onChange={(event)=>{
                        //setCustomerPassword(event.target.value);
                    }} /><div className="invalid-feedback">Enter your drop location</div>
                </div><br/>
                <div className="form-group was-validated">
                    <label htmlFor="transporttype" className="form-label">Transport Type</label><br />
                    <input type="text" name="transporttype" placeholder="enter the means of transport" className="form-control" required
                    onChange={(event)=>{
                        //setCustomerPassword(event.target.value);
                    }} /><div className="invalid-feedback">Transport type required</div>
                </div><br/>
                <div className="text-center">
                    <button className={CustomerDashboardCSS.customer_order_btn} onClick>Place Order</button> <br />
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidemenu;