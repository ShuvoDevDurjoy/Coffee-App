'use client'
import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./CustomSlider.css";

const CustomSlider = ({ slideItems }) => {
  const sliderRef = useRef(null);

  const settings = {
    rtl: false,
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false, // prevent pause on hover
    pauseOnFocus: false, // prevent pause on focus
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    onSwipe: () => {
      sliderRef.current?.slickPlay(); // restart autoplay after swipe
    },
  };

  return (
    <div className="page_width page_max_width mx_auto pd_block_40 pd_inline_none">
      <Slider ref={sliderRef} {...settings}>
        {slideItems.map((item, index) => (
          <div key={index}>
            <div className="scroll_bottom flex fl_dir_col gap_20 slider_track_item">
              <div className="profile flex gap_20">
                <div className="profile_image relative">
                  <Image fill="auto" src={item.image} alt={item.name} />
                </div>
                <div className="profile_content flex fl_dir_col gap_10">
                  <h2 className="fn_mid font_roboto">{item.name}</h2>
                  <h3 className="fn_para_1 font_mono">{item.profession}</h3>
                </div>
              </div>
              <div className="flex fl_dir_col">
                <p className="font_mono fn_para_1 client_talk">{item.talk}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
