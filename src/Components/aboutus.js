import React from 'react'
import './Nav.css'

export default function Aboutus() {
  return (
    <div>
        {/* <i className="fas fa-caret-down fa-3x" style={{ color: 'red' }}></i> */}
        <div className='row bgh'>
            <div className='col-md-12'>
                <h1 className='mt-5'><b>Why Choose US</b></h1>
                <h5 className='mb-5'>We Offer Full Service Auto Repair & Maintenance</h5>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6 dada'>
                <center><img className='dada1 mt-5 mag' src="card1.png" alt="Card image cap"/></center>
                <h4 className='mt-4'><b>Engine Oil/Lubes</b></h4>
                <h6 className='mb-5'>Trust us for top-notch oil and lube service, keeping your engines purring</h6>
            </div>
            <div className='col-md-6 dada0'>
                <center><img className="dada1 mt-5 mag" src="elec.png" alt="Card image cap"/></center>
                <h4 className='mt-4'><b>Electrical Repairs</b></h4>
                <h6 className='mb-5'>Reliable electrical service, ensuring your vehicles are powered and safe.</h6>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6 dada00'>
                <center><img className="dada1 mt-5 mag" src="paint.png" alt="Card image cap"/></center>
                <h4 className='mt-4'><b>Body Painting</b></h4>
                <h6 className='mb-5'>Unleash Your Vehicle's True Colors with Our Masterful Paintwork</h6>
            </div>
            <div className='col-md-6 dada000'>
                <center><img className="dada1 mt-5 mag" src="wheel.png" alt="Card image cap"/></center>
                <h4 className='mt-4'><b>Wheel Alignment & Balancing</b></h4>
                <h6 className='mb-5'>Balancing Wheels, Balancing Your Journey – Precision in Every Spin</h6>
            </div>
        </div>
    </div>
  )
}
