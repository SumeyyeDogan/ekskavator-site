'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function KiralamaPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendRentalMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        router.push('/tesekkurler'); // ✅ Gönderim sonrası yönlendirme
      } else {
        alert('Bir hata oluştu, lütfen tekrar deneyin.');
      }
    } catch (error) {
      console.error('Form gönderme hatası:', error);
      alert('Sunucu bağlantı hatası. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center px-4 md:px-12 py-12">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-yellow-600 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Kiralama Talep Formu
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Adınız Soyadınız"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-xl p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base md:text-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="E-posta Adresiniz"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-xl p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base md:text-lg"
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Telefon Numaranız"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base md:text-lg"
          />

          <input
            type="text"
            name="company"
            placeholder="Şirket Adı (opsiyonel)"
            value={formData.company}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base md:text-lg"
          />

          <textarea
            name="message"
            placeholder="Kiralama talebiniz veya açıklama..."
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
      </div>
    </div>
  );
}
