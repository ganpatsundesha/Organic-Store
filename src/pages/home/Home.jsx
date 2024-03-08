import React from 'react'
import HeroBanner from './HeroBanner/HeroBanner'

import "./style.scss";
import Policies from './Policies/Policies';
import BestSelling from './BestSelling/BestSelling';

const Home = () => {
    return (
        <>
            <HeroBanner />
            <Policies />
            <BestSelling />
        </>
    )
}

export default Home