import React from 'react'

import "./style.scss";

const ProductCard = ({ proImg, proType, proName, stars, proPrice }) => {
    return (
        <div className='productCard'>
            <img className='mainImage' src={proImg} alt="ProductImage" />
            <span>{proType}</span>
            <h5>{proName}</h5>
            <img className='stars' src={stars} alt="Stars" />
            <h6>£{proPrice}</h6>
        </div>
    )
}

export default ProductCard;