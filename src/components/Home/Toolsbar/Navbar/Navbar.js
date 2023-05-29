import React from 'react';
import './Navbar.css';
import logo from '../../../../images/favicon.ico';

function Navbar() {
    return (
        <div className="Navbar">
            <div class="row d-flex align-items-center" style={{ margin: 'auto' }}>
                <div className="col-md-4 toolsbar">
                <h4 className="text-4xl uppercase font-bold animate-bounce text-white">
            TE<span className="text-cyan-600">-S</span>O
          </h4>
                </div>
                <div className="col-md-7 navbar-list" style={{}}>
                    <ul className="d-flex justify-content-around ">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/service">Services</a></li>
                        <li><a href="/#">Portfolio</a></li>
                        <li><a href="/#">Team</a></li>
                        <li><a href="#/">Te-so Blog</a></li>
                        <li><a href="/#">Contact</a></li>
                    </ul>
                </div>
                <div className="col-md-1 toolsbar">
                    <div class="expand-btn-inner dots">
                        <ul className="d-flex justify-content-around">
                            
                            <li>
                                <a id="nav-expander" class="humburger nav-expander" href="#">
                                    <span class="dot1"></span>
                                    <span class="dot2"></span>
                                    <span class="dot3"></span>
                                    <span class="dot4"></span>
                                    <span class="dot5"></span>
                                    <span class="dot6"></span>
                                    <span class="dot7"></span>
                                    <span class="dot8"></span>
                                    <span class="dot9"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
