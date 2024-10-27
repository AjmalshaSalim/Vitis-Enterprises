import React from 'react'
import Sidenav from '../../components/Admin/Sidenav'
import { FaEdit, FaBan } from 'react-icons/fa'

const ManageUsers = () => {
  // Dummy user data
  const users = [
    { id: 1, name: 'John Doe', phone: '123-456-7890', address: '123 Main St, City, Country' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', address: '456 Elm St, Town, Country' },
    { id: 3, name: 'Bob Johnson', phone: '555-555-5555', address: '789 Oak St, Village, Country' },
  ]

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
                    <button className="bg-primeColor text-white px-3 py-1 rounded hover:bg-opacity-70 mr-2">
                      <FaEdit className="inline mr-1" />
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      <FaBan className="inline mr-1" />
                      Block
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

export default ManageUsers