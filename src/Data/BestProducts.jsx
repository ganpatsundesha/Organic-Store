import React from 'react'
import Product1 from "../assets/Images/proImage1.jpg";
import Product2 from "../assets/Images/proImage2.jpg";
import Product3 from "../assets/Images/proImage3.jpg";
import Product4 from "../assets/Images/proImage4.jpg";
import { FaRegStar } from "react-icons/fa";

const BestProducts = () => {
    const bestProduct = [
        {
            imgage: Product1,
            type: 'Groceries',
            name: 'Assorted Coffee',
            price: '35.00',
            stars: <FaRegStar />,
            sale: false,
        },
        {
            imgage: Product2,
            type: 'Groceries',
            name: 'Hand Sanitizer',
            price: '15.00',
            stars: <FaRegStar />,
            sale: false,
        },
        {
            imgage: Product3,
            type: 'Groceries',
            name: 'Handpicked Red Chillies',
            price: '19.00',
            stars: <FaRegStar />,
            sale: false,
        },
        {
            imgage: Product4,
            type: 'Groceries',
            name: 'Natural Extracted Edible Oil',
            price: '35.00',
            stars: <FaRegStar />,
            proLastPrice: '£34.00',
            sale: true,
        },
    ]
    return bestProduct;
}

export default BestProducts