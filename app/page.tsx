import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BadgeStrip from '@/components/BadgeStrip';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyCta from '@/components/StickyCta';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BadgeStrip />
      <Services />
      <About />
      <Contact />
      <Footer />
      <StickyCta />
    </main>
  );
}
