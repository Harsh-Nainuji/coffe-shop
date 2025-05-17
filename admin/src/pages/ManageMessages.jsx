// admin/src/pages/ManageMessages.jsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import adminApi from '../services/adminApi';
import MessageList from '../components/MessageList';

export default function ManageMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await adminApi.get('/contact');
        setMessages(res.data);
      } catch {
        setError('Failed to load messages');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleDeleteMessage = async id => {
    try {
      await adminApi.delete(`/contact/${id}`);
      setMessages(prev => prev.filter(m => m._id !== id));
    } catch {
      alert('Failed to delete message');
    }
  };

  if (loading) return <p className="text-coffee-dark">Loading messages...</p>;
  if (error)   return <p className="text-red-500">{error}</p>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="p-6"
    >
      <h2 className="mb-4 text-2xl font-semibold text-coffee-dark">Manage Messages</h2>
      <MessageList
        messages={messages}
        onDelete={handleDeleteMessage}
      />
    </motion.div>
  );
}