// frontend/src/pages/Menu.jsx
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import api from '../utils/api';
import ProductCard from '../components/ProductCard';

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const contRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    api.get('/products').then(res => {
      setProducts(res.data);
      setCurrentIndex(Math.floor(res.data.length / 2));
    });
  }, []);

  useEffect(() => {
    const el = cardsRef.current[currentIndex];
    if (el && contRef.current) {
      contRef.current.scrollTo({
        left: el.offsetLeft - contRef.current.offsetWidth / 2 + el.offsetWidth / 2,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <div className="container px-4 py-8 mx-auto space-y-8 font-sans">
      {/* Promotional Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative p-6 m-4 overflow-hidden text-center md:p-10 bg-coffee-light rounded-2xl shadow-soft-lg"
      >
        <div className="max-w-lg mx-auto space-y-4">
          <h1 className="text-4xl font-bold text-coffee-dark">
            Discover More In-Store
          </h1>
          <p className="text-lg text-gray-700">
            From seasonal lattes to hand-crafted pastries, our cozy café offers
            exclusive blends you won’t find anywhere else. Stop by between
            <strong> 8 AM – 8 PM </strong> daily to explore our full selection.
          </p>
          <div className="flex justify-center gap-4">
      
            <h3
              href="#walk-in"
              className="inline-flex items-center px-4 py-2 text-white transition rounded-full bg-coffee-dark hover:bg-coffee-accent"
            >
              Walk In Now 
            
            </h3>
          </div>
        </div>
        {/* Placeholder for promo image */}
        <img
          src="/promo-placeholder.jpg"
          alt="Promo: showcase of specialty coffee and pastries"
          className="absolute object-cover w-32 h-32 rounded-lg shadow-md opacity-50 right-4 top-4"
        />
      </motion.div>

      {/* Product Carousel */}
      <div className="relative">
        <button
          onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
          className="absolute left-0 z-30 p-2 transition transform -translate-y-1/2 rounded-full shadow-md top-1/2 bg-coffee-accent hover:scale-110"
        >
          ‹
        </button>

        <div
          ref={contRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((p, i) => (
            <motion.div
              key={p._id}
              ref={el => (cardsRef.current[i] = el)}
              initial={{ scale: 0.9, opacity: 0.5 }}
              animate={{
                scale: i === currentIndex ? 1.1 : 0.9,
                opacity: i === currentIndex ? 1 : 0.5,
              }}
              transition={{ duration: 0.3 }}
              className="min-w-[180px]"
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => setCurrentIndex(i => Math.min(products.length - 1, i + 1))}
          className="absolute right-0 z-30 p-2 transition transform -translate-y-1/2 rounded-full shadow-md top-1/2 bg-coffee-accent hover:scale-110"
        >
          ›
        </button>
      </div>
    </div>
  );
}
