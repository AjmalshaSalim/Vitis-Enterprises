import React from 'react'
import Sidenav from '../../components/Admin/Sidenav'
import { FaEdit, FaTrash } from 'react-icons/fa'

const ManageProducts = () => {
  // Dummy product data
  const products = [
    { id: 1, name: 'Product 1', price: 19.99, description: 'This is a detailed description of Product 1. It can be quite long and may need to be scrolled to view the entire content.', quantity: 100, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 29.99, description: 'Product 2 description goes here. Its also a long text that might require scrolling to read completely.', quantity: 50, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 39.99, description: 'Heres the description for Product 3. As with the others, its lengthy enough to potentially need scrolling.', quantity: 75, image: 'https://via.placeholder.com/150' },
  ]

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
                    <button className="bg-primeColor text-white px-3 py-1 rounded hover:bg-opacity-70 mr-2">
                      <FaEdit className="inline mr-1" />
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      <FaTrash className="inline mr-1" />
                      Unlist
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ManageProducts