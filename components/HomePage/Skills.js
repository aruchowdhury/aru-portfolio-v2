import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { skills } from "../ProjectData";
import SectionTitle from "../SectionTitle";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

export default function Skills() {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-28 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="skills"
    >
      <SectionTitle text1="My Skills..." />
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {skills.map((skill, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="mt-2 h-max w-full p-4 shadow-teal-500 shadow-md border border-teal-500 rounded-md hover:bg-teal-800 flex flex-col items-center justify-between transition-all delay-200">
              <p className="text-teal-500">{skill.title}</p>
              <p className="text-teal-500 self-center">{skill.description}</p>
              {skill.tools.map((tool, index) => {
                <p key={index} className="">
                  {tool}
                </p>;
              })}
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-10 w-10 rounded-full  border-teal-500 border hover:bg-teal-500 hover:text-gray-100 transition-all text-teal-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <IoMdArrowBack size={25} />
          </div>
          <div
            className="flex items-center justify-center h-10 w-10 rounded-full   border-teal-500 border hover:bg-teal-500 hover:text-gray-100 transition-all text-teal-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <IoMdArrowForward size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}
