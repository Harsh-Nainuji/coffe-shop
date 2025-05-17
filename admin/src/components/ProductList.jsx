// src/components/ProductList.jsx

import React from 'react';

export default function ProductList({ products, onEdit, onDelete }) {
  return (
    <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map(p => (
        <div key={p._id} className="relative p-4 bg-white rounded-lg shadow">
          {/* Display uploaded image */}
         <img src={`http://localhost:5000${p.imageUrl}`} alt={p.name} />



          <h3 className="font-semibold">{p.name}</h3>
          <p className="text-gray-600">${p.price}</p>

          {/* Stock alerts */}
          {p.stock <= 0 && (
            <span className="badge bg-danger position-absolute" style={{ top: '10px', right: '10px' }}>
              Out of Stock
            </span>
          )}
          {p.stock > 0 && p.stock <= 5 && (
            <span className="badge bg-warning position-absolute" style={{ top: '10px', right: '10px' }}>
              Only {p.stock} left
            </span>
          )}

          {/* Actions */}
          <div className="flex gap-2 mt-2">
            <button onClick={() => onEdit(p)} className="btn btn-sm btn-outline-primary">
              Edit
            </button>
            <button onClick={() => onDelete(p._id)} className="btn btn-sm btn-outline-danger">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
