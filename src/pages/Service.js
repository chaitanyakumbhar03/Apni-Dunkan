import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

class Service extends Component{
    render(){
        return(
            <>
            <Navbar/>
            <div className="about mt-2">
                    <p><Link to="/">Home</Link> / Services</p>
                </div>
            </>
        )
    }
}
export default Service;