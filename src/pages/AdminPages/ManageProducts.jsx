import React, { useState } from 'react'
import Sidenav from '../../components/Admin/Sidenav'
import { FaEdit, FaTrash } from 'react-icons/fa'

const ManageProducts = () => {
  // Dummy product data
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 19.99, description: 'This is a detailed description of Product 1. It can be quite long and may need to be scrolled to view the entire content.', quantity: 100, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 29.99, description: 'Product 2 description goes here. Its also a long text that might require scrolling to read completely.', quantity: 50, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 39.99, description: 'Heres the description for Product 3. As with the others, its lengthy enough to potentially need scrolling.', quantity: 75, image: 'https://via.placeholder.com/150' },
  ])

  const [showEditModal, setShowEditModal] = useState(false)
  const [showUnlistModal, setShowUnlistModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [editedProduct, setEditedProduct] = useState(null)

  const handleEdit = (product) => {
    setSelectedProduct(product)
    setEditedProduct({...product})
    setShowEditModal(true)
  }

  const handleUnlist = (product) => {
    setSelectedProduct(product)
    setShowUnlistModal(true)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setEditedProduct({...editedProduct, image: imageUrl})
    }
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()
    setProducts(products.map(p => 
      p.id === editedProduct.id ? editedProduct : p
    ))
    setShowEditModal(false)
  }

  const confirmUnlist = () => {
    // Add unlist logic here
    console.log(`Unlisting product: ${selectedProduct.name}`)
    setShowUnlistModal(false)
  }

  return (
    <div className="flex">
      <Sidenav />
      <div className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold mb-4 text-center pb-5 border-b text-primeColor">Products</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-primeColor bg-opacity-50">
              <tr>
                <th className="py-3 px-4 text-left">Image</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Description</th>
                <th className="py-3 px-4 text-left">Quantity</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-4">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
                  </td>
                  <td className="py-3 px-4">{product.name}</td>
                  <td className="py-3 px-4">${product.price.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <div className="max-w-xs overflow-hidden overflow-ellipsis whitespace-nowrap" title={product.description}>
                      {product.description}
                    </div>
                  </td>
                  <td className="py-3 px-4">{product.quantity}</td>
                  <td className="py-3 px-4">
                    <button 
                      onClick={() => handleEdit(product)}
                      className="bg-primeColor text-white px-3 py-1 rounded hover:bg-opacity-70 mr-2"
                    >
                      <FaEdit className="inline mr-1" />
                      Edit
                    </button>
                    <button 
                      onClick={() => handleUnlist(product)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      <FaTrash className="inline mr-1" />
                      Unlist
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit Modal */}
        {showEditModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">Edit Product</h2>
              <form onSubmit={handleEditSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Image</label>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={editedProduct.image} 
                      alt={editedProduct.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    value={editedProduct.name}
                    onChange={(e) => setEditedProduct({...editedProduct, name: e.target.value})}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Price</label>
                  <input
                    type="number"
                    step="0.01"
                    value={editedProduct.price}
                    onChange={(e) => setEditedProduct({...editedProduct, price: parseFloat(e.target.value)})}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    value={editedProduct.description}
                    onChange={(e) => setEditedProduct({...editedProduct, description: e.target.value})}
                    className="w-full border rounded p-2"
                    rows="3"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Quantity</label>
                  <input
                    type="number"
                    value={editedProduct.quantity}
                    onChange={(e) => setEditedProduct({...editedProduct, quantity: parseInt(e.target.value)})}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowEditModal(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-primeColor text-white px-4 py-2 rounded hover:bg-opacity-70"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Unlist Confirmation Modal */}
        {showUnlistModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Confirm Unlist</h2>
              <p>Are you sure you want to unlist {selectedProduct.name}?</p>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setShowUnlistModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmUnlist}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ManageProducts