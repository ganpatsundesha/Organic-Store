import React from 'react'
import "./style.scss";
import Container from '../../../components/container/Container';
import heroImage from '../../../assets/Images/heroImage.png'
import leaf from '../../../assets/Images/leaf1.png'
import Button from '../../../components/button/Button';
import { FaCartShopping } from "react-icons/fa6";

const HeroBanner = () => {
    return (
        <section className='heroBanner'>
            <Container>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="heroText">
                            <img src={leaf} alt="leaf" />
                            <span>Best Quality Products</span>
                            <h1>Join The Organic Movement!</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <Button><FaCartShopping />Shop Now</Button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="heroImage">
                            <img src={heroImage} alt="HeroImage" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HeroBanner