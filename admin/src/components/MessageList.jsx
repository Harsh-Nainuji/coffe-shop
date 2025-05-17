// admin/src/components/MessageList.jsx

import React from 'react';

export default function MessageList({ messages = [], onDelete }) {
  if (!messages.length) return <p className="text-gray-600">No messages yet.</p>;

  return (
    <div className="space-y-4">
      {messages.map(m => (
        <div key={m._id} className="flex items-start justify-between p-4 bg-white rounded shadow">
          <div>
            <h4 className="font-semibold">{m.name} &lt;{m.email}&gt;</h4>
            <p className="mb-2 text-sm text-gray-600">{new Date(m.createdAt).toLocaleString()}</p>
            <p>{m.message}</p>
          </div>
          <button onClick={() => onDelete(m._id)} className="btn btn-sm btn-outline-danger">Delete</button>
        </div>
      ))}
    </div>
  );
}
