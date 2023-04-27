import './navbar.css'
import Hamburger from 'hamburger-react'
import React from 'react'

export default function Nav() {
    const [isOpen, setOpen] = React.useState(false)

    return (
        <div className="navbar_fixed">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container1">
                    <h2 className="navbar-brand logo_h">
                        og<span>codez</span>
                    </h2>
                    <div className='nav'>
                        <a className="nav-link" href="#header">Home</a>
                        <a className="nav-link" href="#skills">Skills</a>
                        <a className="nav-link" href="#projects">Projects</a>
                        <a className="nav-link" href="#contact">Contact</a>
                    </div>
                    <div className="hamburger">
                        <Hamburger color="#0db3c7" toggled={isOpen} toggle={setOpen} rounded />
                        {isOpen && <div className="dd">
                            <ul class="ul navbar-nav m-auto">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#header">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#skills">Skills</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#projects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>}
                    </div>
                </div>
            </nav>
        </div>
    )
}