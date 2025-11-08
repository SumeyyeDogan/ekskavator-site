'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, Cpu, Droplet, Activity, Ruler } from 'lucide-react';

export default function UrunlerimizPage() {
  const products = [
    {
      title: 'KOMATSU PC200',
      imageSrc: '/images/excavator1.jpg',
      description:
        'KOMATSU PC200, orta ölçekli kazı ve inşaat projelerinde mükemmel denge, güç ve yakıt tasarrufu sağlar.',
      features: [
        'Yüksek verimli hidrolik sistem',
        'Ergonomik operatör kabini',
        'Uzun ömürlü ve dayanıklı yapı',
        'Düşük yakıt tüketimi',
      ],
      numericalFeatures: [
        { label: 'Ağırlık', value: '20 ton', icon: <Activity className="w-6 h-6 text-yellow-600" /> },
        { label: 'Motor Gücü', value: '150 HP', icon: <Cpu className="w-6 h-6 text-yellow-600" /> },
        { label: 'Yakıt Kapasitesi', value: '300 L', icon: <Droplet className="w-6 h-6 text-yellow-600" /> },
        { label: 'Kazı Derinliği', value: '6.5 m', icon: <Ruler className="w-6 h-6 text-yellow-600" /> },
      ],
    },
    {
      title: 'VOLVO EC480DL',
      imageSrc: '/images/excavator2.jpg',
      description:
        'VOLVO EC480DL, yüksek tonajlı kazı işlerinde üstün performans ve dayanıklılık sağlayan güçlü bir ekskavatördür.',
      features: [
        'Yüksek torklu motor',
        'Gelişmiş güvenlik sistemleri',
        'Verimli hidrolik tasarım',
        'Uzun bakım aralıkları',
      ],
      numericalFeatures: [
        { label: 'Ağırlık', value: '48 ton', icon: <Activity className="w-6 h-6 text-yellow-600" /> },
        { label: 'Motor Gücü', value: '370 HP', icon: <Cpu className="w-6 h-6 text-yellow-600" /> },
        { label: 'Yakıt Kapasitesi', value: '650 L', icon: <Droplet className="w-6 h-6 text-yellow-600" /> },
        { label: 'Kazı Derinliği', value: '7.5 m', icon: <Ruler className="w-6 h-6 text-yellow-600" /> },
      ],
    },
    {
      title: 'CAT 320',
      imageSrc: '/images/excavator3.jpg',
      description:
        'CAT 320, şehir içi projelerde çevikliği ve yakıt tasarrufu ile öne çıkan modern bir ekskavatördür.',
      features: [
        'Akıllı kontrol sistemi',
        'Çevre dostu motor teknolojisi',
        'Titreşim azaltıcı sistem',
        'Yüksek manevra kabiliyeti',
      ],
      numericalFeatures: [
        { label: 'Ağırlık', value: '22 ton', icon: <Activity className="w-6 h-6 text-yellow-600" /> },
        { label: 'Motor Gücü', value: '162 HP', icon: <Cpu className="w-6 h-6 text-yellow-600" /> },
        { label: 'Yakıt Kapasitesi', value: '410 L', icon: <Droplet className="w-6 h-6 text-yellow-600" /> },
        { label: 'Kazı Derinliği', value: '6.7 m', icon: <Ruler className="w-6 h-6 text-yellow-600" /> },
      ],
    },
    {
      title: 'HYUNDAI HX330L',
      imageSrc: '/images/excavator4.jpg',
      description:
        'HYUNDAI HX330L, dayanıklılığı ve güç aktarımıyla uzun süreli kazı operasyonlarında yüksek verim sağlar.',
      features: [
        'Gelişmiş hidrolik sistem',
        'Rahat görüş açısı sunan kabin',
        'Optimize edilmiş enerji yönetimi',
        'Düşük gürültü seviyesi',
      ],
      numericalFeatures: [
        { label: 'Ağırlık', value: '33 ton', icon: <Activity className="w-6 h-6 text-yellow-600" /> },
        { label: 'Motor Gücü', value: '270 HP', icon: <Cpu className="w-6 h-6 text-yellow-600" /> },
        { label: 'Yakıt Kapasitesi', value: '450 L', icon: <Droplet className="w-6 h-6 text-yellow-600" /> },
        { label: 'Kazı Derinliği', value: '7.1 m', icon: <Ruler className="w-6 h-6 text-yellow-600" /> },
      ],
    },
    {
      title: 'DOOSAN DX300LC',
      imageSrc: '/images/excavator5.jpg',
      description:
        'DOOSAN DX300LC, ağır hizmet tipi kazı ve yıkım projelerinde yüksek performans, dayanıklılık ve yakıt verimliliği sunar.',
      features: [
        'Güçlü dizel motor performansı',
        'Yüksek torklu çalışma sistemi',
        'Düşük bakım maliyetleri',
        'Geniş görüş açılı kabin',
      ],
      numericalFeatures: [
        { label: 'Ağırlık', value: '30 ton', icon: <Activity className="w-6 h-6 text-yellow-600" /> },
        { label: 'Motor Gücü', value: '280 HP', icon: <Cpu className="w-6 h-6 text-yellow-600" /> },
        { label: 'Yakıt Kapasitesi', value: '400 L', icon: <Droplet className="w-6 h-6 text-yellow-600" /> },
        { label: 'Kazı Derinliği', value: '6.9 m', icon: <Ruler className="w-6 h-6 text-yellow-600" /> },
      ],
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Arka plan */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300" />
        <div className="absolute -top-64 -left-64 w-[800px] h-[800px] bg-yellow-300 opacity-50 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-64 -right-64 w-[600px] h-[600px] bg-yellow-400 opacity-40 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <main className="relative z-10 flex flex-col items-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-yellow-600 text-center">Ürünlerimiz</h1>

        {products.map((product, index) => (
          <motion.div
            key={index}
            className={`max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-24 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image src={product.imageSrc} alt={product.title} fill className="object-cover" priority />
            </div>

            <div className="flex flex-col justify-start">
              <h2 className="text-3xl font-bold mb-6 text-yellow-600">{product.title}</h2>
              <p className="text-gray-800 mb-6">{product.description}</p>
              <ul className="space-y-4">
                {product.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-900 font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
}
