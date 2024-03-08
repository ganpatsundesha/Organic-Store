import React from 'react'

import "./style.scss"

const PoliciesCard = ({ title, description, icon }) => {
    return (
        <div className="policies__box">
            <div className="d-flex">
                <div className="box__img">
                    {icon}
                </div>
                <div className="box__text">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default PoliciesCard