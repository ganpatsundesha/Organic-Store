import React, { useState } from 'react'
import logo from '../../assets/Images/logo.svg'
import { CiShoppingCart } from "react-icons/ci";
import { RiAccountCircleFill, RiMenu3Fill } from "react-icons/ri";
import Offcanvas from 'react-bootstrap/Offcanvas';

import "./style.scss";

const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <header>
            <div className="container-fluid">
                <div className="dekstop-nav">
                    <div className="site-logo">
                        <a href="#">
                            <img src={logo} alt="Site-logo" />
                        </a>
                    </div>
                    <ul className="nav">
                        <li><a href="#">Everything</a></li>
                        <li><a href="#">Groceries</a></li>
                        <li><a href="#">Juice</a></li>
                    </ul>
                    <ul className="contact-nav">
                        <li className='link'><a href="#">About</a></li>
                        <li className='link'><a href="#">Contact</a></li>
                        <li>
                            <a href="#">
                                <span>$20</span>
                                <span><CiShoppingCart /></span>
                                <span className='item'>5</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><RiAccountCircleFill /></a>
                        </li>
                    </ul>
                </div>
                <div className="mobile-menu">
                    <div className="site-logo">
                        <a href="#">
                            <img src={logo} alt="Site-logo" />
                        </a>
                    </div>
                    <ul className="contact-nav">
                        <li>
                            <a href="#">
                                <span>$20</span>
                                <span><CiShoppingCart /></span>
                                <span className='item'>5</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={handleShow}><RiMenu3Fill /></a>
                        </li>
                    </ul>
                    <Offcanvas show={show} onHide={handleClose} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title><a href='#'><RiAccountCircleFill /></a> </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ul className="nav">
                                <li><a href="#">Everything</a></li>
                                <li><a href="#">Groceries</a></li>
                                <li><a href="#">Juice</a></li>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </div>
        </header>
    )
}

export default Header