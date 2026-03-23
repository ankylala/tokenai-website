import { Navbar, Footer } from '../components/layout';
import { Hero } from '../components/sections/Hero';
import { Products } from '../components/sections/Products';
import Solutions from '../components/sections/Solutions';
import Timeline from '../components/sections/Timeline';
import Contact from '../components/sections/Contact';

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Solutions />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
