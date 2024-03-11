import React from 'react'
import { FaRegStar } from "react-icons/fa";
import reviewImg1 from "../assets/Images/reviewImg1.png";
import reviewImg2 from "../assets/Images/reviewImg2.png";

const ReviewCard = () => {
    const reviewDetails = [
        {
            star: <FaRegStar />,
            HowMuchStar: 4,
            review: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            Img: reviewImg1,
            testiName: "Mila Kunis",
        },
        {
            star: <FaRegStar />,
            HowMuchStar: 4,
            review: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            Img: reviewImg2,
            testiName: "Mike Sendler",
        },
    ]
    return reviewDetails;
}

export default ReviewCard