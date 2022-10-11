import React, { Component } from "react";
import './home.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import banner1 from './images/Banner.png';
import banner2 from './images/Banner2.png';

import delivery from './images/fast delivery.png';
import returns from './images/return.png';
import secure from './images/secure.png';
import stocks from './images/stocks.png';

import category1 from './images/category1.png';
import category2 from './images/category2.png';
import category3 from './images/category3.png';
import category4 from './images/category4.png';
import category5 from './images/category5.png';

import product1 from './images/product1.png';
import product2 from './images/product2.png';
import product3 from './images/product3.png';
import product4 from './images/product4.png';



class Home extends Component {
    render() {
        return (
            <>

            <Navbar/>
                {/* <div className="row mt-5 ">
                <div className="container">
                    <div className="col-md-5 search-bar">
                        <form>
                        <input type='text'/>
                            <input type='submit'/>
                        </form>
                    </div>
                    <div className="col-md-7">
                        <ul>
                            <li><a href="#"><i class="fa-solid fa-user"></i>Sign In</a></li>
                            <li><a href="#"><i class="fa-regular fa-user"></i>Login In</a></li>
                        </ul>
                    </div>
                </div>
            </div> */}

                {/* _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-List_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */}
                <div className="list mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 left-list">
                                <ul>
                                    <li><a href="#" className="active">All Proucts</a></li>
                                    <li><a href="#">Fillters</a></li>
                                    <li><a href="#">Sort BY</a></li>
                                    <li><a href="#">Weekend Loot</a></li>
                                    <li><a href="#">Offers For You</a></li>
                                </ul>
                            </div>

                            <div className="col-md-4 right-list">
                                <ul>
                                    <li><a href="#">My Orders</a></li>
                                    <li><a href="#"><i class="fa-solid fa-user"></i>Account</a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                {/* _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-Banner-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */}
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-md-8">
                            <img src={banner1} width="100%" />
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <img src={banner2} />
                                </div>
                                <div className="col-md-12 mt-2">
                                    <img src={banner2} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-Services-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */}

                <div className="service mt-4">
                    <div className="container">
                        <ul>
                            <li><a href="#"> <img src={delivery} />Fast Delivery</a></li>
                            <li><a href="#"> <img src={returns} />Fast Returns</a></li>
                            <li><a href="#"> <img src={secure} />Secure Payments</a></li>
                            <li><a href="#"> <img src={stocks} />Unlimited Stocks</a></li>
                        </ul>
                    </div>
                </div>

                {/* _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-Buy-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */}
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-12 text">
                            <h1>WHY BUY FROM US ?</h1>
                            <p className="py-4">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.<br />
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or<br />
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text. <a href="#">Learn More...</a>
                            </p>
                        </div>
                        <div className="category">
                            <ul>
                                <li><a href="#" className="active">Top categories</a></li>
                                <li><a href="#">Fashion</a></li>
                                <li><a href="#">Electronics</a></li>
                                <li><a href="#">Beauty</a></li>
                            </ul>
                            <span></span>
                            <div className="col-md-12">
                                <img src={category1} />
                                <img src={category2} />
                                <img src={category3} />
                                <img src={category4} />
                                <img src={category5} />
                            </div>
                        </div>

                    </div>
                </div>

                {/* _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-Featured Products-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */}
                <div className="featured mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text mt-5">
                                <h1>FEATURED PRODUCTS</h1>
                                <p className="py-4">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.<br />
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or<br />
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text. <a href="#">Learn More...</a>
                                </p>
                            </div>
                            <div className="category">
                                <ul>
                                    <li><a href="#" className="active">Featured</a></li>
                                    <li><a href="#">Latest</a></li>
                                    <li><a href="#">Bestsellers</a></li>
                                    <li><a href="#">Special</a></li>
                                </ul>
                                <span></span>
                                <div className="col-md-12 mb-4">
                                    <img src={product1} />
                                    <img src={product2} />
                                    <img src={product3} />
                                    <img src={product4} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-Footer-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- */}
            <Footer/>

            </>
        )
    }
}
export default Home;