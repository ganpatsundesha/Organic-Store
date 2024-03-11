import React from 'react';


import "./style.scss";

const TestimonialCard = ({ review, testiName, Img, starNum, star }) => {
    return (
        <div className="testimonial__card">
            <div className="d-flex">
                {star}
                {star}
                {star}
                {star}
                {star}
            </div>
            <p>{review}</p>
            <div className="d-flex">
                <img src={Img} alt="Image" />
                <span>{testiName}</span>
            </div>
        </div>
    )
}

export default TestimonialCard