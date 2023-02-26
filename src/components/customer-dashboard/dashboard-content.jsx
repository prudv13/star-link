import React from 'react';
import CustomerDashboardCSS from "./customer-dashboard.module.css";

const DashboardContent = () => {
  return (
    <div className={`${CustomerDashboardCSS.dashboard_content}`}>
      <div className='bg-transparent' style={{height: "15vh", maxWidth: "90%"}}></div>
    </div>
  )
}

export default DashboardContent;