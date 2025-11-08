import Hero from './components/hero';
import Services from './components/services';
import Fleet from './components/fleet';


export default function Home() {
  return (
    <>
      <Hero />        {/* Üst kahraman (Hero) bölümü */}
      <Services />    {/* Hizmetler bölümü */}
      <Fleet />       {/* Filomuz bölümü */}
      
    </>
  );
}
