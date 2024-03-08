import React from 'react'
import Container from '../../../components/container/Container';
import leaf from "../../../assets/Images/leaf1.png";
import ProductCard from '../../../components/ProductCard/ProductCard';
import BestProducts from '../../../Data/BestProducts';
import LeafTitle from '../../../components/LeafTitle/LeafTitle';
import "./style.scss";


const BestSelling = () => {

    const bestProducts = BestProducts();


    return (
        <section className="sectionBestSelling">
            <Container>
                <div className="row">
                    <div className="col-12">
                        <LeafTitle title="Best Selling Products" leaf={leaf} />
                    </div>
                    {
                        bestProducts.map((product, index) => {
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

export default BestSelling