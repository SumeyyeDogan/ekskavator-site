'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-8 flex flex-col items-center text-center">
        <p className="text-sm mb-2">© 2025 Ekskavatör Firması. Tüm hakları saklıdır.</p>
        <p className="text-sm mb-2">Adres: Örnek Mah. Örnek Cad. No:1, Şehir</p>
        <p className="text-sm">
          Telefon: <span className="font-semibold">0 555 555 55 55</span> |{' '}
          E-posta:{' '}
          <a
            href="mailto:info@ekskavator.com"
            className="hover:underline text-yellow-400"
            rel="noopener noreferrer"
          >
            info@ekskavator.com
          </a>
        </p>
      </div>
    </footer>
  );
}
