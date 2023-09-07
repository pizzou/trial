import React from 'react';
import './Team.css';
import ceo from '../../../images/team/seo/gwiza.jpg'
import developer from '../../../images/team/seo/gwiza.jpg'
import marketer from '../../../images/team/seo/gwiza.jpg'

function Team() {
    return (
        <div id="rs-team" class="rs-team style2 modify1 pt-100 pb-100 md-pt-70 md-pb-70">
            <div class="" style={{width: '80%', margin: 'auto'}}>
                <div class="sec-title5 text-center mb-50 md-mb-35">
                    <span class="sub-title new-title pb-7">Expert People</span>
                    <h2 class="title title2 pb-5">Our Team Members</h2>
                </div>
                <div className="d-flex justify-content-around" >
                    <div class="col-md-4 team-item-wrap p-5">
                        <div class="team-wrap">
                            <div class="image-inner">
                                <a href="team-single.html"><img src={ceo} alt="" /></a>
                            </div>
                        </div>
                        <div class="team-content text-center">
                            <h4 class="person-name"><a href="team- single.html">Justin Murwanashyaka</a></h4>
                            <span class="designation">CEO & Founder</span>
                            <ul class="team-social">
                                <li><a href="team-single.html"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="team-single.html"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="team-single.html"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https://github.com/TE-SOltd"><i class="fa fa-github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 team-item-wrap p-5">
                        <div class="team-wrap">
                            <div class="image-inner">
                                <a href="single-team.html"><img src={developer} alt="" /></a>
                            </div>
                        </div>
                        <div class="team-content text-center">
                            <h4 class="person-name"><a href="team-single.html">Erick <br /> Rugwiza</a></h4>
                            <span class="designation">Founder</span>
                            <ul class="team-social">
                                <li><a href="team-single.html"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="team-single.html"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="team-single.html"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https://github.com/TE-SOltd"><i class="fa fa-github"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-4 team-item-wrap p-5">
                        <div class="team-wrap">
                            <div class="image-inner">
                                <a href="single-team.html"><img src={developer} alt="" /></a>
                            </div>
                        </div>
                        <div class="team-content text-center">
                            <h4 class="person-name"><a href="team-single.html">Patrick <br /> Nshizirungu</a></h4>
                            <span class="designation">Founder</span>
                            <ul class="team-social">
                                <li><a href="team-single.html"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="team-single.html"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="team-single.html"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https://github.com/TE-SOltd"><i class="fa fa-github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 team-item-wrap p-5">
                        <div class="team-wrap">
                            <div class="image-inner">
                                <a href="team-single.html"><img src={marketer} alt="" /></a>
                            </div>
                        </div>
                        <div class="team-content text-center">
                            <h4 class="person-name"><a href="team-single.html">Roger Ruterahagusha</a></h4>
                            <span class="designation">Chairman & Founder</span>
                            <ul class="team-social">
                                <li><a href="team-single.html"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="team-single.html"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="team-single.html"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https://github.com/TE-SOltd"><i class="fa fa-github"></i></a></li>
                            </ul>
                        </div>

                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Team
