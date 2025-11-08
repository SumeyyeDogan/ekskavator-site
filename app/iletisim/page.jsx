'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function IletisimPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedParts, setSelectedParts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    company: '',
    message: '',
  });

  // ✅ URL'den seçilen parçaları al
  useEffect(() => {
    const partsParam = searchParams.get('parts');
    if (partsParam) {
      const parts = partsParam.split(',');
      setSelectedParts(parts);
      setFormData((prev) => ({
        ...prev,
        subject: `Yedek Parça Talebi (${parts.join(', ')})`,
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, selectedParts }),
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          company: '',
          message: '',
        });
        setSelectedParts([]);
        router.push('/tesekkurler');
      } else {
        alert('Bir hata oluştu, lütfen tekrar deneyin.');
      }
    } catch (error) {
      console.error('Form gönderme hatası:', error);
      alert('Sunucu bağlantı hatası. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center px-4 md:px-12 py-16">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-start">
        {/* Sol: Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col gap-4 justify-center relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4 text-center md:text-left">
            Bize Ulaşın
          </h2>

          {/* ✅ Seçilen Parçalar Kutusu */}
          {selectedParts.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 mb-4">
              <h3 className="font-semibold text-yellow-700 mb-2">Seçtiğiniz Parçalar:</h3>
              <ul className="list-disc list-inside text-gray-800">
                {selectedParts.map((part, index) => (
                  <li key={index}>{part}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Adınız"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-xl p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base md:text-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="E-posta"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-xl p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base md:text-lg"
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Telefon"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base md:text-lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="subject"
              placeholder="Konu"
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base md:text-lg"
            />
            <input
              type="text"
              name="company"
              placeholder="Şirket (opsiyonel)"
              value={formData.company}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base md:text-lg"
            />
          </div>

          <textarea
            name="message"
            placeholder="Mesajınız"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="border border-gray-300 rounded-xl p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none text-base md:text-lg"
          />

          <button
            type="submit"
            className="bg-yellow-600 text-white font-bold py-3 md:py-4 rounded-xl hover:bg-yellow-700 transition text-base md:text-lg mt-2"
          >
            Gönder
          </button>
        </motion.form>

        {/* Sağ: İletişim Bilgileri */}
        <motion.div
          className="flex flex-col justify-center gap-6 md:items-end md:pr-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4 text-center md:text-right">
            İletişim Bilgileri
          </h1>
          <p className="text-gray-800 text-base md:text-lg mb-6 text-center md:text-right">
            Bizimle iletişime geçmek için formu doldurabilir veya aşağıdaki bilgilerimizi kullanabilirsiniz.
          </p>

          <div className="bg-white p-6 rounded-2xl shadow-xl flex items-start gap-4 w-full md:w-96">
            <MapPin className="w-6 h-6 text-yellow-600 mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 text-lg md:text-xl">Adres</h4>
              <p className="text-gray-700 text-base md:text-lg">İstanbul, Türkiye</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl flex items-start gap-4 w-full md:w-96">
            <Phone className="w-6 h-6 text-yellow-600 mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 text-lg md:text-xl">Telefon</h4>
              <p className="text-gray-700 text-base md:text-lg">+90 123 456 78 90</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl flex items-start gap-4 w-full md:w-96">
            <Mail className="w-6 h-6 text-yellow-600 mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 text-lg md:text-xl">E-posta</h4>
              <p className="text-gray-700 text-base md:text-lg">info@firma.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
