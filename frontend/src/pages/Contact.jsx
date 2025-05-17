// frontend/src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container grid grid-cols-1 gap-8 px-4 py-8 mx-auto font-sans md:grid-cols-2"
    >
      <div className="space-y-4">
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-coffee-dark"
        >
          Find Us
        </motion.h2>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full h-64 overflow-hidden rounded-2xl shadow-soft-md"
        >
          <img
            src="/map.jpg"
            alt="Map showing our cozy coffee shop location"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      <motion.form
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="p-6 space-y-4 bg-coffee-light rounded-2xl shadow-soft-md"
      >
        <h2 className="text-2xl font-semibold text-coffee-dark">Contact Us</h2>
        {['name', 'email'].map((f, i) => (
          <input
            key={i}
            name={f}
            type={f === 'email' ? 'email' : 'text'}
            placeholder={f.charAt(0).toUpperCase() + f.slice(1)}
            className="w-full p-2 border rounded-lg focus:ring-accent focus:border-accent"
            required
          />
        ))}
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          className="w-full p-2 border rounded-lg focus:ring-accent focus:border-accent"
          required
        />
        <button
          type="submit"
          className="w-full py-2 text-white transition rounded-full bg-coffee-dark hover:bg-coffee-accent"
        >
          Send Message
        </button>
      </motion.form>
    </motion.div>
  );
}
