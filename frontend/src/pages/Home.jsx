// frontend/src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="container px-4 mx-auto font-sans">
      {/* Hero with Wave Overlay */}
      <div className="relative mb-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-96 md:h-[500px] bg-center bg-cover flex flex-col items-center justify-center coffee-gradient text-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        >
          <h1 className="text-5xl font-extrabold text-white md:text-7xl drop-shadow-lg">
            Sip. Savor. Smile.
          </h1>
          <p className="max-w-lg mt-4 text-xl text-white/90">
            Your daily buzz, elevated with artisanal blends crafted just for you.
          </p>
          <button className="px-6 py-3 mt-6 font-semibold transition-all duration-300 rounded-full text-amber-400 bg-accent shadow-soft-lg hover:shadow-soft-xl hover:scale-105">
            Explore Our Menu
          </button>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* About Section */}
      <section className="mb-16 text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-4xl font-bold text-coffee-dark"
        >
          About Our Coffee Shop
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg text-gray-700"
        >
          Welcome to our cozy corner where every cup is brewed with love,
          passion, and the finest beans from around the world. Our mission is to
          deliver an unforgettable coffee experience every time.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-xl mx-auto mt-4 italic text-gray-600 text-md"
        >
          Discover our artisanal blends, seasonal specials, and barista-curated
          tastings.
        </motion.p>
      </section>

      {/* Featurette Section */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
  className="flex flex-col items-center p-6 mb-16 row featurette md:flex-row bg-coffee-light rounded-2xl shadow-soft-md"
>
  <div className="p-4 col-md-7 md:w-7/12">
    <h2 className="text-3xl font-bold featurette-heading fw-normal lh-1 text-coffee-dark">
      Experience the Coffee Revolution. <span className="text-gray-500">Unleash Flavor.</span>
    </h2>
    <p className="mt-4 text-lg text-gray-700 lead">
      Step into our café and discover exclusive single-origin brews,
      chef-crafted pastries, and barista secrets perfected over years.
      From morning pick-me-ups to evening rendezvous, we’re here daily
      from <strong>8 AM – 8 PM</strong> to fuel your passion. Come sip,
      savor, and stay inspired—your new favorite cup awaits!
    </p>
  </div>
  <div className="p-4 col-md-5 md:w-5/12">
    <img
      src="/featurette-placeholder.jpg"
      alt="Showcase of gourmet coffee and artisanal pastries inviting a visit"
      className="mx-auto rounded-lg featurette-image img-fluid shadow-soft-md"
      style={{ width: '100%', height: 'auto' }}
    />
  </div>
</motion.div>


      {/* Why Choose Us with Staggered Cards */}
      <section className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3">
        {['Quality Beans', 'Cozy Ambiance', 'Fast Delivery'].map((text, i) => (
          <motion.div
            key={text}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            className="relative group p-8 text-white transition-transform transform shadow-lg bg-coffee-dark rounded-2xl hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(213,163,115,0.6)] hover:ring-2 hover:ring-accent overflow-hidden"
          >
            <div className="absolute inset-0 transition-opacity duration-300 bg-opacity-0 bg-fuchsia-800 group-hover:bg-opacity-30 rounded-2xl" />
            <h3 className="relative mb-3 text-2xl font-semibold">{text}</h3>
            <p className="relative">
              Elevating your coffee experience with unmatched taste and service.
            </p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
