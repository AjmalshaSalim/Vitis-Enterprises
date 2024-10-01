import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import mom from "../../assets/images/New folder/b1.jpg"
import gym from "../../assets/images/New folder/b2.jpg"
import dr from "../../assets/images/New folder/b3.jpg"
import Heading from "../home/Products/Heading";
import { useSelector } from "react-redux";
import placehold from "../../assets/images/placeholderimage.jpg"
import { baseURL } from "../../constants";



const BannerBottom = () => {
  const homeDetails = useSelector(state => state.auth.homeDetails);


  useEffect(() => {
    const intervalId = setInterval(() => {
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
        
        <div className="pt-10 xl:container bg-white mt-10 pb-10">
          <Heading heading="Top Categories" />
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              // when window width is >= 480px
              425: { 
                slidesPerView: 5,
                spaceBetween: 10
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 8, 
                spaceBetween: 10
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 8,
                spaceBetween: 15
              },
              // when window width is >= 1280px
              1280: {
                slidesPerView: 8,
                spaceBetween: 15
              },
              // when window width is >= 1536px
              1536: {
                slidesPerView: 8,
                spaceBetween: 15
              }
            }}
          >
            {homeDetails && homeDetails.categories.length > 0 ? (
              homeDetails.categories.map((cat, index) => (
                <SwiperSlide key={cat.id}>
                  <div
                    className="w-full p-2 h-full group"
                  >
                    <div
                      key={index}
                      className="border bg-white hover:border-gray-400 rounded-lg text-black relative duration-high group  flex flex-col justify-center items-center"
                    >
                      <img
                        src={`${baseURL}${cat.image}`}
                        alt={`Category ${index + 1}`}
                        className="object-contain w-20 p-2 h-20 rounded-full cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `${placehold}`;
                        }}
                      />
                      <p className="text-center mt-1 mb-2 text-sm font-body3 font-normal text-primeColor lowercase" style={{ color: 'inherit' }}>
                        {cat.name}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <p className="text-center">Loading categories...</p>
            )}
          </Swiper>
        </div>
    </>
  );
};

export default BannerBottom;
