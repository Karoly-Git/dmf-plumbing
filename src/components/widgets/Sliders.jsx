// React Imports
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { motion as m } from "framer-motion";

// Image Imports
import slide01 from "../../img/sliders/main-slider/slide_01.jpg";
import slide03 from "../../img/sliders/main-slider/slide_03.jpg";
import slide05 from "../../img/sliders/main-slider/slide_05.jpg";

// Icon Imports
import { MdOutlineNavigateNext as Arrow } from 'react-icons/md'
import { RiDoubleQuotesL as Quotes } from 'react-icons/ri'

export default function MainSlider() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [opacities, setOpacities] = useState([1, 0, 0]);

    const TIME_GAP = 200;
    const DURATION = 500;
    const CYCLE = 8000;

    function handleClick() {
        setOpacities([0, 0, 0]);

        if (activeSlide < 2) {
            setActiveSlide((prev) => prev + 1);
            let newOpacities = [0, 0, 0];
            newOpacities[activeSlide + 1] = 1;

            setTimeout(() => {
                setOpacities([...newOpacities]);
            }, TIME_GAP + DURATION);
        } else {
            setActiveSlide(0);
            setTimeout(() => {
                setOpacities([1, 0, 0]);
            }, TIME_GAP + DURATION);
        }
    }

    useEffect(() => {
        let slides = document.querySelectorAll(".box");

        const interval = setInterval(() => {
            handleClick();
        }, TIME_GAP + DURATION + CYCLE);

        return () => clearInterval(interval);
    }, [activeSlide]);

    return (
        <div className="main-slider">
            <div
                className="slider-box box-1"
                style={{
                    opacity: opacities[0],
                    transition: `opacity ${DURATION}ms ease`,
                }}>
                <img src={slide01} alt="" />
            </div>
            <div
                className="slider-box box-2"
                style={{
                    opacity: opacities[1],
                    transition: `opacity ${DURATION}ms ease`,
                }}>
                <img src={slide03} alt="" />
            </div>
            <div
                className="slider-box box-3"
                style={{
                    opacity: opacities[2],
                    transition: `opacity ${DURATION}ms ease`,
                }}>
                <img src={slide05} alt="" />
            </div>
        </div>
    );
}

/*
export function ReviewSlider() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [opacities, setOpacities] = useState([1, 0, 0]);

    const TIME_GAP = 200;
    const DURATION = 500;
    const CYCLE = 8000;

    function handleClick() {
        setOpacities([0, 0, 0]);

        if (activeSlide < 2) {
            setActiveSlide((prev) => prev + 1);
            let newOpacities = [0, 0, 0];
            newOpacities[activeSlide + 1] = 1;

            setTimeout(() => {
                setOpacities([...newOpacities]);
            }, TIME_GAP + DURATION);
        } else {
            setActiveSlide(0);
            setTimeout(() => {
                setOpacities([1, 0, 0]);
            }, TIME_GAP + DURATION);
        }
    }

    useEffect(() => {
        let slides = document.querySelectorAll(".box");

        const interval = setInterval(() => {
            handleClick();
        }, TIME_GAP + DURATION + CYCLE);

        return () => clearInterval(interval);
    }, [activeSlide]);

    return (
        <div className="review-slider">
            <p className="review review-1">
                "DMF's Gas Safe registration is a testament to their commitment to safety and expertise. Their engineers handled my gas-related needs with exceptional care, ensuring a safe and efficient service that I highly recommend."
            </p>
            <p className="review review-2">
                "DMF Plumbing and Heating provided legal and safe services that gave me peace of mind. Their knowledgeable plumbers and gas fitters ensured everything was up to code, crucial for my home's insurance and selling prospects."
            </p>
            <p className="review review-3">
                "Fantastic boiler servicing and replacement by DMF! They installed a modern, high-efficiency boiler that's already reducing my heating bills. Their use of leading brands like Vaillant and Worcester, coupled with competitive pricing, made all the difference."
            </p>
        </div>
    );
}*/


function PreviousArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="button"
            id="previous-button"
            onClick={onClick}
        >
            <Arrow className="icon" />
        </div>
    );
}
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="button"
            onClick={onClick}
        >
            <Arrow className="icon" />
        </div>
    );
}

export function ReviewSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,

        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,

        autoplay: true,
        autoplaySpeed: 5000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const reviews = [
        {
            isActive: true,
            name: "Annual service for our boiler",
            comment: "Dan did a fantastic job servicing our boiler today. He arrived on time, finished the job without any fuss and tidied up after himself. His price was very competitive. I couldn't ask for better service. Highly recommended."
        },
        {
            isActive: true,
            name: "Replacing a valve",
            comment: "Dan worked quickly and efficiently to replace a leaking valve in an awkward location in our downstairs WC. Definitely recommend."
        },
        {
            isActive: true,
            name: "Remove a plug that was firmly stuck in the bathtub",
            comment: "I was very happy with the service I received. The plumber was very courteous and efficient. He also cleaned up any mess that was caused by the work. I would highly recommend this company. I have used them numerous times in the past."
        },
        {
            isActive: true,
            name: "Fixing a leaking tap",
            comment: "Excellent communication, seamless booking, turned up on time, good advice, great customer service and very efficient! Would highly recommend."
        },
        {
            isActive: true,
            name: "Cap gas pipe/ reconnect other gas pipe",
            comment: "Very happy with Dan's work. He was knowledgeable, friendly and efficient. He finished the job professionally and quickly and did all the safety checks while talking us through the process and giving us useful advice. Price was good and the experience also. Great communication with Damian. Would use them again."
        },
    ];


    return (
        <Slider {...settings} className='review-slider'>
            {reviews.map((element, reviewsIndex) => (
                element.isActive &&
                <div
                    key={reviewsIndex}
                    className="slider-wrapper"
                >
                    <p>
                        <i>
                            <Quotes className="icon" />
                        </i>
                        <i>
                            {element.comment}
                        </i>
                        <i>
                            <Quotes className="icon" />
                        </i>
                    <h3>
                        {element.name}
                    </h3>
                    </p>
                </div>
            ))}
        </Slider>
    );
}





