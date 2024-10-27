import React from 'react'
import Sidenav from '../../components/Admin/Sidenav'
import { FaUsers, FaBoxes, FaShoppingCart, FaExclamationTriangle } from 'react-icons/fa'

const Dashboard = () => {
  // Dummy data for demonstration
  const dashboardData = {
    totalUsers: 1250,
    totalProducts: 450,
    totalOrders: 789,
    outOfStockProducts: 23
  }

  const DashboardCard = ({ icon, title, count, color }) => (
    <div className={`bg-white p-6 rounded-lg shadow-md ${color}`}>
      <div className="flex items-center">
        <div className="p-3 rounded-full bg-opacity-30 mr-4">
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-semibold">{count}</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex">
      <Sidenav />
      <div className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold mb-6 pb-5 border-b text-center text-primeColor">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard 
            icon={<FaUsers className="text-blue-500 text-3xl" />}
            title="Total Users"
            count={dashboardData.totalUsers}
            color="text-blue-500 border border-gray-200"
          />
          <DashboardCard 
            icon={<FaBoxes className="text-green-500 text-3xl" />}
            title="Total Products"
            count={dashboardData.totalProducts}
            color="text-green-500 border border-gray-200"
          />
          <DashboardCard 
            icon={<FaShoppingCart className="text-yellow-500 text-3xl" />}
            title="Total Orders"
            count={dashboardData.totalOrders}
            color="text-yellow-500 border border-gray-200"
          />
          <DashboardCard 
            icon={<FaExclamationTriangle className="text-red-500 text-3xl" />}
            title="Out of Stock Products"
            count={dashboardData.outOfStockProducts}
            color="text-red-500 border border-gray-200"
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard