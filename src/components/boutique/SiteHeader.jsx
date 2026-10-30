import { useEffect, useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { BRAND, MONOGRAM } from '@/lib/boutique';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Lego Sets', href: '#collection' },
  { label: 'Skincare & Beauty', href: '#collection' },
  { label: 'Customer Reviews', href: '#avis' },
  { label: 'Contact', href: '#contact' },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled || open
          ? 'border-b border-border/70 bg-cream/95 backdrop-blur-xl'
          : 'border-b border-transparent bg-cream/60 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-10">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full ring-1 ring-gold/40">
            <Image src={MONOGRAM} alt="Monogramme ANFAYA" className="h-11 w-11" />
          </span>
          <span className="leading-none">
            <span className="block font-heading text-xl tracking-[0.22em] text-charcoal">ANFAYA</span>
            <span className="mt-1 block text-[8px] uppercase tracking-luxe text-gold">Boutique</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative py-1 text-[11px] uppercase tracking-wide-sm text-charcoal/70 transition-colors hover:text-charcoal"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram ANFAYA"
            className="hidden h-10 w-10 place-items-center rounded-full border border-charcoal/10 text-charcoal/70 transition-colors hover:border-gold hover:text-gold sm:grid"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="#commander"
            className="rounded-full bg-charcoal px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wide-sm text-cream transition-all duration-300 hover:bg-gold hover:text-charcoal sm:px-6 sm:text-[11px]"
          >
            Commander Maintenant
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-charcoal/10 text-charcoal lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-border/60 transition-all duration-500 lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 bg-cream px-6 py-4">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/50 py-3 text-[11px] uppercase tracking-wide-sm text-charcoal/75 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex items-center gap-2 text-[11px] uppercase tracking-wide-sm text-gold"
          >
            <Instagram className="h-4 w-4" /> {BRAND.handle}
          </a>
        </nav>
      </div>
    </header>
  );
}