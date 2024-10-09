import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const AboutBanner = () => {
  return (
    <div className=" w-auto lg:w-full pt-[100px] bg-[url('/public/assets/aboutbanner.png')] sm:pt-[150px] lg:pt-[230px] pb-[100px]">
      <div className="text-center">
        <div>
          <h1 className=" text-xl lg:text-8xl mt-20 text-white font-bold">
            About Us
          </h1>
        </div>
        <div className="flex justify-center items-center gap-4 mt-8 mb-10">
          <Link className="text-slate-300 " to="/">
            Home
          </Link>
          <IoIosArrowForward className="size-5 text-white" />
          <p className="text-white">About Us</p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
