import React from 'react';
import './Slider.css';
import notebook from '../../../images/slider/solution/header.jpg';
import workstation from '../../../images/about/business.jpg';
import leaders from '../../../images/slider/leaders.png';

function Slider() {
    return (
        <div className='slider-container'>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner row">
                    <div class="carousel-item active">
                        <div className="row slide-part">
                            <div className="col-md-6 col-sm-12">
                                <div className="slide-des" style={{ textAlign: 'left', margin: 'auto', paddingLeft: '10%' }}>
                                    <h4 className="text-white" style={{ fontWeight: '400' }}>IT SOLUTIONS</h4>
                                    <p class="margin-0 text-white">Our IT solutions are designed to address your unique business challenges and drive innovation</p>
                                    <h3 className="text-white">DEVELOPMENT COMPANY</h3>
                                </div>
                                <div class="btn-part">
                    <div class="form-group">
                        <button className="readon2 submit-btn con-btn">View More</button>
                    </div>
                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={notebook} className="slide-image" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row slide-part">
                            <div className="col-md-6 col-sm-12">
                                <div className="slide-des" style={{ textAlign: 'left', margin: 'auto', paddingLeft: '10%' }}>
                                    <h4 className="text-white" style={{ fontWeight: '400' }}>IT CONSULTANCY</h4>
                                    <p class="margin-0 text-white">Our consultancy services encompass a wide range of areas, including IT strategy development, project management .....</p>
                                    <h3 className="text-white">DEVELOPMENT COMPANY</h3>
                                </div>
                                <div class="btn-part">
                    <div class="form-group">
                        <button className="readon2 submit-btn con-btn">View More</button>
                    </div>
                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={workstation} className="slide-image" alt="" />
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div className="row slide-part">
                            <div className="col-md-6 col-sm-12">
                                <div className="slide-des" style={{ textAlign: 'left', margin: 'auto', paddingLeft: '10%' }}>
                                    <h4 className="text-white" style={{ fontWeight: '400' }}>LEADERSHIP IN IT</h4>
                                    <p class="margin-0 text-white">Our leadership development programs and services are designed to empower individuals and teams to reach their full potential.</p>
                                    <h3 className="text-white">DEVELOPMENT COMPANY</h3>
                                </div>

                                <div class="btn-part">
                    <div class="form-group">
                        <button className="readon2 submit-btn con-btn">View More</button>
                    </div>
                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={leaders} className="slide-image" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Slider
