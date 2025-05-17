// admin/src/pages/ManageOrders.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import adminApi from '../services/adminApi';
import OrderList from '../components/OrderList';

export default function ManageOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await adminApi.get('/orders');
        setOrders(res.data.map(o => ({ ...o, _deployed: false })));
      } catch {
        setError('Failed to load orders');
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  const handleDeploy = id => {
    setOrders(orders.map(o => o._id === id ? { ...o, _deployed: true } : o));
  };
  const handleDelete = async id => {
    try {
      await adminApi.delete(`/orders/${id}`);
      setOrders(orders.filter(o => o._id !== id));
    } catch {
      alert('Failed to delete order');
    }
  };

  if (loading) return <p className="text-coffee-dark">Loading orders...</p>;
  if (error)   return <p className="text-red-500">{error}</p>;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="p-6"
    >
      <h2 className="mb-4 text-2xl font-semibold text-coffee-dark">Manage Orders</h2>
      <OrderList
        orders={orders}
        onDeploy={handleDeploy}
        onDelete={handleDelete}
      />
    </motion.div>
  );
}
