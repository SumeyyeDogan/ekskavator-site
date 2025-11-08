'use client';

import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="w-full bg-yellow-500 text-white text-sm md:text-base">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-end items-center h-12 md:h-14 space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition-colors">
          <Facebook size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition-colors">
          <Instagram size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition-colors">
          <Twitter size={20} />
        </a>
        <a href="mailto:info@firma.com" className="hover:text-gray-100 transition-colors">
          <Mail size={20} />
        </a>
        <a href="tel:+905551234567" className="hover:text-gray-100 transition-colors">
          <Phone size={20} />
        </a>
      </div>
    </div>
  );
}
