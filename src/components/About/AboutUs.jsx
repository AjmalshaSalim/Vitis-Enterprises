import React from 'react';
import { IoStarHalf } from "react-icons/io5";
import { GiPoisonBottle } from "react-icons/gi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import Lottie from 'lottie-react';

export default function AboutUs() {
    return (
        <div className="font-body3">
            <div className=" mx-auto py-8">
                <div className="text-center mb-8 bg-white p-3 border-t">
                    <h1 className="text-4xl font-semibold text-primeColor mb-4">Why Vitis?</h1>
                    <p className="text-lg text-white rounded-md bg-primeColor p-3 shadow-md">
                    We provide high-quality healthcare and general trading products, sourced and handled with strict attention
                     to quality standards and sustainability. From procurement to packaging, we ensure that every step follows
                      our principles of safety, reliability, and ethical practices. Our wide range of products meets your everyday
                       needs while ensuring health and well-being at competitive prices. With seamless delivery to your doorstep and
                        the option to shop directly from our website or physical outlet, Vitis makes shopping for essential items 
                        convenient, affordable, and trustworthy.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center bg-white border rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
                        <IoStarHalf className="text-6xl text-black mb-4" />
                        <h2 className="text-xl font-bold text-gray-700 mb-2">High Quality Products</h2>
                        <p className="text-gray-600 text-center">Providing high-quality healthcare and general products at competitive prices.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white border rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
                        <GiPoisonBottle className="text-6xl text-black mb-4" />
                        <h2 className="text-xl font-bold text-gray-700 mb-2">No Harmful Additives</h2>
                        <p className="text-gray-600 text-center">Products free from harmful chemicals, ensuring safety and reliability.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white border rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
                        <AiFillSafetyCertificate className="text-6xl text-black mb-4" />
                        <h2 className="text-xl font-bold text-gray-700 mb-2">Trusted Sources</h2>
                        <p className="text-gray-600 text-center">Sourced from reputable and certified suppliers for assured quality.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white border rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
                        <RiSecurePaymentLine className="text-6xl text-black mb-4" />
                        <h2 className="text-xl font-bold text-gray-700 mb-2">Secure and Hygienic</h2>
                        <p className="text-gray-600 text-center">Hygienic packaging and secure delivery straight to your doorstep.</p>
                    </div>
                </div>
            </div>
            <section className="w-full py-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-semibold text-primeColor">Our Process</h1>
                </div>
                <div>
                    <div className="relative bg-white border rounded-xl shadow-lg overflow-hidden">
                        <div className="relative z-10 p-6 space-y-6">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border">
                                <div className="md:w-1/3">
                                    <p className="font-bold text-xl text-center text-black p-4">Identifying Trusted Sources</p>
                                </div>
                                <div className="md:w-2/3 bg-[#bbe6b9] text-black p-4">
                                    <p>We carefully select suppliers and manufacturers who maintain high standards of quality and sustainability. Each source is verified to ensure the products meet our rigorous standards.</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border">
                                <div className="md:w-1/3">
                                    <p className="font-bold text-xl text-center text-black  p-4">Procuring and Selecting Products</p>
                                </div>
                                <div className="md:w-2/3 bg-[#bbe6b9] text-black p-4">
                                    <p>We handpick the best healthcare and general trading products, ensuring they are handled in a hygienic and controlled environment.</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border">
                                <div className="md:w-1/3">
                                    <p className="font-bold text-xl text-center text-black  p-4">Addressing Customer Needs</p>
                                </div>
                                <div className="md:w-2/3 bg-[#bbe6b9] text-black  p-4">
                                    <p>We cater to a variety of customer requirements, offering an easy and seamless shopping experience for essential healthcare items, wellness products, and general trading goods tailored to your lifestyle and well-being.</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border">
                                <div className="md:w-1/3">
                                    <p className="font-bold text-xl text-center text-black p-4">Receiving Online Customer Orders</p>
                                </div>
                                <div className="md:w-2/3 bg-[#bbe6b9] text-black p-4">
                                    <p>Our website provides detailed descriptions, usage information, and health benefits for each product. Customers can conveniently place orders online from the comfort of their homes.</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border">
                                <div className="md:w-1/3">
                                    <p className="font-bold text-xl text-center text-black p-4">Packing and Delivery</p>
                                </div>
                                <div className="md:w-2/3 bg-[#bbe6b9] text-black p-4">
                                    <p>Your order is packed with the utmost care in eco-friendly, secure packaging, and delivered promptly to your doorstep, ensuring a smooth and hassle-free experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
