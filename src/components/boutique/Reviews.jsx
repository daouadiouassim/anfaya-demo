import { Star, Quote, Heart } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from './Reveal';
import { NOTE_IMAGE } from '@/lib/boutique';

const REVIEWS = [
  {
    name: 'Amina B.',
    city: 'Alger',
    text: "Coffret reçu en 24h à Alger. L'emballage est magnifique et la note manuscrite m'a fait pleurer 😭 Merci ANFAYA !",
  },
  {
    name: 'Yasmine K.',
    city: 'Oran',
    text: "J'ai commandé le set CR7 pour mon frère, il a adoré. Paiement à la livraison, zéro stress.",
  },
  {
    name: 'Nour H.',
    city: 'Constantine',
    text: 'Le bouquet de Lego est encore plus beau en vrai. Livraison rapide et une équipe adorable au téléphone.',
  },
  {
    name: 'Sarah M.',
    city: 'Sétif',
    text: 'Commande passée vendredi, reçue dimanche. Je recommande à 1000%.',
  },
  {
    name: 'Lina T.',
    city: 'Blida',
    text: 'Enfin une boutique sérieuse : produit conforme, prix honnête et un vrai suivi ✨',
  },
  {
    name: 'Meriem A.',
    city: 'Béjaïa',
    text: "Le sérum sent divinement bon et ma peau est toute douce. J'ai déjà recommandé pour ma sœur.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-3 w-3 fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="avis" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="gold-rule w-8" />
              <span className="text-[10px] uppercase tracking-luxe text-gold">Avis Clients</span>
              <span className="gold-rule w-8" />
            </div>
            <h2 className="font-heading text-3xl leading-tight text-charcoal sm:text-4xl lg:text-[2.9rem]">
              Elles ont reçu leur <span className="italic text-blush">ANFAYA</span>
            </h2>
            <p className="mt-4 text-[12px] leading-relaxed text-charcoal/60">
              Plus de 1 200 commandes livrées dans 69 wilayas — voici quelques retours reçus sur Instagram.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 60} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-border/70 bg-white/85 p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-[0_20px_45px_-32px_rgba(26,26,26,0.4)]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blush-soft px-2.5 py-1 text-[8px] font-semibold uppercase tracking-wide-sm text-charcoal/60">
                    Retour
                  </span>
                  <Stars />
                </div>
                <Quote className="mt-4 h-4 w-4 text-gold/60" />
                <blockquote className="mt-2 flex-1 text-[12.5px] leading-relaxed text-charcoal/70">
                  {review.text}
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-border/60 pt-4">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-blush to-gold font-heading text-sm text-white">
                    {review.name.charAt(0)}
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[11px] font-semibold text-charcoal">{review.name}</span>
                    <span className="text-[10px] text-charcoal/45">{review.city} · cliente vérifiée</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-10 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-2xl border border-border/70 bg-white">
              <Image
                src={NOTE_IMAGE}
                alt="Note cadeau manuscrite envoyée avec une commande ANFAYA"
                className="h-full max-h-72 w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-charcoal p-7 text-cream">
              <Heart className="h-5 w-5 text-gold" />
              <p className="mt-4 font-heading text-2xl leading-snug text-cream">
                « Chaque commande part avec une note écrite à la main. »
              </p>
              <p className="mt-3 text-[11px] leading-relaxed text-cream/55">
                C'est notre signature : un mot personnel, un ruban doré, et l'odeur de la surprise quand
                vous ouvrez le colis.
              </p>
              <a
                href="#commander"
                className="mt-6 inline-flex w-fit rounded-full bg-blush px-6 py-3 text-[10px] font-semibold uppercase tracking-wide-sm text-charcoal transition-colors hover:bg-gold"
              >
                Je veux la mienne
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}