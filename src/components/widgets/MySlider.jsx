// React Imports
import React, { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

// Image Imports
import slide01 from "../../img/sliders/main-slider/slide_01.jpg";
import slide03 from "../../img/sliders/main-slider/slide_03.jpg";
import slide05 from "../../img/sliders/main-slider/slide_05.jpg";
import even from "../../img/sliders/main-slider/even.jpg";


export default function MySlider() {
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
        <div className="my-slider">
            <div
                className="my-box box-1"
                style={{
                    opacity: opacities[0],
                    transition: `opacity ${DURATION}ms ease`,
                }}>
                <img src={slide01} alt="" />
            </div>
            <div
                className="my-box box-2"
                style={{
                    opacity: opacities[1],
                    transition: `opacity ${DURATION}ms ease`,
                }}>
                <img src={slide03} alt="" />
            </div>
            <div
                className="my-box box-3"
                style={{
                    opacity: opacities[2],
                    transition: `opacity ${DURATION}ms ease`,
                }}>
                <img src={slide05} alt="" />
            </div>
        </div>
    );
}


