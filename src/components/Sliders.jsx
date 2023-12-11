// React Imports
import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// Image Imports
import slide01 from "../img/sliders/main-slider/slide_01.jpg";
import slide03 from "../img/sliders/main-slider/slide_03.jpg";
import slide05 from "../img/sliders/main-slider/slide_05.jpg";
import even from "../img/sliders/main-slider/even.jpg";

import slide01cut from "../img/sliders/main-slider/slide_01-cut.jpg";
import slide03cut from "../img/sliders/main-slider/slide_03-cut.jpg";
import slide05cut from "../img/sliders/main-slider/slide_05-cut.jpg";
import evencut from "../img/sliders/main-slider/even-cut.jpg";

export function MainSlider() {

    const settings = {
        dots: true,
        infinite: true,

        fade: true,
        speed: 1000,

        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,

        nextArrow: <></>,
        prevArrow: <></>,

        autoplay: true,
        autoplaySpeed: 7000,

    };
    return (
        <Slider {...settings} className='main-slider'>
            <div className="box">
                <img className="long" src={slide01} alt="Slide1" />
                <img className="short" src={slide01cut} alt="Slide1" />
            </div>
            <div className="box">
                <img className="long" src={even} alt="Slide2" />
                <img className="short" src={evencut} alt="Slide2" />
            </div>
            <div className="box">
                <img className="long" src={slide03} alt="Slide3" />
                <img className="short" src={slide03cut} alt="Slide3" />
            </div>
            <div className="box">
                <img className="long" src={even} alt="Slide4" />
                <img className="short" src={evencut} alt="Slide4" />
            </div>
            <div className="box">
                <img className="long" src={slide05} alt="Slide5" />
                <img className="short" src={slide05cut} alt="Slide5" />
            </div>
            <div className="box">
                <img className="long" src={even} alt="Slide6" />
                <img className="short" src={evencut} alt="Slide6" />
            </div>
        </Slider>
    );
}

