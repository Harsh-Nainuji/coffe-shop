// frontend/src/pages/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import api from '../utils/api';

export default function ProductDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const [product, setProduct] = useState(null);
  const [form, setForm] = useState({ customerName: '', address: '', phone: '', paymentMode: 'cod' });
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => { api.get('/products').then(res => setProduct(res.data.find(p => p._id === id))); }, [id]);
  useEffect(() => { if (orderPlaced) { const t = setTimeout(() => nav('/'), 3000); return () => clearTimeout(t); } }, [orderPlaced, nav]);

  const handleBuy = async () => {
    if (!form.customerName || !form.address || !form.phone) {
      return alert('Please fill all details');
    }
    if (form.paymentMode !== 'cod') return alert('Online payment coming soon!');
    await api.post('/orders', { product: id, quantity: 1, customerName: form.customerName, address: `${form.address} | Phone: ${form.phone}` });
    setOrderPlaced(true);
  };

  if (!product) return <div className="p-8 text-center">Loading...</div>;

  if (orderPlaced) {
    return (
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="max-w-md p-8 mx-auto text-center rounded-lg bg-coffee-light shadow-soft-lg">
        <h2 className="mb-4 text-2xl font-bold text-coffee-dark">Thank you for your purchase!</h2>
        <p className="mb-6 text-gray-700">You’ll be redirected to the home page shortly.</p>
        <button onClick={() => nav('/')} className="px-4 py-2 font-medium text-white transition rounded-lg bg-coffee-default hover:bg-coffee-dark">Go to Home Now</button>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="max-w-md p-4 mx-auto bg-white rounded-2xl shadow-soft-md">
      <img src={`http://localhost:5000${product.imageUrl}`} alt={product.name} className="object-cover w-full h-64 mb-4 rounded-lg shadow" />
      <h2 className="mb-2 text-2xl font-bold text-coffee-dark">{product.name}</h2>
      <p className="mb-2 text-lg font-semibold">₹{product.price}</p>
      <p className="mb-4 text-gray-700">{product.longDesc}</p>

      {/* Customer Info */}
      {['customerName','address','phone'].map((f,i)=>(
        <input key={i} name={f} type={f==='phone'?'tel':'text'} placeholder={f.replace(/([A-Z])/g,' $1')} className="w-full p-2 mb-3 border rounded" value={form[f]} onChange={e => setForm({...form,[f]: e.target.value})} required />
      ))}

      {/* Payment Mode */}
      <div className="flex gap-4 mb-4">
        <button type="button" onClick={() => setForm({...form,paymentMode:'cod'})} className={`flex-1 p-2 rounded border ${form.paymentMode==='cod'?'bg-green-500 text-white':'bg-white text-gray-700'}`}>Cash on Delivery</button>
        <button type="button" disabled className="flex-1 p-2 text-gray-500 bg-gray-200 border rounded cursor-not-allowed">Online Payment (Coming Soon)</button>
      </div>

      <button onClick={handleBuy} className="w-full px-4 py-2 text-white transition rounded-lg bg-coffee-dark hover:bg-coffee-accent">Proceed to Buy</button>
    </motion.div>
  );
}