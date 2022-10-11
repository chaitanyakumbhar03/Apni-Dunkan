import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";


class Contact extends Component{
    render(){
        return(
            <>
                <Navbar />
                <div className="about mt-2">
                    <p><Link to="/">Home</Link> / Contact</p>
                </div>
<div className="container">
    <div className="row">
<div className="col-md-9">
                <div className="contact-right">

<form>
  <div className="search">
    <label>Your Name</label>
    <input type="text"/>
  </div>

  <div className="search">
    <label>Your Email</label>
    <input type="text"/>
  </div>

  <div className="area">
    <label>Subject</label>
    <input type="text"/>

    <label>Message</label>
    <textarea name="" id="" cols="67" rows="6"></textarea>
  </div>
</form>

</div>
</div>
</div>
</div>
                <Footer/>
            </>
        )
    }
}
export default Contact;