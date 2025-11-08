import './globals.css';
import TopBar from './components/topbar';
import Navbar from './components/navbar';
import Footer from './components/footer';

export const metadata = {
  title: 'Ekskavatör Firması',
  description: 'Profesyonel ekskavatör, hafriyat ve kiralama hizmetleri.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <TopBar />
        <Navbar />
        {/* Main alanı flex-grow ile footer’ı alta iter */}
        <main className="flex-grow pt-[104px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
