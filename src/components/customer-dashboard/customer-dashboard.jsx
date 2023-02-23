import React from 'react';
import CustomerDashboardCSS from "./customer-dashboard.module.css";
import DashboardContent from './dashboard-content';
import Sidemenu from './sidemenu';
import logo from '../home/truck-logo.png';

function CustomerDashboard() {
  return (
    <div className={`${CustomerDashboardCSS.dashboard_body}`}>
      <div>
      <nav class="navbar fixed-top navbar-expand-md bg-dark">
        <div class="container-fluid">
        <button class="btn bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
          <img src={logo} style={{width: "140px"}} alt='logo' />
        </button>
          <form class="d-flex" role="search">
            <button>
              <i class="bi bi-person-square"></i>
            </button>
          </form>
        </div>
      </nav>
      <Sidemenu />
      <DashboardContent />
      </div>
      
    </div>
  )
}

export default CustomerDashboard;