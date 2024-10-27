import React from 'react'
import Sidenav from '../../components/Admin/Sidenav'
const ManageBanners = () => {
  return (
    <div className="flex">
    <Sidenav />
    <div className="flex-1 ml-64 p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Manage Banners</h1>
      {/* Add your dashboard content here */}
    </div>
  </div>
  )
}

export default ManageBanners