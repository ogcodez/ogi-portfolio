import React from 'react'
import './header.css'
import Nav from '../navbar/navbar'

export default function Header() {
    return (
        <div id="header" className="body_wrapper">
            <Nav />
            <div className="frelencer_banner_area">
                <div className="home_bubble">
                    <div className="bubble b_one"></div>
                    <div className="bubble b_two"></div>
                    <div className="bubble b_three"></div>
                    <div className="bubble b_four"></div>
                    <div className="bubble b_five"></div>
                    <div className="bubble b_six"></div>
                </div>
                <img className="react-reveal fadeInRight s_shap" src="images/banner.svg" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="frelencer_content">
                                <h2 className="react-reveal fadeInUp t_color">
                                    Hello!<br />
                                    I'm Ognjen Trajkovic <br />
                                    <span>React Developer</span>
                                </h2>
                                <h4>
                                    <span>And this is my portfolio</span>
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="frelencer_img">
                                <img className="f_img_one" src="images/1.png" alt="" />
                                <img className="f_img_two" src="images/2.png" alt="" />
                                <img className="f_img_three" src="images/7.png" alt="" />
                                <img className="f_img_four" src="images/3.png" alt="" />
                                <div className="f_img_five">
                                    <img src="images/4.png" alt="" />
                                </div>
                                <div className="f_img_six">
                                    <img src="images/5.png" alt="" />
                                </div>
                                <div className="f_img_seven">
                                    <img src="images/6.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}