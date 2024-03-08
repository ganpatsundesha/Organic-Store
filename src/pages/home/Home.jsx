import React from 'react'
import HeroBanner from './HeroBanner/HeroBanner'

import "./style.scss";
import Policies from './Policies/Policies';
import BestSelling from './BestSelling/BestSelling';
import CategoryCard from './CategoryCard/CategoryCard';

const Home = () => {
    return (
        <>
            <HeroBanner />
            <Policies />
            <BestSelling />
            <CategoryCard />
        </>
    )
}

export default Home