// frontend/src/components/ProductCard.jsx
import React from 'react';

export default function ProductCard({ product }) {
  const imgUrl =
    product.imageUrl?.startsWith('http')
      ? product.imageUrl
      : `http://localhost:5000${product.imageUrl.startsWith('/') ? '' : '/'}${product.imageUrl}`;

  return (
    <div
      className="mx-2 overflow-hidden transition border rounded-lg shadow-lg bg-coffee-light border-coffee DEFAULT hover:shadow-soft-lg"
      style={{ minWidth: '200px' }}
    >
      {/* Fixed-height container with object-cover to crop any image */}
      <div className="w-full h-40 overflow-hidden">
        <img
          src={imgUrl}
          alt={product.name}
          className="object-cover w-full h-full"
          onError={e => { e.target.onerror = null; e.target.src = '/placeholder.jpg'; }}
        />
      </div>

      <div className="p-4 text-center">
        <h5 className="mb-2 text-lg font-semibold text-coffee-dark">{product.name}</h5>
        <p className="text-coffee-dark">${product.price}</p>
        <p className="mb-4 text-sm text-gray-600">{product.shortDesc}</p>
        <button
          onClick={() => (window.location.href = `/product/${product._id}`)}
          className="w-full py-2 font-medium text-white transition rounded-full bg-coffee-dark hover:bg-coffee-accent"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}