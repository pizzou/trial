import React from 'react'

import sm1 from '../../../images/blog/small/1.jpg'
import sm2 from '../../../images/blog/small/2.jpg'
import sm3 from '../../../images/blog/small/3.jpg'

const date = new Date()
const year = date.getFullYear()

function Footer() {
    return (
        <div id="rs-footer" class="rs-footer style4">
            <div class="" style={{width: '90%', margin: 'auto'}}>
                <div class="footer-newsletter">
                    <div class="row y-middle">
                        <div class="col-md-6 sm-mb-26">
                            <h3 class="title white-color mb-0">Newsletter Subscribe</h3>
                        </div>
                        <div class="col-md-6 text-right">
                            <form class="newsletter-form">
                                <input type="email" name="email" placeholder="Your email address" required=""/>
                                <button type="submit"><i class="fa fa-paper-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="footer-content pt-62 pb-79 md-pb-64 sm-pt-48">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-sm-12 footer-widget md-mb-39">
                            <div class="about-widget pr-15">
                                <div class="logo-part">
                                <h4 className="text-4xl uppercase font-bold animate-bounce text-white">
            TE<span className="text-cyan-600 animate-bounce">-S</span>O
          </h4>
                                </div>
                                <p class="desc"> We are a nationally recognized company specializing in providing cutting-edge IT solutions and leadership services. With our team of highly skilled professionals and a commitment to excellence.</p>
                                <div class="">
                                    <a class="" href="/about">Discover More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12 md-mb-32 footer-widget">
                            <h4 class="widget-title">Contact Info</h4>
                            <ul class="address-widget pr-40">
                                <li>
                                    <i class="flaticon-location"></i>
                                    <div class="desc">Kn 3rd Road, Kicukiro, RWANDA</div>
                                </li>
                                <li>
                                    <i class="flaticon-call"></i>
                                    <div class="desc">
                                        <a href="tel:+8801739753105">(+250)788-301683</a>
                                    </div>
                                </li>
                                <li>
                                    <i class="flaticon-email"></i>
                                    <div class="desc">
                                        <a href="mailto:support@rstheme.com">support@te-so.com</a>
                                    </div>
                                </li>
                                <li>
                                    <i class="flaticon-clock"></i>
                                    <div class="desc">
                                        08:00 - 17:00
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12 footer-widget">
                            <h4 class="widget-title">Latest Posts</h4>
                            <div class="footer-post">
                                <div class="post-wrap mb-15">
                                    <div class="post-img">
                                        <a href="/blogs"><img src={sm1} alt=""/></a>
                                    </div>
                                    <div class="post-desc">
                                        <a href="/blogs">Covid-19 threatens the next generation of smartphones</a>
                                        <div class="date-post">
                                            <i class="fa fa-calendar"></i>
                                            March 6, 2023
                                        </div>
                                    </div>
                                </div>
                                <div class="post-wrap mb-15">
                                    <div class="post-img">
                                        <a href="/blogs"><img src={sm2} alt=""/></a>
                                    </div>
                                    <div class="post-desc">
                                        <a href="/blogs">incubator launch</a>
                                        <div class="date-post">
                                            <i class="fa fa-calendar"></i>
                                            April 15, 2023
                                        </div>
                                    </div>
                                </div>
                                <div class="post-wrap">
                                    <div class="post-img">
                                        <a href="/blogs"><img src={sm3} alt=""/></a>
                                    </div>
                                    <div class="post-desc">
                                        <a href="/blogs">Leadership management trainings.</a>
                                        <div class="date-post">
                                            <i class="fa fa-calendar"></i>
                                            March 10, 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="row y-middle">
                        <div class="col-lg-6 col-md-8 sm-mb-21">
                            <div class="copyright">

                            <p>    &copy; {year} Te-so. All Rights Reserved.</p>
                                
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-4 text-right sm-text-center">
                            <ul class="footer-social">
                                <li><a href="/"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="/"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="/"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="/"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
