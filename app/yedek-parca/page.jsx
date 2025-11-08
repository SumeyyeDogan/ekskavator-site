'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function YedekParca() {
  const router = useRouter();
  const [selectedParts, setSelectedParts] = useState([]);

  const parts = [
    { name: 'Motor ve Aksamları', image: '/images/parts/motor.jpg', desc: 'Ekskavatör motorları, piston, supap, krank mili, yağ filtreleri ve turbo sistemleri.' },
    { name: 'Hidrolik Sistem Parçaları', image: '/images/parts/hidrolik.jpg', desc: 'Hidrolik pompalar, valfler, hortumlar, bağlantı elemanları ve silindir çeşitleri.' },
    { name: 'Palet ve Alt Takım', image: '/images/parts/palet.jpg', desc: 'Palet zincirleri, dişliler, makaralar, lastik ve yürüyüş takımı bileşenleri.' },
    { name: 'Elektrik ve Sensör Sistemleri', image: '/images/parts/elektrik.jpg', desc: 'Sensörler, aküler, kablolar, kontaktörler, farlar ve aydınlatma sistemleri.' },
    { name: 'Kabin Donanımları', image: '/images/parts/kabin.jpg', desc: 'Koltuk, joystick, klima, gösterge paneli ve konfor donanım parçaları.' },
    { name: 'Filtre ve Bakım Ürünleri', image: '/images/parts/filtre.jpg', desc: 'Yağ, hava, yakıt ve hidrolik filtreleri ile bakım kitleri ve sarf malzemeleri.' },
  ];

  const toggleSelect = (name) => {
    setSelectedParts((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const handleContact = () => {
    if (selectedParts.length === 0) {
      alert('Lütfen en az bir parça seçin.');
      return;
    }

    const params = new URLSearchParams({ parts: selectedParts.join(',') });
    router.push(`/iletisim?${params.toString()}`);
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Üst Bilgilendirme */}
      <section className="py-10 text-center bg-gradient-to-b from-gray-50 to-white">
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ekskavatör Yedek Parçaları
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed px-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          Ekskavatörleriniz için yüksek performans, uzun ömür ve tam uyumluluk sunan orijinal yedek parçalar.  
          Türkiye genelinde hızlı tedarik garantisi ile hizmet veriyoruz.
        </motion.p>
      </section>

      {/* Parça Seçim Bölümü */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Yedek Parça Kategorileri
          </motion.h2>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {parts.map((part, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden shadow-md border transition-all duration-300 group cursor-pointer ${
                  selectedParts.includes(part.name)
                    ? 'border-yellow-500 shadow-xl'
                    : 'border-gray-100 hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.03 }}
                onClick={() => toggleSelect(part.name)}
              >
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={part.image}
                    alt={part.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {selectedParts.includes(part.name) && (
                    <div className="absolute top-3 right-3 bg-yellow-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                      Seçildi
                    </div>
                  )}
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{part.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{part.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Alt Buton */}
      <section className="py-10 bg-white border-t border-gray-200 text-center">
        {selectedParts.length > 0 && (
          <p className="text-gray-700 mb-3 text-sm md:text-base">
            <strong>{selectedParts.length}</strong> parça seçildi: {selectedParts.join(', ')}
          </p>
        )}
        <button
          onClick={handleContact}
          className="bg-yellow-500 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300 text-sm md:text-base"
        >
          {selectedParts.length > 0
            ? 'Seçilen Parçalarla İletişime Geç'
            : 'Parçaları Seç ve İletişime Geç'}
        </button>
      </section>
    </main>
  );
}
