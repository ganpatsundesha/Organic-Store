import React from 'react';
import "./style.scss";
import Container from '../container/Container';
import Logo from '../../assets/Images/footerLogo.png';
import PlayStore from '../../assets/Images/play-store.png';
import AppStore from '../../assets/Images/app-store.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-side">
                            <a href="#">
                                <img src={Logo} alt="Logo" />
                            </a>
                            <p><strong><em>Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.</em></strong></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="links">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Cart</a></li>
                                        <li><a href="#">Checkout</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">My account</a></li>
                                        <li><a href="#">Shop</a></li>
                                    </ul>
                                </div>
                                <div className="links">
                                    <h3>Site Links</h3>
                                    <ul>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Shipping Details</a></li>
                                        <li><a href="#">Offers Coupons</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="links">
                                    <h3>Download Our Mobile App</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt libero interdum sit amet.</p>
                                </div>
                                <div className="links">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li><a href="#">Know More About Us</a></li>
                                        <li><a href="#">Visit Store</a></li>
                                        <li><a href="#">Let’s Connect</a></li>
                                        <li><a href="#">Locate Stores</a></li>
                                    </ul>
                                    <div className="d-flex">
                                        <a href="#"><img src={PlayStore} /></a>
                                        <a href="#"><img src={AppStore} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="row">
                    <div className="col-12">
                        <div className="bottom-footer">
                            <p>Copyright © 2024 | Organic Store</p>
                            <ul>
                                <li><a href="#"><img src="" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer