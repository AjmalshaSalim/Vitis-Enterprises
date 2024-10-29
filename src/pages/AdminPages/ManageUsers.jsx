import React, { useState } from 'react'
import Sidenav from '../../components/Admin/Sidenav'
import { FaBan } from 'react-icons/fa'

const ManageUsers = () => {
  // Dummy user data
  const users = [
    { id: 1, name: 'John Doe', phone: '123-456-7890', address: '123 Main St, City, Country' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', address: '456 Elm St, Town, Country' },
    { id: 3, name: 'Bob Johnson', phone: '555-555-5555', address: '789 Oak St, Village, Country' },
  ]

  const [showConfirmation, setShowConfirmation] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const handleBlock = (user) => {
    setSelectedUser(user)
    setShowConfirmation(true)
  }

  const confirmBlock = () => {
    // Add block user logic here
    console.log(`Blocking user: ${selectedUser.name}`)
    setShowConfirmation(false)
    setSelectedUser(null)
  }

  return (
    <div className="flex">
      <Sidenav />
      <div className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold mb-4 text-center pb-5 border-b text-primeColor">Users</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-primeColor bg-opacity-50">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Address</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.phone}</td>
                  <td className="py-3 px-4">{user.address}</td>
                  <td className="py-3 px-4">
                    <button 
                      onClick={() => handleBlock(user)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      <FaBan className="inline mr-1" />
                      Block
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Confirm Block</h2>
              <p>Are you sure you want to block {selectedUser.name}?</p>
              <div className="mt-4 flex justify-end space-x-3">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmBlock}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
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

export default ManageUsers