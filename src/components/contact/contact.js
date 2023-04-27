import React from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { BsTelephoneInbound } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { TbBrandLinkedin } from 'react-icons/tb'
import { VscGithub } from 'react-icons/vsc'

export default function Contact() {
    const form = React.useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm('service_nvm8rxl', 'template_tesld4w', form.current, 'z-1q2fxE3b_l-US4M')
            .then((result) => {
                console.log(result)
            }, (error) => {
                console.log(error)
            });
    };

    return (
        <div id="contact" className='contact'>
            <div className='contact-info'>
                <h3 className='stitle'>Get in touch</h3>
                <h1 className='ltitle'>Talk Or Meet With Me</h1>
                <div className='single-contact'>
                    <BsTelephoneInbound size="50" color="#0db3d180" />
                    <div className='single-contact-info'>
                        <h4>Call Me Now</h4>
                        <h1><span>+381</span>605827747</h1>
                    </div>
                </div>
                <div className='single-contact'>
                    <FiMail size="50" color="#0db3d180" />
                    <div className='single-contact-info'>
                        <h4>Message Me</h4>
                        <h1>trcognjen<span>@gmail</span>.com</h1>
                    </div>
                </div>
                <div className='single-contact'>
                    <TbBrandLinkedin size="56" color="#0db3d180" />
                    <div className='single-contact-info'>
                        <h4>LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/ognjen-trajkovic-930a8319b/">Ognjen <span>Trajkovic</span></a>
                    </div>
                </div>
                <div className='single-contact'>
                    <VscGithub size="50" color="#0db3d180" />
                    <div className='single-contact-info'>
                        <h4>Github</h4>
                        <a href="https://github.com/ogcodez/">og<span>codez</span></a>
                    </div>
                </div>
            </div>
            <form className='form' ref={form} onSubmit={sendEmail}>
                <h3 className='stitle'>Contact Me</h3>
                <h1 className='ltitle'>Let Me Know How I Can Help</h1>
                <div className='row'>
                    <div className='col-lg-6'>
                        <input type="text" name="name" className="form-control" placeholder="Your Name*" />
                    </div>
                    <div className='col-lg-6'>
                        <input type="email" className="form-control" name="email" placeholder="Your Email*" />
                    </div>
                    <div className='col-lg-6'>
                        <input type="text" name="subject" className="form-control" placeholder="Subject*" />
                    </div>
                    <div className='col-lg-6'>
                        <input type="text" className="form-control" name="phone" placeholder="Phone*"  />
                    </div>
                </div>
                <textarea name="message" className="form-control ta" rows="6" placeholder="Your Message ..."></textarea>
                <button type="submit" className="theme_btn">Send Message</button>

            </form>
        </div>
    )
}