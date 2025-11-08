'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TesekkurlerPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-6">
          Teşekkürler!
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-10">
          Mesajınız bize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.
        </p>
        <Link
          href="/"
          className="bg-yellow-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-yellow-700 transition"
        >
          Ana Sayfaya Dön
        </Link>
      </motion.div>
    </div>
  );
}
