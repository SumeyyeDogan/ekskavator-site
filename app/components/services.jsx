'use client';

import { motion } from 'framer-motion';
import { Truck, Hammer, Wrench, Loader2, Layers, Building2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Kazı ve Hafriyat',
      description: 'Profesyonel operatörlerimizle her türlü kazı ve hafriyat işinizi güvenle gerçekleştiriyoruz.',
      icon: <Loader2 className="w-10 h-10 text-yellow-600 mb-4 mx-auto" />,
    },
    {
      title: 'Ekskavatör Kiralama',
      description: 'Farklı tonajlarda ekskavatör kiralama seçenekleriyle her projenize uygun çözüm sunuyoruz.',
      icon: <Layers className="w-10 h-10 text-yellow-600 mb-4 mx-auto" />,
    },
    {
      title: 'Yıkım Hizmetleri',
      description: 'Güvenli, çevreye duyarlı ve kontrollü bina yıkım hizmetleri sunmaktayız.',
      icon: <Hammer className="w-10 h-10 text-yellow-600 mb-4 mx-auto" />,
    },
    {
      title: 'Taşımacılık ve Lojistik',
      description: 'Projeleriniz için ağır makine taşımacılığı ve lojistik hizmetleri sunuyoruz.',
      icon: <Truck className="w-10 h-10 text-yellow-600 mb-4 mx-auto" />,
    },
    {
      title: 'Altyapı ve Zemin Hazırlığı',
      description: 'İnşaat projeleriniz için zemin hazırlığı ve altyapı çalışmalarını profesyonel şekilde gerçekleştiriyoruz.',
      icon: <Building2 className="w-10 h-10 text-yellow-600 mb-4 mx-auto" />,
    },
    {
      title: 'İş Makinesi Bakım',
      description: 'Tüm makinelerimiz düzenli bakımdan geçirilir ve her zaman hazır durumdadır.',
      icon: <Wrench className="w-10 h-10 text-yellow-600 mb-4 mx-auto" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 text-center relative z-10">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-yellow-600">Hizmetlerimiz</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-gray-200 p-10 rounded-3xl shadow-2xl transition transform hover:-translate-y-3 hover:scale-105 hover:shadow-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">{service.title}</h3>
              <p className="text-gray-800 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
