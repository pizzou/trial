import React from 'react';
import './About.css';
import about1 from '../../../images/about/solutions/1.jpg'
import about2 from '../../../images/about/solutions/2.png'
import about3 from '../../../images/about/solutions/3.png'

function About() {
    return (
        <div id="rs-about" class="rs-about style10 gray-bg5 p-5">
                <div class="" style={{width: '90%', margin: 'auto'}}>
                    <div class="row">
                        <div class="col-lg-6 pr-70 md-pr-15 md-mb-50">
                            <div class="sec-title4 mb-30">
                                <span class="sub-title new pb-10">About Us</span>
                                <h2 class="title pb-20">We are crafting unique IT,Leadership & Technology Ideas</h2>
                                <p class="margin-0"> TESO (The Elites and Solutions), a nationally leading company in IT solutions and leadership. At TESO, we are passionate about empowering businesses and individuals with innovative technology solutions and effective leadership strategies.</p>
                            </div>
                            <div id="accordion" class="accordion">
                                <div class="card">
                                    <div class="card-header">
                                        <a class="card-link" data-toggle="collapse" href="#collapseOne">Our Vision:</a>
                                    </div>
                                    <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                        <div class="card-body">To be the catalyst for digital transformation and leadership excellence, driving sustainable growth and success for our clients. mattis, pulvinar dapibus leo data communication.</div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <a class="card-link" data-toggle="collapse" href="#collapseOne">Our Mission:</a>
                                    </div>
                                    <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                        <div class="card-body">To provide exceptional IT solutions and leadership services that empower organizations to thrive in the digital age, achieve their goals, and create a positive impact in their industries.</div>
                                    </div>
                                </div>


                                

                                
                                <div class="card">
                                    <div class="card-header">
                                        <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">Who We Are:</a>
                                    </div>
                                    <div id="collapseTwo" class="collapse" data-parent="#accordion">
                                        <div class="card-body">At TESO, we are a dedicated team of professionals with deep expertise in the fields of IT solutions and leadership. With years of industry experience, we understand the evolving needs and challenges businesses face in today's fast-paced, technology-driven world.</div>
                                    </div>
                                </div>
                            </div>

                            
                            
                        </div>
                        <div class="col-lg-6">
                            <div class="about-content">
                                <div class="images-part">
                                    <img src={about1} alt="Images"/>
                                </div>
                                <div class="rs-animations">
                                    <div class="spinner dot">
                                        <img class="scale" src={about2} alt="Images"/>
                                    </div>
                                    <div class="spinner ball">
                                        <img class="dance2" src={about3} alt="Images"/>
                                    </div>
                                    
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn-part">
                    <div class="form-group">
                        <button className="readon2 submit-btn con-btn"> More Details</button>
                    </div>
                </div>
                
            </div>
    )
}

export default About
