import React from 'react';
import Container from '../../../components/container/Container';
import leaf from "../../../assets/Images/leaf1.png";

import './style.scss';
import LeafTitle from '../../../components/LeafTitle/LeafTitle';
import ProductCard from '../../../components/ProductCard/ProductCard';
import TrandingPro from '../../../Data/TrandingPro';

const TrandingProducts = () => {

    const trandingProduct = TrandingPro()

    return (
        <section className='sectionTranding'>
            <Container>
                <div className="row">
                    <div className="col-12">
                        <LeafTitle title="Trending Products" leaf={leaf} />
                    </div>

                    {
                        trandingProduct.map((product, index) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                                    <ProductCard product={product} />
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </section>
    )
}

export default TrandingProducts