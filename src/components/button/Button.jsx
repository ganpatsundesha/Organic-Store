import React from 'react'

import "./style.scss";

const Button = ({ children }) => {
    return (
        <a href='#' className='cta-btn'>{children}</a>
    )
}

export default Button