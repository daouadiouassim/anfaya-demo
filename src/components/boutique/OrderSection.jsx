import { useEffect, useState } from 'react';
import { Check, Loader2, ChevronDown, ShieldCheck, Phone } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import OrderSummary from './OrderSummary';
import Reveal from './Reveal';
import { DELIVERY, PRODUCTS, WILAYAS, formatDA, getProduct } from '@/lib/boutique';

const EMPTY = {
  full_name: '',
  phone: '',
  wilaya_code: '',
  address: '',
  product_id: PRODUCTS[0].id,
  quantity: 1,
  delivery_type: 'domicile',
  gift_note: '',
};

const inputClass =
  'w-full rounded-xl border border-border bg-white/90 px-4 py-3.5 text-[13px] text-charcoal outline-none transition-all placeholder:text-charcoal/30 focus:border-blush focus:ring-2 focus:ring-blush/25';

function Label({ children, required }) {
  return (
    <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wide-sm text-charcoal/55">
      {children} {required && <span className="text-blush">*</span>}
    </label>
  );
}

export default function OrderSection({ productId, onProductChange }) {
  const [form, setForm] = useState({ ...EMPTY, product_id: productId });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState(null);
  const [serverError, setServerError] = useState('');

  // Un produit choisi depuis une carte met à jour le sélecteur du formulaire.
  useEffect(() => {
    if (!productId) return;
    setForm((f) => (f.product_id === productId ? f : { ...f, product_id: productId }));
  }, [productId]);

  const product = getProduct(form.product_id);
  const wilaya = WILAYAS.find((w) => w.code === form.wilaya_code);
  const set = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (form.full_name.trim().length < 3) next.full_name = 'Indiquez votre nom complet.';
    if (!/^0[2-9]\d{7,8}$/.test(form.phone.replace(/[\s.-]/g, ''))) next.phone = 'Numéro invalide (ex. 0555 12 34 56).';
    if (!form.wilaya_code) next.wilaya_code = 'Choisissez votre wilaya.';
    if (form.address.trim().length < 6) next.address = 'Adresse ou bureau Stop Desk trop courte.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    setServerError('');
    if (!validate()) return;
    setStatus('submitting');
    try {
      const { data } = await base44.functions.invoke('createOrder', {
        full_name: form.full_name.trim(),
        phone: form.phone.trim(),
        wilaya_code: form.wilaya_code,
        address: form.address.trim(),
        product_id: form.product_id,
        quantity: form.quantity,
        delivery_type: form.delivery_type,
        gift_note: form.gift_note.trim(),
      });
      if (data?.error) throw new Error(data.error);
      setResult(data);
      setStatus('success');
      setForm({ ...EMPTY });
    } catch (err) {
      setServerError(err?.response?.data?.error || err.message || 'La commande n’a pas pu être envoyée.');
      setStatus('idle');
    }
  };

  if (status === 'success' && result) {
    return (
      <section id="commander" className="bg-charcoal py-16 sm:py-24">
        <div className="mx-auto max-w-xl px-5 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold/20 ring-1 ring-gold/40">
            <Check className="h-7 w-7 text-gold" />
          </div>
          <h2 className="mt-6 font-heading text-3xl text-cream sm:text-4xl">Commande enregistrée ✨</h2>
          <p className="mt-3 text-[13px] leading-relaxed text-cream/60">
            Merci {result.full_name?.split(' ')[0] || ''} ! Votre commande{' '}
            <span className="text-gold">{result.order_ref}</span> est bien reçue. Notre équipe vous appelle au{' '}
            {result.phone} dans les 2 heures pour confirmer la livraison à {result.wilaya_name}.
          </p>
          <div className="mt-6 rounded-2xl border border-cream/10 bg-cream/5 p-5 text-left">
            <div className="flex justify-between text-[11px] text-cream/60">
              <span>Produit</span>
              <span className="text-cream">{result.product_name}</span>
            </div>
            <div className="mt-2 flex justify-between text-[11px] text-cream/60">
              <span>Livraison</span>
              <span className="text-cream">{formatDA(result.delivery_fee)}</span>
            </div>
            <div className="mt-3 flex items-baseline justify-between border-t border-cream/10 pt-3">
              <span className="text-[10px] uppercase tracking-wide-sm text-cream/50">À payer à la livraison</span>
              <span className="font-heading text-2xl text-gold">{formatDA(result.total)}</span>
            </div>
          </div>
          <button
            onClick={() => {
              setStatus('idle');
              setResult(null);
            }}
            className="mt-7 rounded-full bg-blush px-7 py-3.5 text-[10px] font-semibold uppercase tracking-wide-sm text-charcoal transition-colors hover:bg-[#e0808f]"
          >
            Passer une autre commande
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="commander" className="relative overflow-hidden bg-blush-soft/50 py-16 sm:py-24">
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-blush/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="gold-rule w-8" />
              <span className="text-[10px] uppercase tracking-luxe text-gold">Commande express</span>
              <span className="gold-rule w-8" />
            </div>
            <h2 className="font-heading text-3xl leading-tight text-charcoal sm:text-4xl lg:text-[2.9rem]">
              Commandez en <span className="italic text-blush">2 minutes</span>, payez à la livraison
            </h2>
            <p className="mt-4 text-[12px] leading-relaxed text-charcoal/60">
              Aucun paiement en ligne. Vous remplissez le formulaire, nous vous appelons pour confirmer,
              et vous payez en espèces à la réception.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <form
              onSubmit={submit}
              className="rounded-2xl border border-border/70 bg-white/90 p-5 card-shadow sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label required>Nom Complet</Label>
                  <input
                    className={inputClass}
                    value={form.full_name}
                    onChange={(e) => set('full_name', e.target.value)}
                    placeholder="Ex. Amina Benali"
                    autoComplete="name"
                  />
                  {errors.full_name && <p className="mt-1.5 text-[10px] text-red-500">{errors.full_name}</p>}
                </div>

                <div>
                  <Label required>Numéro de Téléphone</Label>
                  <input
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    placeholder="0555 12 34 56"
                    inputMode="tel"
                    autoComplete="tel"
                  />
                  {errors.phone && <p className="mt-1.5 text-[10px] text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <Label required>Wilaya</Label>
                  <div className="relative">
                    <select
                      className={`${inputClass} appearance-none pr-10`}
                      value={form.wilaya_code}
                      onChange={(e) => set('wilaya_code', e.target.value)}
                    >
                      <option value="">Sélectionnez votre wilaya</option>
                      {WILAYAS.map((w) => (
                        <option key={w.code} value={w.code}>
                          {w.code} — {w.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40" />
                  </div>
                  {errors.wilaya_code && <p className="mt-1.5 text-[10px] text-red-500">{errors.wilaya_code}</p>}
                </div>

                <div className="sm:col-span-2">
                  <Label required>Adresse de Livraison / Bureau Stop Desk</Label>
                  <textarea
                    className={`${inputClass} min-h-[84px] resize-none`}
                    value={form.address}
                    onChange={(e) => set('address', e.target.value)}
                    placeholder="Cité, rue, numéro… ou nom et adresse du bureau Stop Desk"
                  />
                  {errors.address && <p className="mt-1.5 text-[10px] text-red-500">{errors.address}</p>}
                </div>

                <div className="sm:col-span-2">
                  <Label required>Choix du Produit</Label>
                  <div className="relative">
                    <select
                      className={`${inputClass} appearance-none pr-10`}
                      value={form.product_id}
                      onChange={(e) => {
                        set('product_id', e.target.value);
                        onProductChange(e.target.value);
                      }}
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} — {formatDA(p.price)}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40" />
                  </div>
                </div>

                <div>
                  <Label>Quantité</Label>
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-white/90 px-3 py-2">
                    <button
                      type="button"
                      onClick={() => set('quantity', Math.max(1, form.quantity - 1))}
                      className="grid h-8 w-8 place-items-center rounded-lg bg-blush-soft text-charcoal"
                      aria-label="Diminuer"
                    >
                      −
                    </button>
                    <span className="flex-1 text-center text-[13px]">{form.quantity}</span>
                    <button
                      type="button"
                      onClick={() => set('quantity', Math.min(10, form.quantity + 1))}
                      className="grid h-8 w-8 place-items-center rounded-lg bg-blush-soft text-charcoal"
                      aria-label="Augmenter"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <Label>Mode de livraison</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {['domicile', 'stopdesk'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => set('delivery_type', type)}
                        className={`rounded-xl border px-3 py-3 text-[10px] font-semibold uppercase tracking-wide-sm transition-all ${
                          form.delivery_type === type
                            ? 'border-charcoal bg-charcoal text-cream'
                            : 'border-border bg-white/80 text-charcoal/60'
                        }`}
                      >
                        {type === 'domicile' ? 'Domicile' : 'Stop Desk'}
                        <span className="mt-1 block text-[9px] font-normal opacity-70">
                          {formatDA(DELIVERY[type])}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <Label>Note cadeau (optionnel)</Label>
                  <input
                    className={inputClass}
                    value={form.gift_note}
                    onChange={(e) => set('gift_note', e.target.value)}
                    placeholder="Votre message, écrit à la main sur la carte ✨"
                    maxLength={180}
                  />
                </div>
              </div>

              {serverError && (
                <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-[11px] text-red-600">{serverError}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-4 text-[11px] font-semibold uppercase tracking-wide-sm text-cream transition-all duration-300 hover:bg-gold hover:text-charcoal disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Envoi en cours…
                  </>
                ) : (
                  <>Valider ma commande (Paiement à la livraison)</>
                )}
              </button>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[9px] uppercase tracking-wide-sm text-charcoal/45">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" /> Aucun paiement en ligne
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-gold" /> Confirmation sous 2h
                </span>
              </div>
            </form>
          </Reveal>

          <Reveal delay={100}>
            <div className="lg:sticky lg:top-28">
              <OrderSummary
                product={product}
                quantity={form.quantity}
                deliveryType={form.delivery_type}
                wilaya={wilaya}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}