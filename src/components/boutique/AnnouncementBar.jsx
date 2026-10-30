import { Truck, CreditCard } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-charcoal text-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 px-4 py-2.5 text-center text-[10px] font-medium uppercase tracking-wide-sm sm:flex-row sm:gap-4 sm:text-[11px]">
        <span className="flex items-center gap-2">
          <Truck className="h-3.5 w-3.5 text-gold" />
          Livraison disponible vers 69 Wilayas
        </span>
        <span className="hidden text-gold sm:inline">◆</span>
        <span className="flex items-center gap-2">
          <CreditCard className="h-3.5 w-3.5 text-gold" />
          Paiement à la livraison (Cash on Delivery)
        </span>
      </div>
    </div>
  );
}