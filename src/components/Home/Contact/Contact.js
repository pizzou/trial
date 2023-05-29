import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <div id="rs-contact" class="rs-contact style5 modify1 gray-bg5">
                <div class="" style={{width: '90%', margin: 'auto'}}>
                    <div class="contact-us" style={{paddingTop:'80px', paddingBottom:'80px'}}>
                        <div class="row margin-0">
                            <div class="col-lg-8" style={{marginRight:'-30px'}}>
                                <div class="contact-widget">
                                    <div class="sec-title5 pt-5 pb-5">
                                        <span class="sub-title new-title">Contact Us</span>
                                        <h2 class="title title2">Get In Touch</h2>
                                    </div>
                                    <div id="form-messages"></div>
                                    <form id="contact-form" method="post" action="mailer.jsp">
                                        <fieldset>
                                            <div class="row">
                                                <div class="col-lg-6 mb-3 col-md-6 col-sm-6">
                                                    <input class="from-control" type="text" id="name" name="name" placeholder="FirstName" required=""/>
                                                </div> 
                                                <div class="col-lg-6 mb-3 col-md-6 col-sm-6">
                                                    <input class="from-control" type="text" id="name" name="name" placeholder="LastName" required=""/>
                                                </div> 
                                                <div class="col-lg-6 mb-3 col-md-6 col-sm-6">
                                                    <input class="from-control" type="text" id="email" name="email" placeholder="E-Mail" required=""/>
                                                </div>   
                                                <div class="col-lg-6 mb-3 col-md-6 col-sm-6">
                                                    <input class="from-control" type="text" id="phone" name="phone" placeholder="Phone Number" required=""/>
                                                </div>   
                                               
                                          
                                                <div class="col-lg-12 mb-3">
                                                    <textarea class="from-control" id="message" name="message" placeholder="Your message Here" required=""></textarea>
                                                </div>
                                            </div>
                                            <div class="btn-part">                                            
                                                <div class="form-group">
                                                    <input class="readon2 submit-btn con-btn" type="submit" value="Submit Now"/>
                                                </div>
                                            </div>  
                                        </fieldset>
                                    </form> 
                                </div>
                            </div>
                            <div class="col-lg-4 padding-0">
                               <div class="contact-box">
                                    <div class="sec-title2 mb-4">
                                       <h2 class="title small white-color">Contact Info</h2>
                                    </div>
                                    <div class="address-box mb-4 " >
                                        <div class="box-icon">
                                            <i class="fa fa-map-marker"></i>
                                        </div>
                                        <div class="address-text">
                                            <span class="label">RWANDA Office</span>
                                            <p class="desc">
                                                KK 123ST, REMERA,<br/>
                                                KIGALI.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="address-box mb-4 " >
                                        <div class="box-icon">
                                            <i class="fa fa-phone"></i>
                                        </div>
                                        <div class="address-text">
                                            <span class="label">Telephone</span>
                                            <p class="desc">
                                                <a href="1235558888">p: (+250) 787 504052</a><br/>
                                                <a href="1235558899">p: (+250) 787 504052</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="address-box mb-4 " >
                                        <div class="box-icon">
                                            <i class="fa fa-envelope"></i>
                                        </div>
                                        <div class="address-text">
                                            <span class="label">Mail Us</span>
                                            <p class="desc">
                                                <a href="#">E: support@te-so.com</a><br/>
                                                <a href="#">E: info@te-so.com</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="address-box mb-4" >
                                        <div class="box-icon">
                                            <i class="fa fa-clock-o"></i>
                                        </div>
                                        <div class="address-text">
                                            <span class="label">RWANDA Office</span>
                                            <p class="desc">
                                                123 Kisoment Street, REMERA,<br/>
                                                KIGALI.
                                            </p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Contact
