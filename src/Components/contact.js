import { Link } from 'react-router-dom';
import './Nav.css'

const Contact = ({username}) => {
    return(
        <div style={{background: "#CCC8AA"}}>
            <div className="row">
                <div className='col-md-3'>
                    <img style={{cursor:'pointer', width:'100%', borderRadius:'0px 60px 60px 0px'}} href="" src="Logo.png" alt="Logo" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-5">
                    <h6><Link style={{textDecoration:'none', color:'red'}} to={`/home?username=${username}`}><a style={{color:'red', textDecoration:'none'}} href="">Home</a></Link>  /   Contact</h6>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <h3 style={{color:'red'}}>About Us</h3>
                    <p><b>Welcome to our car maintenance website! We provide a range of services to keep your car in top condition.<br/> Our team of experienced mechanics will ensure that your car is well-maintained and running smoothly.</b></p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <h3 style={{color:'red'}}>Contact</h3>
                    <p><b>or any queries or to reschedule your appointment, please contact us at,<br/> <b>Email:</b> dynocarcareservice@gmail.com<br/><b>Phone:</b> +91 9391178157</b></p>
                </div>
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
        </div>
    )
}

export default Contact;