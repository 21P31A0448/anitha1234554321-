import React from 'react'

export default function Brands() {
  return (
    <div>
        {/* <i className="fas fa-caret-down fa-3x" style={{ color: 'red' }}></i> */}
        <div className='row bgh2'>
            <div className='col-md-12'>
                <h1 className='mt-5 mb-5'><b>Brandz We Serve</b></h1>
            </div>
        </div>
        <div className='row mt-4'>
            <div className='col-md-2'>
            <img alt='' style={{width:'55%', height:'110px'}} src='ford.png'/>
            </div>
            <div className='col-md-2'>
            <img alt='' style={{width:'55%', height:'110px'}} src='land.png'/>
            </div>
            <div className='col-md-2'>
            <img alt='' style={{width:'55%', height:'110px'}} src='honda.png'/>
            </div>
            <div className='col-md-2'>
            <img alt='' style={{width:'55%', height:'110px'}} src='jaguar.png'/>
            </div>
            <div className='col-md-2'>
            <img alt='' style={{width:'55%', height:'110px'}} src='jeep.png'/>
            </div>
            <div className='col-md-2 mb-4'>
            <img alt='' style={{width:'55%', height:'110px'}} src='lexus.png'/>
            </div>
        </div>
    </div>
  )
}
