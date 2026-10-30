import { ArrowRight, Sparkles, ShieldCheck, Truck, Star, Instagram } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { BRAND, HERO_IMAGE, waLink } from '@/lib/boutique';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-blush/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-8 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:pb-24 lg:pt-14">
        <div className="order-2 lg:order-1">
          <div className="mb-6 flex items-center gap-3">
            <span className="gold-rule w-10" />
            <span className="text-[10px] uppercase tracking-luxe text-gold">Alger · Depuis 2023</span>
          </div>

          <h1 className="font-heading text-[2.6rem] leading-[1.04] tracking-tight text-charcoal sm:text-6xl lg:text-[4rem]">
            ANFAYA<span className="shimmer-text">✨</span>
            <span className="mt-2 block text-charcoal/80">Beauté, Skincare &</span>
            <span className="block italic text-blush">Special Lego Collections</span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-charcoal/65">
            Votre boutique lifestyle & cadeaux préférée en Algérie. Sets Lego collector, rituels skincare
            et coffrets personnalisés — livrés chez vous, partout dans les 69 wilayas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#collection"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blush px-7 py-4 text-[11px] font-semibold uppercase tracking-wide-sm text-charcoal transition-all duration-300 hover:bg-[#e0808f] hover:shadow-[0_18px_40px_-18px_rgba(232,146,160,0.9)]"
            >
              Découvrir la Collection
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={waLink('Bonjour ANFAYA ✨ Je souhaite commander un article.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/15 px-7 py-4 text-[11px] font-semibold uppercase tracking-wide-sm text-charcoal transition-all duration-300 hover:border-charcoal/40 hover:bg-white/70"
            >
              <Instagram className="h-4 w-4" />
              Commander sur WhatsApp / Instagram
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-[11px] text-charcoal/60">+1 200 clientes ravies</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-charcoal/60">
              <ShieldCheck className="h-4 w-4 text-gold" /> Paiement à la livraison
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-charcoal/60">
              <Truck className="h-4 w-4 text-gold" /> Expédition 24–72h
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blush/35 via-transparent to-gold/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.6rem] bg-white p-2 soft-shadow">
            <Image
              src={HERO_IMAGE}
              alt="Bouquet de Lego, sérum skincare et carte manuscrite ANFAYA"
              className="aspect-[4/4.2] w-full rounded-[1.2rem] object-cover sm:aspect-[4/3] lg:aspect-[4/4.4]"
            />
            <div className="absolute bottom-5 left-5 rounded-xl border border-gold/25 bg-cream/95 px-4 py-3 backdrop-blur">
              <div className="flex items-center gap-1.5 text-[8px] uppercase tracking-luxe text-gold">
                <Sparkles className="h-3 w-3" /> Emballage cadeau offert
              </div>
              <div className="mt-1 font-heading text-lg leading-none text-charcoal">Prêt à offrir</div>
            </div>
            <div className="absolute right-5 top-5 rounded-full border border-gold/30 bg-cream/90 px-3 py-1.5 text-[8px] uppercase tracking-luxe text-charcoal/70 backdrop-blur">
              {BRAND.city}
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-border/70 bg-white/50">
        <div className="mx-auto flex max-w-7xl items-center gap-4 overflow-hidden px-5 py-4 text-[9px] uppercase tracking-luxe text-charcoal/50 lg:px-10 sm:text-[10px]">
          <span className="whitespace-nowrap">Livraison 69 Wilayas</span>
          <span className="text-gold">◆</span>
          <span className="whitespace-nowrap">Paiement à la livraison</span>
          <span className="text-gold">◆</span>
          <span className="whitespace-nowrap">Emballage cadeau</span>
          <span className="text-gold">◆</span>
          <span className="whitespace-nowrap">Note personnalisée</span>
          <span className="text-gold">◆</span>
          <span className="hidden whitespace-nowrap sm:inline">Retours sous 48h</span>
        </div>
      </div>
    </section>
  );
}