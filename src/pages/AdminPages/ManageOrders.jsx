import React, { useState } from 'react'
import Sidenav from '../../components/Admin/Sidenav'
import { FaEye, FaTimes } from 'react-icons/fa'

const ManageOrders = () => {
  // Dummy order data
  const [orders, setOrders] = useState([
    { id: 1, productName: 'Smartphone X', price: 599.99, quantity: 2, userName: 'John Doe', address: '123 Main St, City, Country', phone: '123-456-7890', status: 'order pending' },
    { id: 2, productName: 'Laptop Pro', price: 1299.99, quantity: 1, userName: 'Jane Smith', address: '456 Elm St, Town, Country', phone: '987-654-3210', status: 'order confirmed' },
    { id: 3, productName: 'Wireless Earbuds', price: 79.99, quantity: 3, userName: 'Bob Johnson', address: '789 Oak St, Village, Country', phone: '555-555-5555', status: 'order shipped' },
  ])

  const statusOptions = ['order pending', 'order confirmed', 'order shipped', 'order delivered']

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
  }

  return (
    <div className="flex">
      <Sidenav />
      <div className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold mb-4 text-center pb-5 border-b text-primeColor">Orders</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-primeColor bg-opacity-50">
              <tr>
                <th className="py-3 px-4 text-left">Product</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Quantity</th>
                <th className="py-3 px-4 text-left">Total Amount</th>
                <th className="py-3 px-4 text-left">User</th>
                <th className="py-3 px-4 text-left">Address</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-4">{order.productName}</td>
                  <td className="py-3 px-4">${order.price.toFixed(2)}</td>
                  <td className="py-3 px-4">{order.quantity}</td>
                  <td className="py-3 px-4">${(order.price * order.quantity).toFixed(2)}</td>
                  <td className="py-3 px-4">{order.userName}</td>
                  <td className="py-3 px-4">{order.address}</td>
                  <td className="py-3 px-4">{order.phone}</td>
                  <td className="py-3 px-4">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className="border rounded p-1"
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="py-3 px-4">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2">
                      <FaEye className="inline mr-1" />
                      View
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      <FaTimes className="inline mr-1" />
                      Cancel
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

export default ManageOrders