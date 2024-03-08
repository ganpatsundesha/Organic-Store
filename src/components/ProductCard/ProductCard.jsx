import React from 'react'

import "./style.scss";

const ProductCard = ({ product }) => {
    return (
        <a href='#' className='productCard'>
            <div className='mainImage'>
                <img src={product.imgage} alt="ProductImage" />
            </div>
            <span>{product.type}</span>
            <h5>{product.name}</h5>
            <div className="stars">
                {product.stars}
                {product.stars}
                {product.stars}
                {product.stars}
                {product.stars}
            </div>
            <div className="d-flex">
                {
                    product.sale ? <><h6 className='lastPrice'>{product.proLastPrice}</h6></> : <></>
                }
                <h6>£{product.price}</h6>
            </div>
            {
                product.sale ? <><div className="sale">sale!</div></> : <></>
            }

        </a>
    )
}

export default ProductCard;