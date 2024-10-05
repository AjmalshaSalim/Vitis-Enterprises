import React from "react";
import { Link } from "react-router-dom";
import pic from "../../../assets/images/banner/Mini-Banner-A.jpg"
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";

const YearProduct = () => {
  return (
    <Link to="/shop">
      <div className="w-full lg:container border mb-20 bg-[#ffffff]  relative font-titleFont flex flex-col md:flex-row items-center justify-center" >
        <div className="w-full h-80 px-4 md:px-0 flex flex-col items-center gap-6  justify-center" >
          <h1 className="text-3xl font-semibold text-primeColor" >
            General Trading Products 
          </h1>
          <p className="text-lg font-normal text-center text-primeColor max-w-[600px] mr-4">
          Discover Essential Products for a Healthier Lifestyle
Empower your well-being with products that help you stay fit, healthy, and safe.
          </p>
          <ShopNow />
        </div>
        <div className="w-full h-full">
          <Image className="w-full h-full object-contain md:object-cover p-6" imgSrc={pic} />
        </div>
      </div>
    </Link>
  );
};

export default YearProduct;


