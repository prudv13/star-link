import React from 'react';
import { Link } from 'react-router-dom';
import HomeCSS from './homepage.module.css';
import logo from '../home/truck-logo.png';
import Animation from '../home/giflocation.gif';

function Home() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-md bg-transparent">
        <div className="container-fluid d-flex justify-content-center">
          <a className="navbar-brand" href="/">
            <img src={logo} style={{width: "400px", marginTop: "80px"}} alt='logo' />
          </a>
          
        </div>
      </nav>

      <div className={`${HomeCSS.home_herocontainer}`}>
      <section className= "d-flex align-items-center justify-content-center">
        <div className="px-3">
          <h1 className={`${HomeCSS.home_heroheader}`}>
            Move everything, Forward
          </h1>
          <p className={`${HomeCSS.home_herocaption} mb-4 text-center`}>
            Taking logistics in a new direction with an advanced platform.
          </p>
          <div className='d-flex flex-row justify-content-center' style={{marginRight: "0"}}>

              <div className="dropdown">
                <button className={`${HomeCSS.home_herobtn} btn btn-secondary dropdown-toggle`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                 Register
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="/customer-register">Customer</a></li>
                <li><a className="dropdown-item" href="/vendor-register">Vendor</a></li>
               </ul>
              </div>


            <Link to="/user-login" >
              <button className={`${HomeCSS.home_herobtn}`}>Login</button>
            </Link>
          </div>
        </div>
      </section>
      <div className='text-center'>
        <img src={Animation} style={{width: "400px"}} alt="gif" />
      </div>
      </div>
    </div>
  )
}

export default Home;