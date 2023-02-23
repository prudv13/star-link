import React from 'react';
import CustomerDashboardCSS from "./customer-dashboard.module.css";

const DashboardContent = () => {
  return (
    <div className={`${CustomerDashboardCSS.dashboard_content}`}>
      <div className='bg-transparent' style={{height: "15vh", maxWidth: "90%"}}></div>

        <div className='row d-flex justify-content-center'>
          <div className='col-md-3'>
            <div class="card text-white bg-dark mb-3" 
              style={{maxWidth: "17rem"}}>
              <div class="card-header">Order 1</div>
              <div class="card-body">
                <h5 class="card-title">Primary card title</h5>
                <p class="card-text">Some quick example [.. truncated content ..]</p>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div class="card text-white bg-dark mb-3" 
              style={{maxWidth: "17rem"}}>
              <div class="card-header">Order 2</div>
              <div class="card-body">
                <h5 class="card-title">Primary card title</h5>
                <p class="card-text">Some quick example [.. truncated content ..]</p>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div class="card text-white bg-dark mb-3" 
              style={{maxWidth: "17rem"}}>
              <div class="card-header">Order 3</div>
              <div class="card-body">
                <h5 class="card-title">Primary card title</h5>
                <p class="card-text">Some quick example [.. truncated content ..]</p>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 p-2 bg-dark-subtle d-flex justify-content-center text-center' style={{height: "10rem"}}>
          <div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>
          </div>
        </div>
    </div>
  )
}

export default DashboardContent;