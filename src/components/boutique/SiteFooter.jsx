import { Instagram, Music2, MapPin, Clock, Truck, ShieldCheck, RotateCcw } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { BRAND, MONOGRAM, waLink } from '@/lib/boutique';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full ring-1 ring-gold/40">
                <Image src={MONOGRAM} alt="Monogramme ANFAYA" className="h-12 w-12" />
              </span>
              <span className="leading-none">
                <span className="block font-heading text-2xl tracking-[0.22em] text-cream">ANFAYA</span>
                <span className="mt-1.5 block text-[8px] uppercase tracking-luxe text-gold">
                  Fashion · Beauty · Lifestyle
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[11.5px] leading-relaxed text-cream/55">
              Boutique lifestyle & cadeaux en Algérie. Beauté, skincare, sets Lego collector et coffrets
              personnalisés — pensés pour faire plaisir.
            </p>
            <div className="mt-6 flex gap-2.5">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-cream/15 px-4 py-2.5 text-[10px] uppercase tracking-wide-sm text-cream/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram className="h-3.5 w-3.5" /> Instagram
              </a>
              <a
                href={BRAND.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-cream/15 px-4 py-2.5 text-[10px] uppercase tracking-wide-sm text-cream/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Music2 className="h-3.5 w-3.5" /> TikTok
              </a>
            </div>
            <p className="mt-3 text-[10px] text-cream/35">{BRAND.handle}</p>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-luxe text-gold">Contact</h3>
            <ul className="mt-4 space-y-3 text-[11.5px] text-cream/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/80" />
                {BRAND.city} — expédition nationale
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/80" />
                Sam – Jeu · 9h00 – 19h00
              </li>
              <li className="flex items-start gap-2.5">
                <Instagram className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/80" />
                <a href={waLink('Bonjour ANFAYA ✨')} target="_blank" rel="noreferrer" className="hover:text-gold">
                  Message privé {BRAND.handle}
                </a>
              </li>
            </ul>
            <a
              href="#commander"
              className="mt-5 inline-flex rounded-full bg-blush px-5 py-3 text-[10px] font-semibold uppercase tracking-wide-sm text-charcoal transition-colors hover:bg-gold"
            >
              Commander maintenant
            </a>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-luxe text-gold">Livraison & retours</h3>
            <ul className="mt-4 space-y-3 text-[11.5px] leading-relaxed text-cream/60">
              <li className="flex items-start gap-2.5">
                <Truck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/80" />
                Livraison 24 – 72h dans les 69 wilayas. 400 DA en Stop Desk, 600 DA à domicile, offerte dès
                15 000 DA.
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/80" />
                Paiement à la livraison uniquement — aucun paiement en ligne demandé.
              </li>
              <li className="flex items-start gap-2.5">
                <RotateCcw className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/80" />
                Article abîmé ? Signalez-le sous 48h avec une photo, on trouve une solution.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-[9.5px] uppercase tracking-wide-sm text-cream/35 sm:flex-row">
          <p>© {year} ANFAYA Boutique · Tous droits réservés</p>
          <p>Fait avec ♥ à Alger</p>
        </div>
      </div>
    </footer>
  );
}