import { Gift, Truck, ShieldCheck, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const VALUES = [
  {
    icon: Truck,
    title: '69 Wilayas',
    text: 'Livraison à domicile ou en bureau Stop Desk, partout en Algérie.',
  },
  {
    icon: ShieldCheck,
    title: 'Paiement à la livraison',
    text: 'Vous payez en espèces uniquement quand le colis est entre vos mains.',
  },
  {
    icon: Gift,
    title: 'Emballage signature',
    text: 'Papier blush, ruban doré et une note manuscrite dans chaque commande.',
  },
  {
    icon: Sparkles,
    title: 'Pièces sélectionnées',
    text: 'Sets Lego collector et soins choisis un par un, jamais au hasard.',
  },
];

export default function ValuesStrip() {
  return (
    <section className="border-y border-border/70 bg-white/60 py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {VALUES.map((value, i) => (
          <Reveal key={value.title} delay={i * 70}>
            <div className="group">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-full border border-gold/30 bg-cream transition-colors duration-500 group-hover:border-gold group-hover:bg-gold/10">
                <value.icon className="h-4 w-4 text-gold" />
              </div>
              <h3 className="font-heading text-lg text-charcoal">{value.title}</h3>
              <p className="mt-1.5 max-w-[15rem] text-[11px] leading-relaxed text-charcoal/55">{value.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}