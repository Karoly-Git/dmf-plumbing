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

        autoplay: false,
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
            name: "John D.",
            comment: "I recently had a plumbing emergency at my home in London, and SW London Plumbing and Heating Services came to the rescue. Their experienced plumbers solved the issue quickly and efficiently, leaving my premises clean and tidy. I highly recommend their professional service."
        },
        {
            isActive: true,
            name: "Sarah H.",
            comment: "I needed a boiler replacement, and I chose SW London Plumbing and Heating Services. They offered competitive prices and installed a modern Vaillant boiler. Not only did it save me money on heating bills, but their Gas Safe registered engineers provided a safe and hassle-free installation."
        },
        {
            isActive: true,
            name: "David S.",
            comment: "When it comes to safety, SW London Plumbing and Heating Services is top-notch. Their Gas Safe registered heating engineers ensure peace of mind for homeowners. Whether you need boiler repair, gas fitting, or a gas safety check for landlords, they have you covered."
        },
        {
            isActive: true,
            name: "Emily P.",
            comment: "I had plumbing issues in my rental property, and I needed a Landlord's gas safe certification. SW London Plumbing and Heating Services offered a comprehensive service without any call-out rates. Their professionalism made the entire process hassle-free."
        },
        {
            isActive: true,
            name: "Michael B.",
            comment: "I've used SW London Plumbing and Heating Services for various plumbing needs, from bathroom fittings to gas inspections. Their team is experienced, transparent, and committed to customer satisfaction. They are my go-to choice for all plumbing and heating services in London."
        }
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
                    </p>
                    <h3>
                        {element.name}
                    </h3>
                </div>
            ))}
        </Slider>
    );
}





