import React from 'react';
import banner1 from '../../../images/about/My project.jpg'
import banner2 from '../../../images/about/My-project.jpg'
import banner3 from '../../../images/about/My-project.jpg'

import './Projects.css';

function Projects() {
    return (
        <div id="rs-portfolio" class=" bg42 pb-5 mb-3">
            <div class="" style={{ width: '90%', margin: 'auto' }}>
                <div class="sec-title4 text-center p-5">
                    <span class="sub-title white-color pb-15">Projects</span>
                    <h2 class="title white-color">Recent Portfolios</h2>
                </div>
                <div class="slider-part">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-wrap">
                            <div class="img-part">
                                <img src={banner1} className="images" alt="" />
                                <div class="content-part">
                                    <div className="text">
                                        <i class="fa fa-link" style={{ fontSize: '30px' }}></i>
                                        <h4 className="text-white">VIEW WEBSITE</h4>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-wrap">
                            <div class="img-part">
                                <img src={banner2} className="images" alt="" />
                                <div class="content-part">
                                    <div className="text">
                                        <i class="fa fa-link" style={{ fontSize: '30px' }}></i>
                                        <h4 className="text-white">VIEW WEBSITE</h4>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-wrap">
                            <div class="img-part">
                                <img src={banner3} className="images" alt="" />
                                <div class="content-part">
                                    <div className="text">
                                        <i class="fa fa-link" style={{ fontSize: '30px' }}></i>
                                        <h4 className="text-white">VIEW WEBSITE</h4>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-wrap">
                            <div class="img-part">
                                {/* <img src={banner4} className="images" alt="" /> */}
                                <div class="content-part">
                                    <div className="text">
                                        <i class="fa fa-link" style={{ fontSize: '30px' }}></i>
                                        {/* <h4 className="text-white">VIEW WEBSITE</h4> */}
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-wrap">
                            <div class="img-part">
                                {/* <img src={banner5} className="images" alt="" /> */}
                                <div class="content-part">
                                    <div className="text">
                                        <i class="fa fa-link" style={{ fontSize: '30px' }}></i>
                                        {/* <h4 className="text-white">VIEW WEBSITE</h4> */}
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-wrap">
                            <div class="img-part">
                                {/* <img src={banner6} className="images" alt="" /> */}
                                <div class="content-part">
                                    <div className="text">
                                        <i class="fa fa-link" style={{ fontSize: '30px' }}></i>
                                        {/* <h4 className="text-white">VIEW WEBSITE</h4> */}
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div class="btn-part">
                    <div class="form-group">
                        <button className="readon2 submit-btn con-btn">View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
