import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Nav.css';
import ScrollToTopButton from './Scroll';

export default function Spares() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const username = new URLSearchParams(window.location.search).get('username');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/getspares")
      .then((response) => {
        console.log(response.data.coursedata);
        setData(response.data.coursedata);
        setFilteredData(response.data.coursedata);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  
  const blk = (v) => {
    v.target.style.backgroundColor = 'red'
    v.target.style.color = 'black'
    v.target.style.fontWeight = 'bold'
    v.target.style.border = 'none'
  }

  const blk1 = (v) => {
    v.target.style.backgroundColor = 'black'
    v.target.style.color = '#bababa'
    v.target.style.border = 'none'
  }

  const lkb = (v) => {
    v.target.style.backgroundColor = '#bababa'
    v.target.style.color = 'black'
  }

  const lkb1 = (v) => {
    v.target.style.backgroundColor = 'black'
    v.target.style.color = 'white'
    v.target.style.fontWeight = 'normal'
    v.target.style.border = '1px solid white'
  }

  const addToCart = (item) => {
    axios
      .post('http://localhost:5000/api/addToCart',{ ...item, username})
      .then((response) => {
        setCart([...cart, response.data]);
        alert("Item added to cart successfully")
      })
      .catch((error) => {
        console.error('Error adding item to cart:', error);
      });
  };

  return (
    <div style={{background: "#444444"}}>
      <div className='row'>
        <div className='col-md-2'>
          <Link to={`/home?username=${username}`}><img
              style={{ cursor: 'pointer', width: '100%', borderRadius: '0px 60px 60px 0px' }}
              src="Logo.png"
              alt="Logo"
            /></Link>
        </div>
        <div className='col-md-3 mt-4'>
            <h2 style={{ color: '#bababa', textDecoration: 'none' }}>SPARE'Z</h2>
        </div>
        <div className='col-md-3'></div>
        <div className='col-md-3 mt-3'>
          <Link to={`/cart`}>
            <button onMouseOver={blk1} onMouseLeave={lkb} className='btn78' >Cart</button></Link>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <img alt='' src='sparee.jpg' width={'100%'}/>
        </div>
      </div>
      {/* <div className='row mt-5'>
        <div className='col-md-12'>
          <h1 style={{ color: '#bababa'}}>Featured Product'z</h1>
        </div>
      </div>
      <div className='row'>
        {data.map((item, index) => (
          <div key={index} className="col-md-3 mt-5">
            <div className="card kart">
              <img
                src={item.image}
                className="card-img-top"
                style={{ borderRadius: '30px 30px 0px 0px' }}
                alt=""
              />
              <div className="card-body mt-3">
                <h6 className="card-title" style={{textAlign:'left', color:'#bababa', fontWeight:'bold'}}>{item.title}</h6>
                <h6 className="card-text mt-2" style={{textAlign:'left', fontWeight:'bold'}}>
                  <span>&#8377;</span>
                  {item.price}{'.00'}<br/><br/>
                  <i className="fa-solid fa-star" style={{textAlign:'left', color: "#ffdd00"}}></i>
                  <i className="fa-solid fa-star" style={{textAlign:'left', color: "#ffdd00"}}></i>
                  <i className="fa-solid fa-star" style={{textAlign:'left', color: "#ffdd00"}}></i>
                  <i className="fa-solid fa-star" style={{textAlign:'left', color: "#ffdd00"}}></i>
                  <i className="fa-solid fa-star" style={{textAlign:'left', color: "#ffdd00"}}></i>
                </h6>
                <button className='btn3 mt-3 mb-4' onMouseOver={blk} onMouseLeave={lkb1} onClick={() => addToCart(item)}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <div className='row mt-5'>
        <div className='col-md-12'>
          <h1 style={{ color: '#bababa'}}>Our Brand'z</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-2'> 
            <img alt='' className='vikram' src='https://www.partsbigboss.in/media/brand_images/bosch_modified.png'/>
        </div>
        <div className='col-md-2'> 
            <img alt='' className='vikram' src='https://www.partsbigboss.in/media/wysiwyg/porto/homepage/content/04/brands_walker.png'/>
        </div>
        <div className='col-md-2'> 
            <img alt='' className='vikram' src='https://www.partsbigboss.in/media/wysiwyg/porto/homepage/content/04/brands-fv.png'/>
        </div>
        <div className='col-md-2'> 
            <img alt='' className='vikram' src='https://www.partsbigboss.in/media/wysiwyg/porto/homepage/content/04/brands-lff.png'/>
        </div>
        <div className='col-md-2'> 
            <img alt='' className='vikram' src='https://www.partsbigboss.in/media/brand_images/motherson_modified.png'/>
        </div>
        <div className='col-md-2'> 
            <img alt='' className='vikram' src='https://www.partsbigboss.in/media/wysiwyg/porto/homepage/content/04/brands-carstar.png'/>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-md-12'>
          <h1 style={{ color: '#bababa'}}>Shop by Popular Categories</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 mt-5'> 
          <h6 style={{ color: '#bababa'}}><b>Search and filter for your favorite auto spare part now and get your vehicle back on the road in no time!</b></h6>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
        <select
              style={{ backgroundColor: '#bababa', width: "50%", height: '40px', borderRadius: '10px' }}
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                // Filter data based on selected category
                if (e.target.value === 'All') {
                  setFilteredData(data); // If 'All' is selected, show all items
                } else {
                  const filteredItems = data.filter(item => item.category === e.target.value); // Adjust this condition based on your data structure
                  setFilteredData(filteredItems);
                }
              }}
            >
            <option value="All">All</option>
            <option value="Engine">Engine</option>
            <option value="Brakes">Brakes</option>
            <option value="Suspension">Suspension</option>
            <option value="Cooling">Cooling</option>
            <option value="elec">Sensors and Electronics</option>
            <option value="Exhaust">Exhaust</option>
          </select>
        </div>
        <div className='col-md-4'></div>
      </div>
      <div className='row'>
        {filteredData.map((item, index) => (
          <div key={index} className="col-md-3 mt-5">
            <div className="card kart">
              <img
                src={item.image}
                className="card-img-top"
                style={{ borderRadius: '30px 30px 0px 0px' }}
                alt=""
              />
              <div className="card-body mt-3">
                <h6 className="card-title" style={{textAlign:'left', color:'#bababa', fontWeight:'bold'}}>{item.title}</h6>
                <h6 className="card-text mt-2" style={{textAlign:'left', fontWeight:'bold'}}>
                  <span>&#8377;</span>
                  {item.price}{'.00'}<br/><br/>
                  <i className="fa-solid fa-star" style={{textAlign:'left', color: "#ffdd00"}}></i>
                  <i className="fa-solid fa-star" style={{textAlign:'left', color: "#ffdd00"}}></i>
                  <i className="fa-solid fa-star" style={{textAlign:'left', color: "#ffdd00"}}></i>
                  <i className="fa-solid fa-star" style={{textAlign:'left', color: "#ffdd00"}}></i>
                  <i className="fa-solid fa-star" style={{textAlign:'left', color: "#ffdd00"}}></i>
                </h6>
                <button className='btn3 mt-3 mb-4' onMouseOver={blk} onMouseLeave={lkb1} onClick={() => addToCart(item)}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer className="bg-dark text-center text-white mt-5">
                
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-google"></i>
                    </a>


                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-instagram"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-linkedin-in"></i>
                    </a>

                    
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-github"></i>
                    </a>
                    </section>
                </div>

                
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    
                    <h6 className="text-white">© 2020 Copyright: Dyno Car Care™</h6>
                </div>
                </footer>
                <ScrollToTopButton/>
    </div>
  );
}
