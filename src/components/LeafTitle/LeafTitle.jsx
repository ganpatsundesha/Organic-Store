import React from 'react';

import "./style.scss";

const LeafTitle = ({ title, leaf }) => {
    return (
        <div className='leafTitle'>
            <h2>{title}</h2>
            <img src={leaf} alt="Leaf" />
        </div>
    )
}

export default LeafTitle