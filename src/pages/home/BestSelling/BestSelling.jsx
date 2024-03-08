import React from 'react'

import Container from '../../../components/container/Container';
import Product1 from "../../../assets/Images/proImage1.jpg";
import leaf from "../../../assets/Images/leaf1.png";
import { FaRegStar } from "react-icons/fa";
import { FaRegFaceGrinStars } from "react-icons/fa6";
import ProductCard from '../../../components/ProductCard/ProductCard';
import "./style.scss";

const BestSelling = () => {
    return (
        <section className="sectionBestSelling">
            <Container>
                <div className="row">
                    <div className="col-12">
                        <div className="bestSelling__title">
                            <h2>Best Selling Products</h2>
                            <img src={leaf} alt="Leaf" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <ProductCard stars={<FaRegFaceGrinStars />} proImg={Product1} proType="Groceries" proName="Assorted Coffee" proPrice={35.00} />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default BestSelling