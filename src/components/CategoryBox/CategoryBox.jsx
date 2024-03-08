import React from 'react'
import Button from '../button/Button'
import { FaArrowRightLong } from "react-icons/fa6";

import './style.scss'

const CategoryBox = ({ category }) => {
    return (
        <div className="CategoryBox">
            <h3>{category.title}</h3>
            <p>{category.discription}</p>
            <Button>Shop Now <FaArrowRightLong /></Button>
            <img src={category.bgImg} alt="" />
        </div>
    )
}

export default CategoryBox