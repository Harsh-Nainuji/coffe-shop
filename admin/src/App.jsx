// admin/src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ManageProducts from './pages/ManageProducts';
import ManageOrders from './pages/ManageOrders';
import ManageMessages from './pages/ManageMessages';  // <-- only if you created it

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow min-h-screen p-6 bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ManageProducts />} />
            <Route path="/orders" element={<ManageOrders />} />
            <Route path="/messages" element={<ManageMessages />} /> 
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
