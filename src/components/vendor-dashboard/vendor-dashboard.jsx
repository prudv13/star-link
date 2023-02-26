import React, { useEffect, useRef, useState } from 'react';
import Vendordashboard from './vendor-dashboard.module.css';
import Vendorprofile from './profile-vendor.png';
import logo from '../home/truck-logo.png';
import { Link } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';


mapboxgl.accessToken = 'pk.eyJ1IjoicHJ1ZHYxMyIsImEiOiJjbGVqeGJlbzUwZnlpM3lxc2RwODVmZGk1In0.VjeUe48153TvLmFeSN0SEA';

const VendorDashboard = () => {

  const [showPopup, setShowPopup] = useState(false);


  // ------------------------------ SIDEBAR -------------------------------------- //

  const [vendorData, setVendorData] = useState({
    origin: "",
    destination: "",
    capacity: "",
    startDate: "",
    transportType: ""
  });

  const {origin, destination, capacity, startDate, transportType} = vendorData;


  const handleChange = e => {
    setVendorData({...vendorData, [e.target.name] : e.target.value});
  }

  const handleSubmit = (e) => {
    console.log(vendorData);
    e.preventDefault();
    axios.post("http://192.168.50.114:8080/api/addData", JSON.stringify(vendorData),
    {
      headers:{
          'Content-Type': 'application/json'
      }
    }).then((res)=>{
      if (res.ok) {
        setShowPopup(true);
      }
      console.log(res);
    });
    //console.log(vendorData);
    //navigate("/")
  }


  // ------------------------------ MAPBOX -------------------------------------- //
  const mapRef = useRef(null);
  const directionsRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 4,
      interactive: true
    });

    return () => map.remove();
  }, []);



  return (
    <div className={`${Vendordashboard.vendor_dashboard}`}>

      {/* -------------------------------- SIDEBAR START --------------------------------- */}

      <div className={`${Vendordashboard.sidebar}`}>
        <header className='d-flex flex-row align-items-center justify-content-center'>
            <div className={`${Vendordashboard.profile}`}>
                <img src={Vendorprofile} alt="user-img" className={`${Vendordashboard.profile_img}`} style={{width: "80px"}} />
            </div>
            <div>
            <h5>Name: Jackson</h5>
            <h5>User ID: 13</h5>
            </div>
        </header>

        <div>
            <form autoComplete="off" className={`needs-validation`} onSubmit={(e) => handleSubmit(e)}>
              <div className='d-flex justify-content-evenly mb-4'>
              <div className="form-group was-validated">
                    <label htmlFor="origin" className="form-label">Origin</label>
                    <select type="text" name="origin" placeholder="Enter pickup point" className="form-control" onChange={handleChange} value={origin} required >
                    <option value="">Enter pickup point</option>
                    <option value="Visakhapatnam">Visakhapatnam</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="item3">Vijayawada</option>
                    <option value="item3">Amravati</option>
                    <option value="item3">Nellore</option>
                    <option value="item3">Ujjain</option>
                    <option value="item3">Vizianagaram</option>
                    <option value="item3">Bengaluru</option>
                    </select>
                    <div className="invalid-feedback">Enter pickup point</div>
                </div><br/>
                <div className="form-group was-validated">
                    <label htmlFor="destination" className="form-label">Destination</label><br />
                    <select type="text" name="destination" placeholder="Enter drop point" className="form-control" required value={destination} onChange={handleChange}>
                    <option value="">Enter pickup point</option>
                    <option value="Visakhapatnam">Visakhapatnam</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="item3">Vijayawada</option>
                    <option value="item3">Amravati</option>
                    <option value="item3">Nellore</option>
                    <option value="item3">Ujjain</option>
                    <option value="item3">Vizianagaram</option>
                    <option value="item3">Bengaluru</option>
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
                    <label htmlFor="startDate" className="form-label">Date</label><br />
                    <input type="date" name="startDate" placeholder="Enter the date" className="form-control" required value={startDate} onChange={handleChange} />
                    <div className="invalid-feedback">Date required</div>
                </div><br/>
                <div className="form-group was-validated">
                    <label htmlFor="transportType" className="form-label">Transport Type</label><br />
                    <select type="text" name="transportType" placeholder="enter the means of transport" className="form-control" value={transportType} onChange={handleChange} required >
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
                    <button type='submit' className={`${Vendordashboard.vendor_order_btn}`}>Place Load</button> <br />
                </div>

                {showPopup &&
                  <div className="popup">
                      <p>Your POST request was successful!</p>
                  </div>
                }
            </form>
          </div>
        </div>

        {/* -------------------------------- SIDEBAR END --------------------------------- */}

        {/* -------------------------------- MAIN CONTENT --------------------------------- */}

      <div className={`${Vendordashboard.vendor_dashboard_main}`}>
        <div className={`${Vendordashboard.mainheader} fixed-top`}>
          <div>
          <img src={logo} style={{width: "250px", marginLeft: "25px"}} alt='logo' />
          </div>
          <div>
          <Link to="/navigation-guide" >
          <button className='btn ' style={{marginRight: "25px", backgroundColor:"#fa5252", color: "#fff"}}>Navigation Guide</button>
          </Link>
          {/* <Link to="/live-events" >
          <button className='btn ' style={{marginRight: "25px", backgroundColor:"#51cf66", color: "#fff"}}>Live Loads</button>
          </Link> */}
          <Link to="/user-login" >
          <button className='btn btn-light' style={{marginRight: "25px"}}>Logout</button>
          </Link>
          </div>
        </div> 



        {/* -------------------------------- MAPBOX START --------------------------------- */}

        <div>
          <form onSubmit={(event) => event.preventDefault()} style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "16px"
          }}>
          </form>
        <div ref={mapRef} className={`${Vendordashboard.map_container}`} />
      </div>
        {/* -------------------------------- MAPBOX END --------------------------------- */}
      </div>
      </div>
  )
}

export default VendorDashboard;