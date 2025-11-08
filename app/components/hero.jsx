'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[70vh] flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
      }}
    >
      {/* Arka plan koyuluğu */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* İçerik */}
      <motion.div
        className="relative z-10 px-6 pt-[80px]" // Navbar sabit olduğu için üstten biraz boşluk
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Profesyonel Ekskavatör Hizmetleri
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Kazı, hafriyat ve kiralama çözümleriyle güvenilir hizmet sunuyoruz.
        </motion.p>

        <motion.a
          href="#services"
          className="bg-yellow-500 text-white font-semibold px-8 py-4 rounded-lg 
                     hover:bg-yellow-400 transition duration-300 shadow-lg hover:shadow-xl inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Hizmetlerimizi İncele
        </motion.a>
      </motion.div>
    </section>
  );
}
