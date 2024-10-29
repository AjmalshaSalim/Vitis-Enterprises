import React from 'react'
import Sidenav from '../../components/Admin/Sidenav'
import { FaEdit, FaTrash } from 'react-icons/fa'

const ManageBanners = () => {
  // Dummy banner data
  const banners = [
    {
      id: 1,
      heading: "Summer Collection 2024",
      image: "https://via.placeholder.com/800x400",
      active: true
    },
    {
      id: 2, 
      heading: "New Arrivals - Shop Now",
      image: "https://via.placeholder.com/800x400",
      active: true
    },
    {
      id: 3,
      heading: "Special Discount Sale",
      image: "https://via.placeholder.com/800x400",
      active: false
    }
  ]

  return (
    <div className="flex">
      <Sidenav />
      <div className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold mb-4 text-center pb-5 border-b text-primeColor">Manage Banners</h1>
        <div className="grid grid-cols-1 gap-6">
          {banners.map((banner) => (
            <div key={banner.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">{banner.heading}</h2>
                <div className="space-x-2">
                  <button className="bg-primeColor text-white px-3 py-1 rounded hover:bg-opacity-70">
                    <FaEdit className="inline mr-1" />
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    <FaTrash className="inline mr-1" />
                    Delete
                  </button>
                </div>
              </div>
              <img 
                src={banner.image} 
                alt={banner.heading}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="mt-4">
                <span className={`px-3 py-1 rounded-full text-sm ${banner.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {banner.active ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ManageBanners