import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUsers, FaBoxes, FaShoppingCart, FaImages } from 'react-icons/fa';

const Sidenav = () => {
  const location = useLocation();
  const navItems = [
    { path: '/admin', icon: <FaHome />, label: 'Dashboard' },
    { path: '/manage-users', icon: <FaUsers />, label: 'Manage Users' },
    { path: '/manage-products', icon: <FaBoxes />, label: 'Manage Products' },
    { path: '/manage-orders', icon: <FaShoppingCart />, label: 'Manage Orders' },
    { path: '/manage-banners', icon: <FaImages />, label: 'Manage Banners' },
  ];

  return (
    <nav className="bg-primeColor text-white h-screen w-64 fixed left-0 top-0 overflow-y-auto">
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-5">Admin Dashboard</h2>
        <ul>
          {navItems.map((item, index) => (
            <li key={index} className="mb-4">
              <Link
                to={item.path}
                className={`flex items-center p-2 rounded transition-colors duration-200 border border-primeColor ${
                  location.pathname === item.path ? 'bg-white text-primeColor' : 'hover:border-white'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidenav;