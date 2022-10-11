import React, { Component } from "react";
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class Footer extends Component{
    render(){
        return(
            <>
                            <div className="footer mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 left-footer">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label>About</label>
                                        <ul>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Careers</a></li>
                                            <li><a href="#">Flipkart Stories</a></li>
                                            <li><a href="#">Press</a></li>
                                            <li><a href="#">Flipkart Wholesale</a></li>
                                            <li><a href="#">Corporate Information</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <label>Help</label>
                                        <ul>
                                            <li><a href="#">Payments</a></li>
                                            <li><a href="#">Shipping</a></li>
                                            <li><a href="#">Careers</a></li>
                                            <li><a href="#">Cancelation & Returns</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="#">Report</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <label>Policy</label>
                                        <ul>
                                            <li><a href="#">Return Policy</a></li>
                                            <li><a href="#">Terms Of Use</a></li>
                                            <li><a href="#">Security</a></li>
                                            <li><a href="#">Privarcy</a></li>
                                            <li><a href="#">Sitemap</a></li>
                                            <li><a href="#">EPR Compliance</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3 line">
                                        <label>Social</label>
                                        <ul>
                                            <li><a href="#">Facebook</a></li>
                                            <li><a href="#">Twitter</a></li>
                                            <li><a href="#">YouTube</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 right-footer">
                                <div className="row">
                                <div className="col-md-6 mt-5">
                                    <p>Mail Us:<br />
                                        Flipkart Internet Private Limited,
                                        <br />
                                        Buildings Alyssa, Begonia &
                                        <br />
                                        Clove Embassy Tech Village,
                                        <br />
                                        Outer Ring Road, Devarabeesanahalli Village,
                                        <br />
                                        Bengaluru, 560103,
                                        <br />
                                        Karnataka, India</p>
                                </div>
                                <div className="col-md-6 mt-5">
                                    Registered Office Address:
                                    <br />
                                    Flipkart Internet Private Limited,

                                    <br />
                                    Buildings Alyssa, Begonia &

                                    <br />
                                    Clove Embassy Tech Village,

                                    Outer Ring Road, Devarabeesanahalli Village,
                                    <br />

                                    Bengaluru, 560103,

                                    <br />
                                    Karnataka, India

                                    CIN : U51109KA2012PTC066107
                                    <br />

                                    Telephone: 044-45614700
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default Footer;