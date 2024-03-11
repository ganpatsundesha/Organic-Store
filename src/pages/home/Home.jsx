import React from 'react'
import HeroBanner from './HeroBanner/HeroBanner'
import Policies from './Policies/Policies';
import BestSelling from './BestSelling/BestSelling';
import CategoryCard from './CategoryCard/CategoryCard';
import OfferBox from './OfferBox/OfferBox';
import TrandingProducts from './TrandingProducts/TrandingProducts';

import "./style.scss";

const Home = () => {
    return (
        <>
            <HeroBanner />
            <Policies />
            <BestSelling />
            <CategoryCard />
            <OfferBox />
            <TrandingProducts />
        </>
    )
}

export default Home