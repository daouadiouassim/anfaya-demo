import { useState } from 'react';
import AnnouncementBar from '@/components/boutique/AnnouncementBar';
import SiteHeader from '@/components/boutique/SiteHeader';
import Hero from '@/components/boutique/Hero';
import ProductShowcase from '@/components/boutique/ProductShowcase';
import ValuesStrip from '@/components/boutique/ValuesStrip';
import OrderSection from '@/components/boutique/OrderSection';
import Reviews from '@/components/boutique/Reviews';
import SiteFooter from '@/components/boutique/SiteFooter';
import { PRODUCTS } from '@/lib/boutique';

export default function Home() {
  const [productId, setProductId] = useState(PRODUCTS[0].id);

  const handleOrder = (id) => {
    setProductId(id);
    document.getElementById('commander')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <Hero />
        <ProductShowcase onOrder={handleOrder} />
        <ValuesStrip />
        <OrderSection productId={productId} onProductChange={setProductId} />
        <Reviews />
      </main>
      <SiteFooter />
    </div>
  );
}