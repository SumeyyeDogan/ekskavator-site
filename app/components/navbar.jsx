'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setFixed(true);
        setShrink(true);
      } else {
        setFixed(false);
        setShrink(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Ana Sayfa', href: '/', icon: <Home className="inline-block w-5 h-5 mr-1 text-yellow-500 mb-1" /> },
    { name: 'Ürünler', href: '/urunler' },
    { name: 'Markalar', href: '/markalar' },
    { name: 'Yedek Parça', href: '/yedek-parca' },
    { name: 'Kiralama', href: '/kiralama' },
    { name: 'Kurumsal', href: '/kurumsal' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  return (
    <nav
      className={`transition-all duration-300 z-50 w-full ${
        fixed
          ? 'fixed top-0 bg-white/95 backdrop-blur-md shadow-md'
          : 'relative bg-white shadow-sm'
      } ${shrink ? 'py-1' : 'py-2'}`}  // 🔧 beyaz boşluğu küçülttük
    >
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <Link
          href="/"
          className={`font-extrabold tracking-tight transition-all duration-300 ${
            shrink ? 'text-2xl' : 'text-3xl'
          } text-yellow-600`}
        >
          EKSKAVATÖR
        </Link>

        {/* Hamburger Menü (mobil) */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menü Linkleri */}
        <div
          className={`${
            open ? 'block' : 'hidden'
          } absolute md:static top-[60px] left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:space-x-6 lg:space-x-8 xl:space-x-10 text-center md:text-left shadow-md md:shadow-none`}
        >
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 md:py-0 text-gray-800 font-semibold text-base md:text-[17px] hover:text-yellow-600 transition-all duration-200 whitespace-nowrap"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
