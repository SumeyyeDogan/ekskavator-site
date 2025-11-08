'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Fleet() {
  const vehicles = [
    {
      name: 'KOMATSU PC200',
      img: '/images/excavator1.jpg',
      desc: 'Orta ölçekli kazı, temel açma ve yükleme işlerinde maksimum verimlilik sunar. Güçlü hidrolik sistemi ile zorlu arazilerde bile yüksek performans sağlar. Şantiyelerde uzun ömürlü ve ekonomik çözümler sunar.',
    },
    {
      name: 'VOLVO EC480DL',
      img: '/images/excavator2.jpg',
      desc: 'Yüksek tonajlı projeler için tasarlanmıştır. Yakıt verimliliği, sağlam yapısı ve çevreci motoru ile uzun süreli kullanımlarda mükemmel performans sağlar. Ağır yük taşımada olağanüstü denge ve güç sağlar.',
    },
    {
      name: 'CAT 320',
      img: '/images/excavator3.jpg',
      desc: 'Şehir içi projelerde çevik ve ekonomik çözüm sunar. Sessiz çalışması ve kompakt yapısı ile dar alanlarda yüksek hassasiyet sağlar. Modern operatör kabiniyle konforlu bir kullanım deneyimi sunar.',
    },
    {
      name: 'HITACHI ZX350LC',
      img: '/images/excavator4.jpg',
      desc: 'Zorlu arazilerde yüksek dayanıklılık ve üstün kontrol sağlar. Gelişmiş sensör teknolojisi ile yakıt tasarrufu ve optimum performans sunar.',
    },
    {
      name: 'CATERPILLAR 336D',
      img: '/images/excavator5.jpg',
      desc: 'Yüksek verimlilik gerektiren büyük ölçekli projeler için idealdir. Geniş kepçesi ve güçlü motoru ile maksimum üretkenlik sağlar.',
    },
  ];

  return (
    <section
      id="fleet"
      className="py-28 bg-gradient-to-b from-gray-50 to-gray-200 text-center"
    >
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Başlık */}
        <div className="mb-16">
          <h2 className="text-5xl font-extrabold text-yellow-600 tracking-tight mb-4">
            Filomuz
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Modern ekipmanlarımızla her ölçekten inşaat, hafriyat ve altyapı projesine
            güçlü çözümler sunuyoruz. Filomuz, güvenilirlik ve performansı bir araya getirir.
          </p>
        </div>

        {/* Kartlar */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {vehicles.map((v, index) => (
            <motion.div
              key={index}
              className="relative"
              whileHover={{ scale: 1.03 }}
            >
              {/* Link tüm kartı sarmalıyor */}
              <Link
                href="/urunler"
                className="block bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 group overflow-hidden h-[520px] flex flex-col"
              >
                <div className="overflow-hidden h-72">
                  <img
                    src={v.img}
                    alt={v.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-left flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{v.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-yellow-600 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Detayları Gör →
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
