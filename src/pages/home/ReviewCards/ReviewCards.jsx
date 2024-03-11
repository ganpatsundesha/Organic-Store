import React from 'react';
import "./style.scss";
import Container from '../../../components/container/Container'
import TestimonialCard from '../../../components/TestimonialCard/TestimonialCard';
import LeafTitle from '../../../components/LeafTitle/LeafTitle';
import leaf from '../../../assets/Images/leaf1.png';
import Button from '../../../components/button/Button';
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import reviewImg1 from "../../../assets/Images/reviewImg1.png";
import reviewImg2 from "../../../assets/Images/reviewImg2.png";
import BrandLogo1 from "../../../assets/Images/company1.svg";
import BrandLogo2 from "../../../assets/Images/company2.svg";
import BrandLogo3 from "../../../assets/Images/company3.svg";
import BrandLogo4 from "../../../assets/Images/company4.svg";
import BrandLogo5 from "../../../assets/Images/company5.svg";

const ReviewCards = () => {
    return (
        <section className='sectionTestimonial'>
            <Container>
                <div className="row">
                    <div className="col-12">
                        <LeafTitle title="Customers Reviews" leaf={leaf} />
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                        <TestimonialCard star={<FaStar />} review="Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." Img={reviewImg1} testiName="Mila Kunis" />
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                        <div className="dealCard">
                            <div className="content">
                                <h3>Deal Of The Day 15% Off On All Vegetables!</h3>
                                <p>I am text block. Click edit button to change this tex em ips.</p>
                                <Button>Shop Now<FaArrowRight /></Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                        <TestimonialCard star={<FaStar />} review="Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." Img={reviewImg2} testiName="Mike Sendler" />
                    </div>
                    <div className="col-12">
                        <div className="brand-flex">
                            <p>Featured Brands:</p>
                            <div className="brands">
                                <img src={BrandLogo1} alt="Brand's Logo" />
                                <img src={BrandLogo2} alt="Brand's Logo" />
                                <img src={BrandLogo3} alt="Brand's Logo" />
                                <img src={BrandLogo4} alt="Brand's Logo" />
                                <img src={BrandLogo5} alt="Brand's Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ReviewCards