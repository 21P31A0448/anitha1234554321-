import React from 'react'
import { Link } from 'react-router-dom'

export default function Service({username}) {
  return (
    <div>
        <div className='row'>
            <div className='col-md-3'>
                <Link to={`/home?username=${username}`}><img style={{cursor:'pointer', width:'100%', borderRadius:'0px 60px 60px 0px'}} href="" src="Logo.png" alt="Logo" /></Link>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 mt-5">
                <h6><Link style={{textDecoration:'none', color:'red'}} to={`/home?username=${username}`}><a style={{ color:'red', textDecoration:'none'}} href="">Home</a></Link>  /   <b>Service</b></h6>
            </div>
        </div>
        <i className="fas fa-caret-down fa-3x" style={{ color: 'red' }}></i>
        <div className='row bgh4'>
            <div className='col-md-6 mt-4 mb-4'>
                <img style={{width:'40%', height:'auto', borderRadius:'5%'}} src='card1.png'/>
            </div>
            <div className='col-md-6 mt-4'>
                <h2 style={{color:'red'}}>Engine Oil/Lubes and Engine Tune UP</h2>
                <p style={{fontWeight:'bold'}}>We offer expert solutions for your vehicle's engine. To ensure your engine remains in top shape, we recommend timely Oil Changes and Filter Replacements as part of our routine maintenance services. Whether it's addressing warning lights, strange noises, or poor performance, we're dedicated to diagnosing and solving your engine-related concerns. While our primary goal is to optimize your vehicle's engine, we also provide a complete range of services, including Wheel Alignment, Tire Rotation, Tire Balancing, Brake Service, and Custom Wheel Installation, all aimed at maintaining your vehicle's overall performance and safety. At our garage, your satisfaction and the longevity of your vehicle are our top priorities.</p>
            </div>
        </div>
        <i className="fas fa-caret-down fa-3x" style={{ color: 'red' }}></i>
        <div className='row bgh5'>
            <div className='col-md-6 mt-4'>
                <h2 style={{color:'red'}}>Electrical Repairs</h2>
                <p style={{fontWeight:'bold'}}>Our Electrical System Diagnostics service includes a thorough inspection and diagnosis of your vehicle's electrical components. We can address issues related to lighting, battery problems, and other electrical systems. Our skilled technicians provide Electrical Repairs, resolving any electrical issues to ensure your vehicle's reliability. Regular maintenance is vital, and we recommend Battery Testing and Replacement to ensure your vehicle starts reliably. For enhanced convenience and safety, we also offer Lighting Services to inspect and replace bulbs, ensuring your vehicle remains visible and compliant with safety regulations. Alongside electrical services, we offer a range of comprehensive solutions, including Wheel Alignment, Tire Rotation, Tire Balancing, Brake Service, and Custom Wheel Installation, all aimed at maintaining your vehicle's overall performance and safety. At our garage, we are committed to providing you with top-notch services to keep your vehicle running smoothly, efficiently, and safely.</p>
            </div>
            <div className='col-md-6 mt-4 mb-4'>
                <img style={{width:'40%', height:'auto', borderRadius:'5%'}} src='elec.png'/>
            </div>
        </div>
        <i className="fas fa-caret-down fa-3x" style={{ color: 'red' }}></i>
        <div className='row bgh6'>
            <div className='col-md-6 mt-4 mb-4'>
                <img style={{width:'40%', height:'auto', borderRadius:'5%'}} src='paint.png'/>
            </div>
            <div className='col-md-6 mt-4'>
                <h2 style={{color:'red'}}>Body Painting</h2>
                <p style={{fontWeight:'bold'}}>We offer expert solutions for body painting. To ensure your body art remains in top shape, we recommend timely touch-ups and color enhancements as part of our routine maintenance services. Whether it's addressing fading colors, design adjustments, or intricate detailing, we're dedicated to creating and maintaining your body art. While our primary goal is to optimize your body painting, we also provide a complete range of artistic services, including custom designs, special effects, and body art consultations, all aimed at enhancing your visual aesthetics. At our studio, your satisfaction and the longevity of your body painting are our top priorities."</p>
            </div>
        </div>
        <i className="fas fa-caret-down fa-3x" style={{ color: 'red' }}></i>
        <div className='row bgh7'>
            <div className='col-md-6 mt-4'>
                <h2 style={{color:'red'}}>Wheel Alignment</h2>
                <p style={{fontWeight:'bold'}}>At our garage, we offer a comprehensive array of car maintenance services to ensure your vehicle's optimal performance and safety. Our professional Wheel Alignment service keeps your vehicle on the right track, ensuring even tire wear and improved handling. To prolong the life of your tires and enhance road grip, consider our Tire Rotation service, which promotes even wear for longevity. Experience a smooth and vibration-free ride with our Tire Balancing service, as we expertly distribute weight across your tires for peak performance. Safety is our priority, and our Brake Service covers pad replacements, rotor maintenance, and brake fluid checks to ensure your brakes are in excellent condition. If you're looking to upgrade your vehicle's aesthetics and performance, our Custom Wheel Installation service offers a range of custom wheel options tailored to your unique style. At our garage, we're committed to keeping your vehicle in top shape and style.</p>
            </div>
            <div className='col-md-6 mt-4 mb-4'>
                <img style={{width:'40%', height:'auto', borderRadius:'5%'}} src='wheel.png'/>
            </div>
        </div>
        <footer className="bg-dark text-center text-white">
                
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
    </div>
  )
}