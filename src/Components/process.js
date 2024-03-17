import React from 'react';
import './Nav.css'

export default function Process() {
  return (
    <div>
        {/* <i className="fas fa-caret-down fa-3x" style={{ color: 'red' }}></i> */}
        <div className='row bgh1'>
            <div className='col-md-12'>
                <h1 className='mt-5'><b>How it works</b></h1>
                <h5 className='mb-5'>We Offer Full Service Auto Repair & Maintenance</h5>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-3 mag1' style={{backgroundColor:'#F1F0E8'}}>
                <h1 style={{fontSize:'100px'}}>01</h1>
                <h5>Choose</h5>
                <p className='p-4'>Choose Your Service From Our Wide Range Of Offerings</p>
            </div>
            <div className='col-md-3 mag1' style={{backgroundColor:'#EEE0C9'}}>
                <h1 style={{fontSize:'100px'}}>02</h1>
                <h5>Book</h5>
                <p className='p-4'>Make an Appointment with us</p>
            </div>
            <div className='col-md-3 mag1' style={{backgroundColor:'#ADC4CE'}}>
                <h1 style={{fontSize:'100px'}}>03</h1>
                <h5>Fair Pricing</h5>
                <p className='p-4'>Always get a fair quote</p>
            </div>
            <div className='col-md-3 mag1' style={{backgroundColor:'#96B6C5'}}>
                <h1 style={{fontSize:'100px'}}>04</h1>
                <h5>At Your Doorstep</h5>
                <p className='p-4'>Get a door step pick up and drop facility</p>
            </div>
        </div>
    </div>
  )
}
