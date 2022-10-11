import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

class Blog extends Component{
    render(){
        return(
            <>
            <Navbar/>
            <div className="about mt-2">
                    <p><Link to="/">Home</Link> / Blog</p>
                </div>
            </>
        )
    }
}
export default Blog;