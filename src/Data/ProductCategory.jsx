import React from 'react'
import BgImg1 from '../assets/Images/categoryImage1.jpg'
import BgImg2 from '../assets/Images/categoryImage2.jpg'
import BgImg3 from '../assets/Images/categoryImage3.jpg'


const ProductCategory = () => {
    const productsCategory = [
        {
            title: "Farm Fresh Fruits",
            discription: "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.",
            bgImg: BgImg1,
        },
        {
            title: "Fresh Vegetables",
            discription: "Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.",
            bgImg: BgImg2,
        },
        {
            title: "Organic Legume",
            discription: "Phasellus sed urna mattis, viverra libero sed, aliquam est.",
            bgImg: BgImg3,
        },
    ]
    return productsCategory;
}

export default ProductCategory