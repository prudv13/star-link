import React, { useEffect, useState } from 'react';
import Customerdashboard from './customer-dashboard.module.css';
import Customerprofile from './profile-customer.png';
import logo from '../home/truck-logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const VendorDashboard = () => {


  // ------------------------------- sidebar ------------------------------------------//

  const [data, setData] = useState(null);

  useEffect(()=> {
    axios.get("https://192.168.50.18:8080/api/get/")
    .then((response) => {
      setData(response.data);
      console.log(response);
    })
    .catch(error => console.error(error));
  })

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);
  


  const [customerData, setCustomerData] = useState({
    origin: "",
    destination: "",
    capacity: "",
    date: "",
    transport: ""
  });

  const {origin, destination, capacity, date, transport} = customerData;
    
    const handleChange = e => {
        setCustomerData({...customerData, [e.target.name] : e.target.value});
    }
    
    const handleSubmit = (e) => {
      console.log(customerData);
      e.preventDefault();
      axios.post("http://192.168.50.18:8080/api/", JSON.stringify(customerData),
      {
          headers:{
              'Content-Type': 'application/json'
          }
      }).then((res)=>{
          console.log(res);
      });
      //console.log(vendorData);
      //navigate("/")
      
    }




  return (
    <div className={`${Customerdashboard.customer_dashboard}`}>

      {/* ------------------------ SIDE BAR START -------------------------------- */}

      <div className={`${Customerdashboard.sidebar}`}>
        <header className='d-flex flex-row align-items-center justify-content-center'>
            <div className={`${Customerdashboard.profile}`}>
                <img src={Customerprofile} alt="user-img" className={`${Customerdashboard.profile_img}`} style={{width: "80px"}} />
            </div>
            <div>
            <h5>Name: Eric Dawson</h5>
            <h5>User ID: 09</h5>
            </div>
        </header>

        <div>
            <form autoComplete="off" className={`needs-validation`} onSubmit={(e) => handleSubmit(e)}>
              <div className='d-flex justify-content-evenly mb-4'>
              <div className="form-group was-validated">
                    <label htmlFor="origin" className="form-label">Origin</label>
                    <select type="text" name="origin" placeholder="Enter pickup point" className="form-control" onChange={handleChange} value={origin} required>
                    <option value="">Enter pickup point</option>
                    <option value="Visakhapatnam">Visakhapatnam</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Vijayawada">Vijayawada</option>
                    <option value="Amravati">Amravati</option>
                    <option value="Nellore">Nellore</option>
                    <option value="Ujjain">Ujjain</option>
                    <option value="Vizianagaram">Vizianagaram</option>
                    <option value="Bengaluru">Bengaluru</option>
                    </select>
                    <div className="invalid-feedback">Enter pickup point</div>
                </div><br/>
                <div className="form-group was-validated">
                    <label htmlFor="destination" className="form-label">Destination</label><br />
                    <select type="text" name="destination" placeholder="Enter drop point" className="form-control" required value={destination} onChange={handleChange}>
                    <option value="">Enter pickup point</option>
                    <option value="Visakhapatnam">Visakhapatnam</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Vijayawada">Vijayawada</option>
                    <option value="Amravati">Amravati</option>
                    <option value="Nellore">Nellore</option>
                    <option value="Ujjain">Ujjain</option>
                    <option value="Vizianagaram">Vizianagaram</option>
                    <option value="Bengaluru">Bengaluru</option>
                    </select>
                    <div className="invalid-feedback">Enter drop point</div>
                </div><br/>
                </div>
                <div className="form-group was-validated">
                    <label htmlFor="capacity" className="form-label">Capacity</label><br />
                    <input type="text" name="capacity" placeholder="Enter the load capacity" className="form-control" required value={capacity} onChange={handleChange} />
                    <div className="invalid-feedback">Enter load capacity</div>
                </div><br/>
                <div className="form-group was-validated">
                    <label htmlFor="date" className="form-label">Date</label><br />
                    <input type="date" name="date" placeholder="Enter the date" className="form-control" required value={date} onChange={handleChange} />
                    <div className="invalid-feedback">Date required</div>
                </div><br/>
                <div className="form-group was-validated">
                    <label htmlFor="transport" className="form-label">Transport Type</label><br />
                    <select type="text" name="transport" placeholder="enter the means of transport" className="form-control" value={transport} required onChange={handleChange}>
                    <option value="">Enter Transport Type</option>
                      <option value="BIKE">BIKE</option>
                      <option value="AUTO">AUTO</option>
                      <option value="TRUCK">TRUCK</option>
                      <option value="VAN">VAN</option>
                      <option value="NONE">NONE</option>
                    </select>
                    <div className="invalid-feedback">Transport type required</div>
                </div><br/>

                <div className="text-center">
                    <button type='submit' className={`${Customerdashboard.customer_order_btn}`}>Place Order</button> <br />
                </div>
              </form>
            </div>
          </div>

      {/* ------------------------ SIDE BAR END -------------------------------- */}


      {/* ------------------------ MAIN CONTENT -------------------------------- */}
      

      <div className={`${Customerdashboard.customer_dashboard_main}`}>
        <div className={`${Customerdashboard.mainheader}`}>
          <div>
          <img src={logo} style={{width: "250px", marginLeft: "25px"}} alt='logo' />
          </div>
          <div>
          <Link to="/user-login" >
          <button className='btn btn-light' style={{marginRight: "25px"}}>Logout</button>
          </Link>
          </div>
        </div>

        <div className='d-flex flex-column align-items-center'>
        <div className='d-flex justify-content-center'>
        <div className={`${Customerdashboard.maincontent}`}>
          <div className={`${Customerdashboard.content_row}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#fd7e14" className="bi bi-truck-front-fill" viewBox="0 0 16 16">
            <path d="M3.5 0A2.5 2.5 0 0 0 1 2.5v9c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2v-9A2.5 2.5 0 0 0 12.5 0h-9ZM3 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.9c0 .625-.562 1.092-1.17.994C10.925 7.747 9.208 7.5 8 7.5c-1.208 0-2.925.247-3.83.394A1.008 1.008 0 0 1 3 6.9V3Zm1 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-5-2h2a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2Z"/>
          </svg>
          </div>
        </div>
        <div className={`${Customerdashboard.maincontent}`}>
          <div className={`${Customerdashboard.content_row}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#228be6" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          </div>
        </div>
        <div className={`${Customerdashboard.maincontent}`}>
          <div className={`${Customerdashboard.content_row}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#f03e3e" class="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
          </svg>
          
          </div>
        </div>
        <div className={`${Customerdashboard.maincontent}`}>
          <div className={`${Customerdashboard.content_row}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#37b24d" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
          </svg>
          </div>
        </div>
        </div>

        <div style={{width: "98%", marginTop: "18px"}}>
          <div class="container-fluid d-flex flex-column align-items-center justify-content-center">
	          <div class="row justify-content-center">
		          <div class="col-md-12 bg-light m-1 p-2">
					      <div class="jumbotron">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Vendor Name</th>
                        <th scope="col">Capacity</th>
                        <th scope="col">Transport Type</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Call</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Jack</td>
                        <td>60</td>
                        <td>TRUCK</td>
                        <td>4.5</td>
                        <td>9873645095</td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M159.4,40A80.1,80.1,0,0,1,216,96.6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M151.1,70.9a47.9,47.9,0,0,1,34,34" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
                        </td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                        </td>
                      </tr>
                      <tr>
                        <td>Harry</td>
                        <td>100</td>
                        <td>TRUCK</td>
                        <td>5.0</td>
                        <td>9886785768</td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M159.4,40A80.1,80.1,0,0,1,216,96.6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M151.1,70.9a47.9,47.9,0,0,1,34,34" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
                        </td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                        </td>
                      </tr>
                      <tr>
                        <td>Brittany</td>
                        <td>240</td>
                        <td>TRUCK</td>
                        <td>3.9</td>
                        <td>0998648891</td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M159.4,40A80.1,80.1,0,0,1,216,96.6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M151.1,70.9a47.9,47.9,0,0,1,34,34" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
                        </td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                        </td>
                      </tr>
                      <tr>
                        <td>Ellen</td>
                        <td>10</td>
                        <td>BIKE</td>
                        <td>4.8</td>
                        <td>8775844647</td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M159.4,40A80.1,80.1,0,0,1,216,96.6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M151.1,70.9a47.9,47.9,0,0,1,34,34" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
                        </td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                        </td>
                      </tr>
                      <tr>
                        <td>Jackson</td>
                        <td>50</td>
                        <td>AUTO</td>
                        <td>4.2</td>
                        <td>808257488</td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M159.4,40A80.1,80.1,0,0,1,216,96.6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M151.1,70.9a47.9,47.9,0,0,1,34,34" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
                        </td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                        </td>
                      </tr>
                      <tr>
                        <td>Ronald</td>
                        <td>30</td>
                        <td>AUTO</td>
                        <td>4.2</td>
                        <td>9898764432</td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M159.4,40A80.1,80.1,0,0,1,216,96.6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M151.1,70.9a47.9,47.9,0,0,1,34,34" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
                        </td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                        </td>
                      </tr>
                      <tr>
                        <td>Biden</td>
                        <td>5</td>
                        <td>BIKE</td>
                        <td>4.7</td>
                        <td>9798687665</td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M159.4,40A80.1,80.1,0,0,1,216,96.6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M151.1,70.9a47.9,47.9,0,0,1,34,34" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
                        </td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                        </td>
                      </tr>
                      <tr>
                        <td>Peter</td>
                        <td>300</td>
                        <td>TRUCK</td>
                        <td>4.7</td>
                        <td>986865765</td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M159.4,40A80.1,80.1,0,0,1,216,96.6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M151.1,70.9a47.9,47.9,0,0,1,34,34" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
                        </td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                        </td>
                      </tr>
                      <tr>
                        <td>Brent</td>
                        <td>500</td>
                        <td>TRUCK</td>
                        <td>4.9</td>
                        <td>984573219</td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M159.4,40A80.1,80.1,0,0,1,216,96.6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M151.1,70.9a47.9,47.9,0,0,1,34,34" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
                        </td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                        </td>
                      </tr>
                      <tr>
                        <td>Greta</td>
                        <td>40</td>
                        <td>AUTO</td>
                        <td>4.2</td>
                        <td>976436738</td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M159.4,40A80.1,80.1,0,0,1,216,96.6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M151.1,70.9a47.9,47.9,0,0,1,34,34" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
                        </td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
			        </div>
		        </div>
	        </div>
	        
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default VendorDashboard;