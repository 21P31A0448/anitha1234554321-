import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTopButton from './Scroll';
import Imageslider from './imageslider';
import Aboutus from './aboutus';
import Process from './process';
import Brands from './brands';
import City from './city';
import Hfoot from './hfoot'

export default function Navbar({ username }) {

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSparez = () => {
    window.location.href = `/spares?username=${username}`;
  }

  const blk = (v) => {
    v.target.style.backgroundColor = 'red';
    v.target.style.color = 'black';
    v.target.style.fontWeight = 'bold';
    v.target.style.border = 'none';
  };

  const lkb = (v) => {
    v.target.style.backgroundColor = 'black';
    v.target.style.color = 'white';
    v.target.style.fontWeight = 'normal';
  };

  return (
    <div>
    <div style={{ position: 'fixed', top: 0, width: '100%', background: '#CCC8AA', zIndex: 1000 }}>
      <div className='row'>
        <div className='col-md-2'>
          <img style={{ cursor: 'pointer', width: '100%', borderRadius: '0px 60px 60px 0px' }} href="" src="Logo.png" alt="Logo" />
        </div>
        <div className='col-md-1 leo'>
          <h6><a style={{ color: 'black', textDecoration: 'none' }} href="#home">Home</a></h6>
        </div>
        <div className='col-md-1 leo'>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={`/form?username=${username}`}><h6>Add a Project</h6></Link>
        </div>
        <div className='col-md-1 leo'>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={'/contact'}><h6>Contact</h6></Link>
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-1 jailer'>
          <button href='#contact' onClick={scrollToContact} className="btn0" onMouseOver={blk} onMouseLeave={lkb}>Request a Callback</button>
        </div>
        <div className='col-md-1 jailer'>
          <button onClick={handleSparez} className="btn0" onMouseOver={blk} onMouseLeave={lkb}>Shop</button>
        </div>
        <div className='col-md-1 jailer'>
          <Link to={`/cart?username=${username}`}><button className="btn0" onMouseOver={blk} onMouseLeave={lkb}>Cart</button></Link>
        </div>
        <div className='col-md-1 jailer'>
          <Link to={`/`}><button className="btn0" onMouseOver={blk} onMouseLeave={lkb}>Logout</button></Link>
        </div>
      </div>
    </div>
    <div>
      <Imageslider/>
      <Aboutus/>
      <Process/>
      <Brands/>
      <City/>
      <ScrollToTopButton/>
      <Hfoot/>
    </div>
    </div>
  );
}
