// admin/src/pages/ManageProducts.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import adminApi from '../services/adminApi';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchProducts = async () => {
    const res = await adminApi.get('/products');
    setProducts(res.data);
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleSaved = () => {
    fetchProducts();
    setEditing(null);
  };
  const handleDelete = async id => {
    await adminApi.delete(`/products/${id}`);
    fetchProducts();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-6"
    >
      <h2 className="text-2xl font-semibold text-coffee-dark">Manage Products</h2>
      <ProductForm
        editingProduct={editing}
        onSaved={handleSaved}
        className="p-4 bg-coffee-light rounded-2xl shadow-soft-md"
      />
      <ProductList
        products={products}
        onEdit={setEditing}
        onDelete={handleDelete}
      />
    </motion.div>
  );
}