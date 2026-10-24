import { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Features from './components/sections/Features';
import Heritage from './components/sections/Heritage';
import Leadership from './components/sections/Leadership';
import News from './components/sections/News';
import Committees from './components/sections/Committees';
import VenueShowcase from './components/sections/VenueShowcase';
import VenueBooking from './components/sections/VenueBooking';
import Donate from './components/sections/Donate';
import Contact from './components/sections/Contact';
import ScrollToTop from './components/common/ScrollToTop';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((currentScroll / height) * 100);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <>
      <div style={{
        position: 'fixed', top: 0, left: 0,
        width: `${scrollProgress}%`, height: '3px',
        background: 'linear-gradient(to right, var(--accent-gold), var(--accent-gold-light))',
        zIndex: 9999, transition: 'width 0.1s ease-out',
      }} />

      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Heritage />
        <Leadership />
        <News />
        <Committees />
        <VenueShowcase />
        <VenueBooking />
        <Donate />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}