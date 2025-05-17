// admin/src/components/OrderList.jsx

import React from 'react';

export default function OrderList({ orders = [], onDeploy, onDelete }) {
  if (!orders || orders.length === 0) {
    return <p className="text-gray-600">No orders yet.</p>;
  }

  return (
    <div className="space-y-4">
      {orders.map(o => {
        const [addrPart = '', phonePart = ''] = o.address
          ? o.address.split('| Phone:').map(s => s.trim())
          : [];
        return (
          <div
            key={o._id}
            className="flex flex-col items-start justify-between p-4 bg-white rounded-lg shadow md:flex-row md:items-center"
          >
            <div className="flex-grow">
              <h4 className="mb-1 font-semibold">
                {o.product?.name || 'Unknown'} x{o.quantity}
              </h4>
              <p className="text-gray-700"><strong>Name:</strong> {o.customerName}</p>
              <p className="text-gray-700"><strong>Address:</strong> {addrPart}</p>
              <p className="text-gray-700"><strong>Phone:</strong> {phonePart}</p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <button
                onClick={() => onDeploy(o._id)}
                className={`px-3 py-1 rounded ${o._deployed ? 'bg-green-500 text-white' : 'bg-yellow-400 text-black'}`}
              >
                {o._deployed ? 'Deployed' : 'Pending'}
              </button>
              <button
                onClick={() => onDelete(o._id)}
                className="px-3 py-1 text-white bg-red-500 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
} 