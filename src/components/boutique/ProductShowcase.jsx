import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import Reveal from './Reveal';
import { CATEGORIES, PRODUCTS } from '@/lib/boutique';

export default function ProductShowcase({ onOrder }) {
  const [active, setActive] = useState('all');
  const visible = active === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="collection" className="relative bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="gold-rule w-8" />
                <span className="text-[10px] uppercase tracking-luxe text-gold">La Collection</span>
              </div>
              <h2 className="max-w-xl font-heading text-3xl leading-tight text-charcoal sm:text-4xl lg:text-[2.9rem]">
                Des pièces choisies pour <span className="italic text-blush">offrir</span> et se faire plaisir
              </h2>
            </div>
            <p className="max-w-xs text-[11px] leading-relaxed text-charcoal/55">
              Chaque commande part avec son emballage cadeau et une note écrite à la main.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="no-scrollbar mt-9 flex gap-2 overflow-x-auto pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-[10px] font-semibold uppercase tracking-wide-sm transition-all duration-300 ${
                  active === cat.key
                    ? 'border-charcoal bg-charcoal text-cream'
                    : 'border-border bg-white/70 text-charcoal/60 hover:border-gold/60 hover:text-charcoal'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {visible.map((product, i) => (
            <Reveal key={product.id} delay={i * 70} className="h-full">
              <ProductCard product={product} onOrder={onOrder} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-gold/25 bg-blush-soft/60 px-6 py-7 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 shrink-0 text-gold" />
              <p className="text-[12px] leading-relaxed text-charcoal/70">
                <span className="font-semibold text-charcoal">Livraison offerte</span> dès 15 000 DA — et une
                note manuscrite dans chaque commande.
              </p>
            </div>
            <a
              href="#commander"
              className="rounded-full bg-charcoal px-6 py-3 text-[10px] font-semibold uppercase tracking-wide-sm text-cream transition-colors hover:bg-gold hover:text-charcoal"
            >
              Passer commande
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}