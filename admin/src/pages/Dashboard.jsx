// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import adminApi from '../services/adminApi';

export default function Dashboard() {
  const [counts, setCounts] = useState({ products: 0, orders: 0 });

  useEffect(() => {
    (async () => {
      const [prods, ords] = await Promise.all([
        adminApi.get('/products'),
        adminApi.get('/orders'),
      ]);
      setCounts({ products: prods.data.length, orders: ords.data.length });
    })();
  }, []);

  const stats = [
    { label: 'Products', value: counts.products, icon: '☕' },
    { label: 'Orders', value: counts.orders, icon: '🛒' },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {stats.map(({ label, value, icon }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 transition-all duration-300 transform bg-white rounded-2xl shadow-soft-md hover:shadow-soft-lg hover:-translate-y-1 coffee-gradient"
        >
          <div className="flex items-center space-x-4">
            <div className="text-3xl">{icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-coffee-dark">Total {label}</h3>
              <p className="text-4xl font-bold text-coffee-dark">{value}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}