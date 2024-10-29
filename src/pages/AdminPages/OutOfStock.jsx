import React, { useState } from 'react'
import Sidenav from '../../components/Admin/Sidenav'
import { FaDownload } from 'react-icons/fa'
import * as XLSX from 'xlsx'

const OutOfStock = () => {
  const [products, setProducts] = useState([
    { id: 1, image: 'https://via.placeholder.com/150', name: 'Product 1', price: 29.99, description: 'Description for product 1', quantity: 0 },
    { id: 2, image: 'https://via.placeholder.com/150', name: 'Product 2', price: 49.99, description: 'Description for product 2', quantity: 0 },
    { id: 3, image: 'https://via.placeholder.com/150', name: 'Product 3', price: 19.99, description: 'Description for product 3', quantity: 0 },
  ])
  const [showModal, setShowModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [newStock, setNewStock] = useState('')

  const handleEnterStock = (product) => {
    setSelectedProduct(product)
    setShowModal(true)
  }

  const handleSubmitStock = () => {
    setProducts(products.filter(product => 
      product.id !== selectedProduct.id || (product.id === selectedProduct.id && newStock <= 0)
    ).map(product => 
      product.id === selectedProduct.id ? { ...product, quantity: newStock } : product
    ))
    setShowModal(false)
    setSelectedProduct(null)
    setNewStock('')
  }

  const handleStockChange = (e) => {
    setNewStock(e.target.value)
  }

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(products)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'OutOfStockProducts')
    XLSX.writeFile(workbook, 'OutOfStockProducts.xlsx')
  }

  return (
    <div className="flex">
      <Sidenav />
      <div className="flex-1 ml-64 p-8">
        <div className="flex justify-between items-center mb-6 pb-5 border-b">
          <h1 className="text-3xl font-bold text-center text-primeColor">Out of Stock Products</h1>
          <button 
            onClick={downloadExcel}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
          >
            <FaDownload className="mr-2" />
            Download Excel
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Image</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} className="border-b">
                  <td className="py-2 px-4">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                  </td>
                  <td className="py-2 px-4">{product.name}</td>
                  <td className="py-2 px-4">${product.price.toFixed(2)}</td>
                  <td className="py-2 px-4">{product.description}</td>
                  <td className="py-2 px-4 text-red-500">{product.quantity === 0 ? 'Out of Stock' : product.quantity}</td>
                  <td className="py-2 px-4">
                    <button 
                      onClick={() => handleEnterStock(product)}
                      className="bg-primeColor text-white px-4 py-2 rounded hover:bg-opacity-80"
                    >
                      Enter Stock
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showModal && selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
              <h2 className="text-xl font-bold mb-4">Enter New Stock for {selectedProduct.name}</h2>
              <input 
                type="number" 
                value={newStock} 
                onChange={handleStockChange} 
                className="border p-2 w-full mb-4"
                placeholder="Enter new stock quantity"
              />
              <div className="flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitStock}
                  className="bg-primeColor text-white px-4 py-2 rounded hover:bg-opacity-80"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default OutOfStock