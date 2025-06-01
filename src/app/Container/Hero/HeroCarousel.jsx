'use client'; // This will run on the browser

import Image from "next/image";
import { useEffect, useState } from "react";
import "./Hero.css";

const slides = [
  {
    id: 1,
    src: "./images/carousel-1.jpg",
    heading: "We have been serving 1",
    title: "Coffee",
    sub: "* SINCE 1950 *",
  },
  {
    id: 2,
    src: "./images/carousel-2.jpg",
    heading: "Freshly Brewed 2",
    title: "Espresso",
    sub: "* EVERY DAY *",
  },
  {
    id: 1,
    src: "./images/carousel-1.jpg",
    heading: "We have been serving 3",
    title: "Coffee",
    sub: "* SINCE 1950 *",
  },
  {
    id: 2,
    src: "./images/carousel-2.jpg",
    heading: "Freshly Brewed 4",
    title: "Espresso",
    sub: "* EVERY DAY *",
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [slide_left, setSlideLeft] = useState(false);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev)=> (currentIndex+1)%totalSlides);
    setNextIndex((prev)=>(currentIndex+2)%totalSlides);
    setSlideLeft(true);
  };

  const prevSlide = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (currentIndex - 1 + totalSlides) % totalSlides);
    setNextIndex((prev)=>(currentIndex-1+totalSlides)%totalSlides);
    setSlideLeft(false);
  };

  useEffect(()=>{
    setPrevIndex((currentIndex - 1 + totalSlides) % totalSlides);
    setNextIndex((currentIndex + 1) % totalSlides);
    setSlideLeft(true);
  })

  return (
    <div className="hero_inner_container relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero_carousal_item ${index==currentIndex?"active":""} ${index==prevIndex?(slide_left?'slide_left':'slide_right'):''} ${index==nextIndex?(slide_left?'slide_right':'slide_left'):''}`}
          >
            <div className="hero_carousal_image_container relative">
              <Image
                className="hero_carousal_image"
                src={slide.src}
                fill="auto"
                alt={`carousel_image_${index}`}
              />
            </div>
            <div className="hero_carousal_content_container">
              <h2 className="fn_capitalize cl_primary fn_mid font_roboto">{slide.heading}</h2>
              <h1 className="fn_ex_large fn_upper cl_white">{slide.title}</h1>
              <h2 className="fn_upper cl_white">{slide.sub}</h2>
            </div>
          </div>
        ))}

      <button onClick={prevSlide} className="abs h_100 left_carousal_button">
        <span className="icon_container icon_left_control">
        </span>
      </button>
      <button onClick={nextSlide} className="abs h_100 right_carousal_button">
        <span className="icon_container icon_right_control">
        </span>
      </button>
    </div>
  );
};

export default HeroCarousel;
