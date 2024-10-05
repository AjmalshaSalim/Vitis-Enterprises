import React from 'react'
import img from "../../assets/images/New folder/Popup-Banner.png"
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function HomeNutritionForm({ onClose }) {
  return (
    <div className='fixed inset-0 top-14 z-99999 flex items-center justify-center' data-aos="fade-up" >
        <div className='relative w-full max-w-4xl mx-auto p-4 sm:p-10'>
            <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <button className='absolute top-6 right-8 m-4 text-3xl text-primeColor' onClick={onClose}>&times;</button>
                <div className='flex flex-col md:flex-row items-center justify-center p-5'>
                    <img src={img} alt='Best Diet Plans' className='md:w-1/2 w-full h-auto object-cover rounded-lg' />
                    <div className='md:w-1/2 w-full flex flex-col justify-center items-center p-4'>
                        <h2 className='text-primeColor text-xl md:text-2xl lg:text-4xl font-medium text-center'>Discover the Excellence of Our Quality Products</h2>
                        <div className='mt-4 space-y-2'>
                            <a href="mailto:vitisenterprises@gmail.com" className='bg-primeColor text-white py-2 px-4 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors'>
                                Email Us <AiOutlineArrowRight className='ml-2' />
                            </a>
                            <a href="https://wa.me/917736921309" className='bg-primeColor text-white py-2 px-4 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors'>
                                WhatsApp <AiOutlineArrowRight className='ml-2' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
