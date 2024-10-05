import React from "react";
import { MdVerified } from "react-icons/md";
import { HiBeaker } from "react-icons/hi2";
import { FaHandshake } from "react-icons/fa6";
import Bgimg from "../../../assets/images/banner/Banner-D.png"

const Sale = () => {
  return (
    <>
    <div className="relative">
      <img src={Bgimg} alt="Background" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative h-full flex justify-center items-center py-12 px-5">
        <div className="container mx-auto flex flex-col lg:flex-row">
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 lg:w-1/2">
            {/* Image section */}
            <div data-aos="zoom-in">
            </div>
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:pl-12">
              <h1
                className="text-3xl sm:text-4xl font-semibold font-body3 text-primeColor"
              >
                VITIS ENTERPRISES
              </h1>
              <p
                className="text-lg font-body3 text-gray-600 tracking-wide leading-5"
              >
                Our premier brand, Vitis, focuses on delivering high-quality healthcare and general trading products 
                to support overall wellness and healthier lifestyles. We are committed to promoting health within our
                 communities through sustainable and ethically sourced products, ensuring we act responsibly as a business
                  while providing essential solutions for your well-being.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <MdVerified className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                    <span className="text-black font-semibold font-body3">High Quality Assurance</span>
                  </div>
                  <div
                    className="flex items-center gap-3"
                  >
                    < HiBeaker className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                    <span className="text-black font-semibold font-body3">No Harmful Chemicals</span>
                  </div>
                  <div
                    className="flex items-center gap-3"
                  >
                    <FaHandshake className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                    <span className="text-black font-semibold font-body3">Trusted and Certified Sources</span>
                  </div>
                </div>
                <div
                  className="border-l-4 border-primary/50 pl-6 space-y-2"
                >
                  <h1 className="text-2xl font-body3 font-medium font-cursive text-primeColor">
                    Secure and Hygenic
                  </h1>
                  <p className="text-sm text-gray-800 font-normal font-body3">
                  We started Vitis to provide safe and reliable products for people seeking to minimize harmful chemicals and maintain a healthier lifestyle. By offering high-quality healthcare and general products, we also aim to support solutions for common lifestyle-related health challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Sale;

