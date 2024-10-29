import React, { useState } from 'react'
import Sidenav from '../../components/Admin/Sidenav'
import { FaEdit, FaTrash } from 'react-icons/fa'

const ManageBanners = () => {
  // Dummy banner data
  const [banners, setBanners] = useState([
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
  ])

  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedBanner, setSelectedBanner] = useState(null)
  const [editedBanner, setEditedBanner] = useState({ heading: '', image: '', active: false })

  const handleEdit = (banner) => {
    setSelectedBanner(banner)
    setEditedBanner({ ...banner })
    setShowEditModal(true)
  }

  const handleDelete = (banner) => {
    setSelectedBanner(banner)
    setShowDeleteModal(true)
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()
    setBanners(banners.map(b => 
      b.id === editedBanner.id ? editedBanner : b
    ))
    setShowEditModal(false)
  }

  const confirmDelete = () => {
    setBanners(banners.filter(b => b.id !== selectedBanner.id))
    setShowDeleteModal(false)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setEditedBanner({ ...editedBanner, image: imageUrl })
    }
  }

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
                  <button 
                    onClick={() => handleEdit(banner)}
                    className="bg-primeColor text-white px-3 py-1 rounded hover:bg-opacity-70"
                  >
                    <FaEdit className="inline mr-1" />
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(banner)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
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

      {/* Edit Banner Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">Edit Banner</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Banner Heading</label>
                <input 
                  type="text" 
                  value={editedBanner.heading} 
                  onChange={(e) => setEditedBanner({ ...editedBanner, heading: e.target.value })} 
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Banner Image</label>
                <input 
                  type="file" 
                  onChange={handleImageChange} 
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Active</label>
                <select 
                  value={editedBanner.active} 
                  onChange={(e) => setEditedBanner({ ...editedBanner, active: e.target.value === 'true' })} 
                  className="w-full p-2 border rounded"
                >
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button 
                  type="button" 
                  onClick={() => setShowEditModal(false)} 
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-primeColor text-white px-4 py-2 rounded hover:bg-opacity-70"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this banner?</p>
            <div className="flex justify-end mt-4">
              <button 
                onClick={() => setShowDeleteModal(false)} 
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete} 
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ManageBanners