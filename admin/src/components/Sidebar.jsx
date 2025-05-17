// admin/src/components/Sidebar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const links = [
    { to: '/', label: 'Dashboard' },
    { to: '/products', label: 'Products' },
    { to: '/orders', label: 'Orders' },
    { to: '/messages', label: 'Messages' },
  ];

  return (
    <aside className="flex flex-col justify-between w-64 h-screen p-6 bg-coffee-light">
      <div>
        <h1 className="mb-8 text-3xl font-bold text-coffee-dark">☕ Coffee Admin</h1>
        <nav className="space-y-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `block px-4 py-2 rounded-xl font-medium transition-colors ${
                  isActive
                    ? 'bg-coffee-dark text-white'
                    : 'text-coffee-dark hover:bg-coffee-dark/20'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="text-sm text-gray-500">v1.0.0</div>
    </aside>
  );
}