'use client';

import { useState } from 'react';
import { Info, Eye, Target, CheckCircle, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function KurumsalPage() {
  const [activeTab, setActiveTab] = useState('hakkimizda');

  const tabs = [
    { id: 'hakkimizda', label: 'Hakkımızda', icon: <Info className="inline w-5 h-5 mr-2" /> },
    { id: 'vizyon', label: 'Vizyon', icon: <Eye className="inline w-5 h-5 mr-2" /> },
    { id: 'misyon', label: 'Misyon', icon: <Target className="inline w-5 h-5 mr-2" /> },
    { id: 'bilgi-toplumu', label: 'Bilgi Toplumu', icon: <CheckCircle className="inline w-5 h-5 mr-2" /> },
    { id: 'kalite-politikasi', label: 'Kalite Politikası', icon: <CheckCircle className="inline w-5 h-5 mr-2" /> },
    { id: 'bilgi-guvenligi', label: 'Bilgi Güvenliği', icon: <Shield className="inline w-5 h-5 mr-2" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'hakkimizda':
        return {
          title: 'Hakkımızda',
          content: `XXXXXX Ekskavatör, 2005 yılından bu yana inşaat, hafriyat ve ağır makine kiralama alanlarında hizmet veren lider bir firmadır. Müşterilerimizin ihtiyaçlarına özel çözümler sunmak ve sektörde güvenilir bir iş ortağı olmak temel hedefimizdir. Gelişmiş makine parkımız ve alanında uzman kadromuz ile her projede maksimum verimlilik ve kaliteyi garanti ediyoruz. Sürdürülebilirlik ve çevre dostu uygulamalar, faaliyetlerimizin her aşamasında önceliğimizdir. Firmamız, müşteri memnuniyetini temel değer olarak benimseyerek sektörde fark yaratmaya devam etmektedir.`,
        };
      case 'vizyon':
        return {
          title: 'Vizyon',
          content: `Vizyonumuz, inşaat ve hafriyat sektöründe yenilikçi ve sürdürülebilir çözümler sunan lider bir marka olmaktır. Teknolojiyi yakından takip ederek, çevreye duyarlı projeler geliştirmek ve iş ortaklarımıza uzun vadeli değer katmak önceliğimizdir. XXXXXX Ekskavatör olarak sektörde kalite ve güven standardını sürekli yükselten bir firma olmayı hedefliyoruz. Amacımız, müşterilerimizin ihtiyaçlarını aşan çözümler üretmek ve sektörde örnek alınan bir firma olmaktır.`,
        };
      case 'misyon':
        return {
          title: 'Misyon',
          content: `Misyonumuz, müşterilerimize güvenli, kaliteli ve yenilikçi hizmetler sunmak; çalışanlarımızla birlikte sürekli değer üreten bir şirket kültürü oluşturmak ve sektörde sürdürülebilir bir fark yaratmaktır. Projelerimizin her aşamasında kalite ve güvenlik standartlarını ön planda tutarız. Müşteri memnuniyetini sağlamak, ekip içi verimliliği artırmak ve topluma katkıda bulunmak temel misyonumuzdur.`,
        };
      case 'bilgi-toplumu':
        return {
          title: 'Bilgi Toplumu Hizmetleri',
          content: `XXXXXX, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında şeffaflık ve güven ilkeleriyle hareket eder. Tüm iş süreçlerinde veri gizliliğini korur, teknolojiyi etkin kullanarak bilgi toplumu hizmetlerini en yüksek standartlarda sunar. Çalışanlarımızın ve müşterilerimizin bilgilerini korumak için sürekli güncellenen güvenlik protokolleri uygular ve şeffaf bir bilgi yönetimi sistemine sahiptir.`,
        };
      case 'kalite-politikasi':
        return {
          title: 'Kalite Politikası',
          content: `Kalite yönetim sistemimiz, tüm süreçlerimizde sürekli iyileştirme prensibini esas alır. Projelerimizin her aşamasında müşteri beklentilerini en üst seviyede karşılamayı amaçlar ve kalite standartlarını düzenli olarak denetleriz. Firmamız, hizmet kalitesini artırmak için teknolojik gelişmeleri takip eder ve çalışanlarımızın eğitimine yatırım yapar. Hedefimiz, sektörde güven ve kalite ile tanınan bir marka olmaktır.`,
        };
      case 'bilgi-guvenligi':
        return {
          title: 'Bilgi Güvenliği Politikası',
          content: `Bilgi güvenliği politikamız, tüm bilgi varlıklarının gizliliğini, bütünlüğünü ve erişilebilirliğini korumayı hedefler. Tüm çalışanlarımız, bilgi güvenliği farkındalığı eğitimlerinden geçer ve veri güvenliği için gerekli tüm önlemler uygulanır. Teknolojik altyapımız sürekli denetlenir ve güncellenir. Müşteri ve şirket bilgilerinin korunması, işimizin ayrılmaz bir parçasıdır.`,
        };
      default:
        return { title: '', content: '' };
    }
  };

  const { title, content } = renderContent();

  return (
    <div className="relative min-h-screen">
      {/* Arka Plan Resmi */}
      <picture className="absolute inset-0 w-full h-full z-0">
        <source srcSet="/images/kurumsal.webp" type="image/webp" />
        <img
          src="/images/kurumsal.jpg"
          alt="Kurumsal"
          className="w-full h-full object-cover opacity-40 brightness-90"
        />
      </picture>

      {/* Hafif Overlay (İçerik okunabilirliği için) */}
      <div className="absolute inset-0 bg-white bg-opacity-20 z-0"></div>

      {/* İçerik */}
      <section className="relative z-10 flex flex-col md:flex-row max-w-screen-xl mx-auto px-6 py-16 gap-10">
        {/* Sol Menü */}
        <aside className="md:w-1/4 w-full border-r md:border-gray-200 border-none">
          <ul className="space-y-3 sticky top-32">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center text-lg ${
                    activeTab === tab.id
                      ? 'bg-yellow-500 text-white shadow-lg scale-105'
                      : 'text-gray-700 hover:bg-yellow-100'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Sağ İçerik */}
        <motion.div
          className="md:w-3/4 w-full bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg border border-gray-100"
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div key={activeTab}>
              <h2 className="text-3xl font-bold mb-6 text-yellow-600">{title}</h2>
              <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">{content}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
