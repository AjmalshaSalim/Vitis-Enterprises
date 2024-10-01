import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#6A9AB0] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-3 pb-3">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-white duration-200 text-sm gap-2">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright/>
          </span>
          <span><a href="/"> VITIS.</a></span> All Rights Reserved.  Designed & Developed By Trivlogic Pvt Ltd
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
