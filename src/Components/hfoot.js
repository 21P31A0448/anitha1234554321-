import React from 'react'

export default function Hfoot() {
    const plm = (v) => {
        v.target.style.color = 'red !important'
      }
    
      const mlp = (v) => {
        v.target.style.color = 'black'
      }
      
      const redi = (v) => {
        v.target.style.color = 'red'
      }
    
      const redo = (v) => {
        v.target.style.color = 'white'
      }
    
      const lini = (v) => {
        v.target.style.color = '#0072b1'
      }
    
      const twii = (v) => {
        v.target.style.color = '#00acee'
      }
    
      const faci = (v) => {
        v.target.style.color = '#3b5998'
      }
    
      const insi = (v) => {
        v.target.style.color = '#d62976'
      }
  return (
    <div>
        <div className='row bg-black mt-3'>
            <div className='col-md-4'>
                <img alt='' style={{height:'150px'}} src='logo.png' /><br/>
                <i onMouseOver={insi} onMouseLeave={redo} className="fa-brands fa-instagram fa-2x" style={{ color: '#ffffff'}}></i>
                <i onMouseOver={faci} onMouseLeave={redo} className="fa-brands fa-facebook fa-2x" style={{ color: '#ffffff', marginLeft:'25px'}}></i>
                <i onMouseOver={twii} onMouseLeave={redo} className="fa-brands fa-twitter fa-2x" style={{ color: '#ffffff', marginLeft:'25px' }}></i>
                <i onMouseOver={lini} onMouseLeave={redo} className="fa-brands fa-linkedin fa-2x" style={{ color: '#ffffff', marginLeft:'25px' }}></i>
                <i onMouseOver={redi} onMouseLeave={redo} className="fa-brands fa-youtube fa-2x" style={{ color: '#ffffff', marginLeft:'25px' }}></i><br/><br/><br/>
                <i className="fa-solid fa-location-crosshairs fa-1x" style={{color: '#ffffff'}}></i>
                <span style={{fontSize:'15px',color:'white'}}> Bhanugudi Junction, Kakinada, 533016</span><br/>
                <i className="fa-solid fa-envelope fa-1x" style={{color: '#ffffff'}}></i>
                <span style={{fontSize:'15px',color:'white'}}> buddanavaraprasad@gmail.com</span><br/>
                <i className="fa-solid fa-phone fa-1x" style={{color: '#ffffff'}}></i>
                <span style={{fontSize:'15px',color:'white'}}> 9391178157</span><br/><br/>
            </div>
            <div className='col-md-4 mt-5' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h4 style={{color:'white'}}>Services</h4>
                <ul style={{padding: '0px', color:'white' }}>
                    <li style={{ margin: '8px 0' }}>Periodic</li>
                    <li style={{ margin: '8px 0' }}>Dent & Paint</li>
                    <li style={{ margin: '8px 0' }}>Bumper Repair</li>
                    <li style={{ margin: '8px 0' }}>Accidental Repair</li>
                    <li style={{ margin: '8px 0' }}>Scratch Removal</li>
                </ul>
            </div>  
            <div className='col-md-4 mt-5' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h4 style={{color:'white'}}>Links</h4>
                <ul style={{padding: '0px', color:'white' }}>
                    <li style={{ margin: '8px 0' }}>Home</li>
                    <li style={{ margin: '8px 0' }}>About</li>
                    <li style={{ margin: '8px 0' }}>Services</li>
                    <li style={{ margin: '8px 0' }}>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
