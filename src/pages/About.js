import React, { Component } from "react";
import { Link } from "react-router-dom";
import './about.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import watch from './images/watch.png';
import bag from './images/bag.png';
import sunglasses from './images/sunglasses.png';


class About extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="about mt-2">
                    <p><Link to="/">Home</Link> / About</p>
                </div>

                <div className="container">
                    <div className="row welcome mt-4">
                        <div className="col-md-12">
                            <h3>Who Are We</h3>
                            <h1>Welcome To  Apni Dukan</h1>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure</p>
                        </div>

                        <div className="row mt-5 mb-5">

                            <div className="col-md-4 product">
                                <img src={watch} />
                                <div className="type">
                                    <h4>Watches</h4>
                                    <p>Starting at <span>$99.0</span></p>
                                </div>
                            </div>

                            <div className="col-md-4 product ms-2 me-2">
                                <img src={bag} />
                                <div className="type">
                                    <h4>Bags</h4>
                                    <p>Starting at <span>$99.0</span></p>
                                </div>
                            </div>

                            <div className="col-md-4 product">
                                <img src={sunglasses} />
                                <div className="type">
                                    <h4>Sunglasses</h4>
                                    <p>Starting at <span>$99.0</span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="our">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h1>Our Vision</h1>
                                <p>Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth.</p>
                            </div>

                            <div className="col-md-4">
                                <h1>Our Mission</h1>
                                <p>Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth.</p>
                            </div>

                            <div className="col-md-4">
                                <h1>Our Goals</h1>
                                <p>Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth.</p>
                            </div>

                        </div>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
}
export default About;