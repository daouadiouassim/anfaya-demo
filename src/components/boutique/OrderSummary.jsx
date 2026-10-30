import { Image } from '@/components/ui/image';
import { Truck, Gift, Clock } from 'lucide-react';
import { DELIVERY, formatDA } from '@/lib/boutique';

export default function OrderSummary({ product, quantity, deliveryType, wilaya }) {
  const subtotal = product.price * quantity;
  const freeDelivery = subtotal >= DELIVERY.freeThreshold;
  const fee = freeDelivery ? 0 : DELIVERY[deliveryType] || DELIVERY.domicile;
  const total = subtotal + fee;

  return (
    <div className="rounded-2xl border border-border/70 bg-white/85 p-5 card-shadow sm:p-7">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-xl text-charcoal">Résumé de la commande</h3>
        <span className="text-[9px] uppercase tracking-luxe text-gold">ANFAYA</span>
      </div>

      <div className="mt-5 flex gap-4">
        <div className="h-20 w-16 shrink-0 overflow-hidden rounded-lg bg-blush-soft">
          <Image src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div className="min-w-0">
          <p className="truncate font-heading text-[15px] leading-tight text-charcoal">{product.name}</p>
          <p className="mt-1 text-[11px] text-charcoal/50">
            Quantité : <span className="text-charcoal/80">{quantity}</span>
          </p>
          <p className="mt-1 text-[11px] text-charcoal/50">
            {deliveryType === 'stopdesk' ? 'Retrait Stop Desk' : 'Livraison à domicile'}
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-2.5 border-t border-border/70 pt-4 text-[12px]">
        <div className="flex justify-between text-charcoal/65">
          <span>Sous-total</span>
          <span className="text-charcoal">{formatDA(subtotal)}</span>
        </div>
        <div className="flex justify-between text-charcoal/65">
          <span>Livraison {wilaya ? `· ${wilaya.name}` : ''}</span>
          <span className={freeDelivery ? 'text-gold' : 'text-charcoal'}>
            {freeDelivery ? 'Offerte' : formatDA(fee)}
          </span>
        </div>
        <div className="flex items-baseline justify-between border-t border-border/70 pt-3">
          <span className="text-[10px] uppercase tracking-wide-sm text-charcoal/55">Total à payer</span>
          <span className="font-heading text-2xl text-charcoal">{formatDA(total)}</span>
        </div>
      </div>

      <div className="mt-5 space-y-2 rounded-xl bg-blush-soft/70 p-4 text-[10px] leading-relaxed text-charcoal/70">
        <p className="flex items-center gap-2">
          <Truck className="h-3.5 w-3.5 text-gold" /> Livraison estimée : {DELIVERY.delay} · Alger sous 24h
        </p>
        <p className="flex items-center gap-2">
          <Gift className="h-3.5 w-3.5 text-gold" /> Emballage cadeau + note manuscrite offerts
        </p>
        <p className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 text-gold" /> Confirmation par téléphone sous 2h
        </p>
      </div>

      {!freeDelivery && (
        <p className="mt-3 text-center text-[10px] text-charcoal/45">
          Plus que {formatDA(DELIVERY.freeThreshold - subtotal)} pour la livraison offerte
        </p>
      )}
    </div>
  );
}