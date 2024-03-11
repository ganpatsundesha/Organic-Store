import React from 'react'
import Product1 from "../assets/Images/proImage1.jpg";
import Product2 from "../assets/Images/proImage2.jpg";
import Product3 from "../assets/Images/proImage3.jpg";
import Product5 from "../assets/Images/proImage5.jpg";
import { FaRegStar } from "react-icons/fa";

const TrandingPro = () => {
    const TrandingPro = [
        {
            imgage: Product1,
            type: 'Groceries',
            name: 'Assorted Coffee',
            price: '35.00',
            stars: <FaRegStar />,
            sale: false,
        },
        {
            imgage: Product5,
            type: 'Groceries',
            name: 'Fresh Orange Juice',
            price: '35.00',
            stars: <FaRegStar />,
            sale: false,
        },
        {
            imgage: Product2,
            type: 'Groceries',
            name: 'Hand Sanitizer',
            price: '35.00',
            stars: <FaRegStar />,
            sale: false,
        },
        {
            imgage: Product3,
            type: 'Groceries',
            name: 'Handpicked Red Chillies',
            price: '35.00',
            stars: <FaRegStar />,
            sale: false,
        },
    ]
    return TrandingPro;
}

export default TrandingPro
