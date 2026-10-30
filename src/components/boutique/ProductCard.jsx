import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { formatDA } from '@/lib/boutique';

export default function ProductCard({ product, onOrder }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-white/80 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_50px_-30px_rgba(26,26,26,0.35)]">
      <div className="relative overflow-hidden bg-blush-soft">
        <Image
          src={product.image}
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-[8px] font-semibold uppercase tracking-wide-sm text-charcoal backdrop-blur">
            {product.badge}
          </span>
        )}
        {product.oldPrice && (
          <span className="absolute right-3 top-3 rounded-full bg-charcoal/90 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-wide-sm text-cream">
            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
          </span>
        )}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-sm:hidden">
          <button
            onClick={() => onOrder(product.id)}
            className="flex w-full items-center justify-between rounded-full bg-charcoal/95 px-4 py-3 text-[10px] font-semibold uppercase tracking-wide-sm text-cream backdrop-blur"
          >
            Commander
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-heading text-lg leading-snug text-charcoal">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-charcoal/55">{product.blurb}</p>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-xl text-charcoal">{formatDA(product.price)}</span>
            {product.oldPrice && (
              <span className="text-[10px] text-charcoal/35 line-through">{formatDA(product.oldPrice)}</span>
            )}
          </div>
          <button
            onClick={() => onOrder(product.id)}
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[9px] font-semibold uppercase tracking-wide-sm text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-cream sm:hidden"
          >
            Commander
          </button>
        </div>
      </div>
    </article>
  );
}