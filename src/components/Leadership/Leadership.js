import React from 'react';
import './Leadership.css';
import about1 from '../../images/about/leaders.jpeg'
import about2 from '../../images/about/solutions/2.png'
import about3 from '../../images/about/solutions/3.png'

function Leadership() {
    return (
        <div id="rs-about" class="rs-about style10 gray-bg5 p-5">
                <div class="" style={{width: '90%', margin: 'auto'}}>
                    <div class="row">
                        <div class="col-lg-6 pr-70 md-pr-15 md-mb-50">
                            <div class="sec-title4 mb-30">
                                <span class="sub-title new pb-10">Leadership</span>
                                {/* <h2 class="title pb-20">We are crafting unique IT & Technology Ideas</h2> */}
                                <p class="margin-0"> At TE-SO, we understand that effective leadership is the key to driving organizational success and achieving sustainable growth.leadership services are designed to empower individuals, teams, and organizations with the skills, knowledge, and mindset needed to lead with confidence, inspire others, and navigate the complexities of today's business landscape </p>
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

export default Leadership
