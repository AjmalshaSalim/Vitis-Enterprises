import React, { useState } from 'react'
import Sidenav from '../../components/Admin/Sidenav'
import { FaEye, FaTimes, FaDownload } from 'react-icons/fa'
import * as XLSX from 'xlsx'

const ManageOrders = () => {
  // Dummy order data
  const [orders, setOrders] = useState([
    { id: 1, productName: 'Smartphone X', price: 599.99, quantity: 2, userName: 'John Doe', address: '123 Main St, City, Country', phone: '123-456-7890', status: 'order pending', orderDate: '2024-01-15' },
    { id: 2, productName: 'Laptop Pro', price: 1299.99, quantity: 1, userName: 'Jane Smith', address: '456 Elm St, Town, Country', phone: '987-654-3210', status: 'order confirmed', orderDate: '2024-01-14' },
    { id: 3, productName: 'Wireless Earbuds', price: 79.99, quantity: 3, userName: 'Bob Johnson', address: '789 Oak St, Village, Country', phone: '555-555-5555', status: 'order shipped', orderDate: '2024-01-13' },
  ])

  const statusOptions = ['all', 'order pending', 'order confirmed', 'order shipped', 'order delivered']
  const [showViewModal, setShowViewModal] = useState(false)
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [dateFilter, setDateFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredOrders = orders.filter(order => {
    const matchesDate = dateFilter ? order.orderDate === dateFilter : true
    const matchesStatus = statusFilter === 'all' ? true : order.status === statusFilter
    return matchesDate && matchesStatus
  })

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
  }

  const handleView = (order) => {
    setSelectedOrder(order)
    setShowViewModal(true)
  }

  const handleCancel = (order) => {
    setSelectedOrder(order)
    setShowCancelModal(true)
  }

  const confirmCancel = () => {
    // Add cancel order logic here
    console.log(`Cancelling order: ${selectedOrder.id}`)
    setShowCancelModal(false)
    setSelectedOrder(null)
  }

  const downloadExcel = () => {
    // Prepare data for excel using filtered orders
    const excelData = filteredOrders.map(order => ({
      'Order ID': order.id,
      'Product Name': order.productName,
      'Price': order.price,
      'Quantity': order.quantity,
      'Total Amount': order.price * order.quantity,
      'Customer Name': order.userName,
      'Phone': order.phone,
      'Address': order.address,
      'Order Date': order.orderDate,
      'Status': order.status
    }))

    // Create workbook and worksheet
    const workbook = XLSX.utils.book_new()
    const worksheet = XLSX.utils.json_to_sheet(excelData)

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Orders')

    // Generate excel file and trigger download
    XLSX.writeFile(workbook, 'orders.xlsx')
  }

  return (
    <div className="flex">
      <Sidenav />
      <div className="flex-1 ml-64 p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-primeColor">Orders</h1>
          <div className="flex items-center gap-4">
            <div>
              <input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="border rounded p-2"
              />
            </div>
            <div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border rounded p-2"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status === 'all' ? 'All Status' : status}
                  </option>
                ))}
              </select>
            </div>
            <button 
              onClick={downloadExcel}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
            >
              <FaDownload className="mr-2" />
              Download Excel
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-primeColor bg-opacity-50">
              <tr>
                <th className="py-3 px-4 text-left">Product</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Quantity</th>
                <th className="py-3 px-4 text-left">Total Amount</th>
                <th className="py-3 px-4 text-left">User</th>
                <th className="py-3 px-4 text-left">Order Date</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-4">{order.productName}</td>
                  <td className="py-3 px-4">${order.price.toFixed(2)}</td>
                  <td className="py-3 px-4">{order.quantity}</td>
                  <td className="py-3 px-4">${(order.price * order.quantity).toFixed(2)}</td>
                  <td className="py-3 px-4">{order.userName}</td>
                  <td className="py-3 px-4">{order.orderDate}</td>
                  <td className="py-3 px-4">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className="border rounded p-1"
                    >
                      {statusOptions.slice(1).map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="py-3 px-4">
                    <button 
                      onClick={() => handleView(order)}
                      className="bg-primeColor text-white px-3 py-1 rounded hover:bg-opacity-80 mr-2"
                    >
                      <FaEye className="inline mr-1" />
                      View
                    </button>
                    <button 
                      onClick={() => handleCancel(order)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      <FaTimes className="inline mr-1" />
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* View Order Modal */}
        {showViewModal && selectedOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
              <h2 className="text-xl font-bold mb-4">Order Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Order ID:</p>
                  <p className="mb-2">{selectedOrder.id}</p>
                  
                  <p className="font-semibold">Product:</p>
                  <p className="mb-2">{selectedOrder.productName}</p>
                  
                  <p className="font-semibold">Price:</p>
                  <p className="mb-2">${selectedOrder.price.toFixed(2)}</p>
                  
                  <p className="font-semibold">Quantity:</p>
                  <p className="mb-2">{selectedOrder.quantity}</p>
                  
                  <p className="font-semibold">Total Amount:</p>
                  <p className="mb-2">${(selectedOrder.price * selectedOrder.quantity).toFixed(2)}</p>
                </div>
                <div>
                  <p className="font-semibold">Customer Name:</p>
                  <p className="mb-2">{selectedOrder.userName}</p>
                  
                  <p className="font-semibold">Phone:</p>
                  <p className="mb-2">{selectedOrder.phone}</p>
                  
                  <p className="font-semibold">Address:</p>
                  <p className="mb-2">{selectedOrder.address}</p>
                  
                  <p className="font-semibold">Order Date:</p>
                  <p className="mb-2">{selectedOrder.orderDate}</p>
                  
                  <p className="font-semibold">Status:</p>
                  <p>{selectedOrder.status}</p>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setShowViewModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Cancel Confirmation Modal */}
        {showCancelModal && selectedOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Confirm Cancellation</h2>
              <p>Are you sure you want to cancel this order?</p>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setShowCancelModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  No
                </button>
                <button
                  onClick={confirmCancel}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Yes, Cancel Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ManageOrders