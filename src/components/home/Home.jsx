import React from 'react';
import { Link } from 'react-router-dom';
import HomeCSS from './homepage.module.css';
import logo from '../home/truck-logo.png';

function Home() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-md bg-transparent">
        <div className="container-fluid d-flex justify-content-end">
          <a className="navbar-brand" href="/">
            <img src={logo} style={{width: "200px"}} alt='logo' />
          </a>
          
        </div>
      </nav>

      <section className={`${HomeCSS.home_herocontainer} d-flex align-items-center justify-content-center`}>
        <div className="px-3">
          <h1 className={`${HomeCSS.home_heroheader}`}>
            Move everything, Forward
          </h1>
          <p className={`${HomeCSS.home_herocaption} mb-4 text-center`}>
            Taking logistics in a new direction with an advanced platform.
          </p>
          <div className='d-flex flex-row justify-content-center' style={{marginRight: "0"}}>
            <Link to="/user-register" >
              <button className={`${HomeCSS.home_herobtn}`}>Register</button>
            </Link>
            <Link to="/user-login" >
              <button className={`${HomeCSS.home_herobtn}`}>Login</button>
            </Link>
          </div>
        </div>
      </section>


      {/* <section className={`${HomeCSS.who_we_are}`}>
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h2 class="wwa-header p-2">Who We Are</h2>
              <p class="wwa-description">Backed by innovative technology and a dedicated team of domain experts,
                Our product is not just one of the largest logistics and transportation networks. 
                It’s a platform and service that helps shippers and customers of all sizes take control of their 
                freight and deliver on their goals.
              </p>
            </div>

            <div class="col-12 col-md-6 p-3">
              <div class="card wwa-card">
                <div class="card-body">
                  <h5 class="card-title fs-2">Our Vision</h5>
                  <p class="card-text">A world with a global community, 
                    who all have equal access to exceptional quality food 
                    that is both environmentally and economically sustainable.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 p-3">
              <div class="card wwa-card">
                <div class="card-body">
                  <h5 class="card-title fs-2">Our Mission</h5>
                  <p class="card-text">
                    To design the most economically viable, 
                    resource-efficient, and productive aquaponic system possible, 
                    while supporting the local farming community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Home;