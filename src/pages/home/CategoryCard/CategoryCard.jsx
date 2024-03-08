import React from 'react';
import Container from '../../../components/container/Container';
import CategoryBox from '../../../components/CategoryBox/CategoryBox';
import ProductCategory from '../../../Data/ProductCategory';

import "./style.scss";

const CategoryCard = () => {
    const productCategory = ProductCategory()
    return (
        <section className="sectionCategory">
            <Container>
                <div className="row">
                    {
                        productCategory.map((category, index) => {
                            return (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <CategoryBox category={category} />
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </section>
    )
}

export default CategoryCard