import React from 'react';
import loader from "../../assets/animation/loader.json";
import Lottie from 'lottie-react';

const Loader = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center bg-[#fff]'> 
      <p className='text-[#6A9AB0] font-body3 px-10 text-center text-lg xs:text-sm md:text-xl lg:text-2xl font-medium'>"High-quality healthcare and general trading products" <span className='text-[#6A9AB0] text-xl xs:text-sm md:text-2xl lg:text-3xl font-semibold'><br /> ~ VITIS</span></p>
      <Lottie animationData={loader} className='w-40 md:w-60 lg:w-80'/>
    </div>
  );
};

export default Loader;
