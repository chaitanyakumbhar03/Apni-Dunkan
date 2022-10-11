import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './about.css';
import { Link } from "react-router-dom";
import watch from './images/watch1.png';
// import zoom from './images/zoom.png';
import watch2 from './images/watch2.png';
import watch3 from './images/watch3.png';
import watch4 from './images/watch4.png';

class Contact extends Component{
    render(){
        return(
            <>
            <script src="https://kit.fontawesome.com/466de0e993.js" crossorigin="anonymous"/>
                <Navbar />
                <div className="about mt-2">
                    <p><Link to="/">Home</Link> / Product</p>
                </div>
                
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6 big-img">
                            <img src= {watch}/>
                            <ul>
                                <li><a>-10%</a></li>
                                {/* <li><a href="#"><img src= {zoom}/></a></li> */}
                            </ul>
                            <div className="img">
                            <img src= {watch2}/>
                            <img src= {watch3}/>
                            <img src= {watch4}/>
                            </div>
                        </div>
                        <div className="col-md-6 right">
                            <div className="text1 ms-5">
                            <h1>Timex Waterbury</h1>
                            <h3>$18.00<s>$20.00</s></h3>
                            {/* <span class="material-symbols-outlined star">star</span>
                            <span class="material-symbols-outlined star">star</span>
                            <span class="material-symbols-outlined star">star</span>
                            <span class="material-symbols-outlined star">star</span>
                            <span class="material-symbols-outlined star">star</span> */}
                            <h5>3 Reviews</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                            <ul>
                                <li>- 0.5 mm Dail</li>
                                <li>- Inspired vector icons</li>
                                <li>- Very modern style</li>
                            </ul>
                            </div>

                            <div className="color ms-5">
                                <h5>Color</h5>
                                <ul>
                                    <li className="blue"></li>
                                    <li className="maroon"></li>
                                    <li className="grey"></li>
                                    <li className="green"></li>
                                    <li className="yellow"></li>
                                </ul>
                            </div>
                            <div className="size ms-5">
                            <h5>Size</h5>
                                <ul>
                                    <li><a href="#">S</a></li>
                                    <li><a href="#">M</a></li>
                                    <li><a href="#">L</a></li>
                                    <li><a href="#">XL</a></li>
                                    <li><a href="#">XXL</a></li>
                                </ul>
                            </div>

                            <button className="ms-5">Buy Now</button>
                            <br/>
                            <br/>
                            <br/>
                            <p className="ms-5">Categories : Minimal, Furniture, Fashion</p>
                            <br/>
                            <br/>
                            <p className="ms-5">Tag : Fashion, Furniture, Electronic</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}
export default Contact;