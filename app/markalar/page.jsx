'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MarkalarPage() {
  const brands = [
    { name: 'Caterpillar', logo: '/images/brands/caterpillar.png' },
    { name: 'Komatsu', logo: '/images/brands/komatsu.png' },
    { name: 'Volvo', logo: '/images/brands/volvo.png' },
    { name: 'Hitachi', logo: '/images/brands/hitachi.png' },
    { name: 'Hyundai', logo: '/images/brands/hyundai.png' },
    { name: 'Doosan', logo: '/images/brands/doosan.png' },
  ];

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-gray-100 to-white flex flex-col items-center text-center">
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-yellow-600">
          İş Birliği Yaptığımız Markalar
        </h1>

        <p className="text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
          Ekskavatör ve ağır iş makineleri alanında dünyanın önde gelen markalarıyla çalışıyoruz.
          Güvenilirlik, performans ve kaliteyi bir araya getirerek her projenizde en iyi sonuçları sunmayı hedefliyoruz.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center justify-center">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-4 bg-white shadow-md hover:shadow-xl p-6 rounded-2xl transition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-40 h-20">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
              <p className="text-lg font-semibold text-gray-800">{brand.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
