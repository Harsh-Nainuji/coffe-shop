// frontend/src/pages/Cart.jsx

import React, { useEffect, useState } from 'react';
import api from '../utils/api';

export default function Cart() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/orders')
      .then(res => setOrders(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const cancel = async id => {
    await api.delete(`/orders/${id}`);
    setOrders(o => o.filter(x => x._id !== id));
  };

  const subTotal = orders.reduce(
    (sum, o) => sum + (o.product?.price || 0) * o.quantity,
    0
  );
  const gst = subTotal * 0.18;
  const grandTotal = subTotal + gst;

  if (loading) return <p className="text-center text-gray-600 animate-fadeIn">Loading...</p>;
  if (!orders.length) return <p className="text-center text-gray-600 animate-fadeIn">Your cart is empty.</p>;

  return (
    <div className="container px-4 mx-auto font-sans">
      <h2 className="mb-6 text-3xl font-bold text-primary animate-fadeIn">Your Cart</h2>
      <div className="mb-8 space-y-4">
        {orders.map(o => {
          const { _id, product, quantity } = o;
          const price = product?.price || 0;
          const lineTotal = (price * quantity).toFixed(2);

          return (
            <div
              key={_id}
              className="flex items-center p-4 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-2xl animate-pop"
            >
              <img
                src={`http://localhost:5000${product.imageUrl}`}
                alt={product.name}
                className="object-cover w-16 h-16 mr-4 rounded-lg"
              />
              <div className="flex-grow">
                <h4 className="text-xl font-semibold">{product.name}</h4>
                <p className="text-gray-600">
                  ₹{price.toFixed(2)} × {quantity} = ₹{lineTotal}
                </p>
              </div>
              <button
                onClick={() => cancel(_id)}
                className="px-3 py-1 ml-4 text-white transition-opacity rounded-lg bg-accent hover:opacity-90"
              >
                Cancel
              </button>
            </div>
          );
        })}
      </div>

      <div className="max-w-md p-6 ml-auto bg-white shadow-lg rounded-2xl animate-fadeIn">
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Subtotal:</span>
          <span className="font-semibold">₹{subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">GST (18%):</span>
          <span className="font-semibold">₹{gst.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-primary">
          <span>Total:</span>
          <span>₹{grandTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
