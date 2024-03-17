import React from 'react'

export default function City() {
  return (
    <div>
        {/* <i className="fas fa-caret-down fa-3x" style={{ color: 'red' }}></i> */}
        <div className='row bgh3'>
            <div className='col-md-12'>
                <h1 className='mt-5 mb-5'><b>Our Services</b></h1>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-md-4'>
                <h6 style={{fontSize:"21px"}}><i className="fa-solid fa-location-crosshairs fa-1x" style={{color: 'red'}}></i> Kakinada</h6>
            </div>
            <div className='col-md-4'>
                <h6 style={{fontSize:"21px"}}><i className="fa-solid fa-location-crosshairs fa-1x" style={{color: 'red'}}></i> Rajamundry</h6>
            </div>
            <div className='col-md-4'>
                <h6 style={{fontSize:"21px"}}><i className="fa-solid fa-location-crosshairs fa-1x" style={{color: 'red'}}></i> Vijayawada</h6>
            </div>
        </div>
        <div className='row mt-2'>
            <div className='col-md-4'>
                <h6 style={{fontSize:"21px"}}><i className="fa-solid fa-location-crosshairs fa-1x" style={{color: 'red'}}></i> Amalapuram</h6>
            </div>
            <div className='col-md-4'>
                <h6 style={{fontSize:"21px"}}><i className="fa-solid fa-location-crosshairs fa-1x" style={{color: 'red'}}></i> Vishakapatnam</h6>
            </div>
            <div className='col-md-4'>
                <h6 style={{fontSize:"21px"}}><i className="fa-solid fa-location-crosshairs fa-1x mb-3" style={{color: 'red'}}></i> Hyderabad</h6>
            </div>
        </div>
    </div>
  )
}
