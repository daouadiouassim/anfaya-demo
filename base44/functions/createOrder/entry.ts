import { createClientFromRequest } from 'npm:@base44/sdk@0.8.54';

// Catalogue et tarifs de référence côté serveur : le client n'envoie qu'un identifiant,
// jamais un prix. Les montants sont donc toujours calculés ici.
const PRODUCTS = {
  'lego-batmobile': { name: 'Lego Batmobile (Édition Limitée)', price: 8900 },
  'lego-cr7-messi': { name: 'Sets Lego CR7 & Messi', price: 6500 },
  'lego-flower-bouquet': { name: 'Lego Flower Bouquet', price: 7200 },
  'lego-milky-way': { name: 'Lego Milky Way Wall Art', price: 9500 },
  'coffret-skincare-note': { name: 'Coffret Skincare & Note Personnalisée', price: 5800 },
  'coffret-signature': { name: 'Coffret Cadeau Signature ANFAYA', price: 4900 },
};

const WILAYAS = {
  '01': 'Adrar', '02': 'Chlef', '03': 'Laghouat', '04': 'Oum El Bouaghi', '05': 'Batna',
  '06': 'Béjaïa', '07': 'Biskra', '08': 'Béchar', '09': 'Blida', '10': 'Bouira',
  '11': 'Tamanrasset', '12': 'Tébessa', '13': 'Tlemcen', '14': 'Tiaret', '15': 'Tizi Ouzou',
  '16': 'Alger', '17': 'Djelfa', '18': 'Jijel', '19': 'Sétif', '20': 'Saïda',
  '21': 'Skikda', '22': 'Sidi Bel Abbès', '23': 'Annaba', '24': 'Guelma', '25': 'Constantine',
  '26': 'Médéa', '27': 'Mostaganem', '28': "M'Sila", '29': 'Mascara', '30': 'Ouargla',
  '31': 'Oran', '32': 'El Bayadh', '33': 'Illizi', '34': 'Bordj Bou Arréridj', '35': 'Boumerdès',
  '36': 'El Tarf', '37': 'Tindouf', '38': 'Tissemsilt', '39': 'El Oued', '40': 'Khenchela',
  '41': 'Souk Ahras', '42': 'Tipaza', '43': 'Mila', '44': 'Aïn Defla', '45': 'Naâma',
  '46': 'Aïn Témouchent', '47': 'Ghardaïa', '48': 'Relizane', '49': 'Timimoun',
  '50': 'Bordj Badji Mokhtar', '51': 'Ouled Djellal', '52': 'Béni Abbès', '53': 'In Salah',
  '54': 'In Guezzam', '55': 'Touggourt', '56': 'Djanet', '57': "El M'Ghair", '58': 'El Meniaa',
};

const DELIVERY = { domicile: 600, stopdesk: 400, freeThreshold: 15000 };
const MAX_QUANTITY = 10;

const makeRef = () =>
  'ANF-' + Date.now().toString(36).slice(-4).toUpperCase() + Math.random().toString(36).slice(2, 4).toUpperCase();

const clean = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

export default async function (req) {
  try {
    if (req.method !== 'POST') {
      return Response.json({ error: 'Method not allowed' }, { status: 405 });
    }

    const body = await req.json().catch(() => ({}));

    const full_name = clean(body.full_name, 120);
    const phone = clean(body.phone, 20);
    const wilaya_code = clean(body.wilaya_code, 2);
    const address = clean(body.address, 300);
    const product_id = clean(body.product_id, 60);
    const gift_note = clean(body.gift_note, 180);
    const delivery_type = body.delivery_type === 'stopdesk' ? 'stopdesk' : 'domicile';
    const quantity = Math.min(MAX_QUANTITY, Math.max(1, parseInt(body.quantity, 10) || 1));

    if (full_name.length < 3) {
      return Response.json({ error: 'Merci d’indiquer votre nom complet.' }, { status: 400 });
    }
    if (!/^0[2-9]\d{7,8}$/.test(phone.replace(/[\s.-]/g, ''))) {
      return Response.json({ error: 'Numéro de téléphone invalide.' }, { status: 400 });
    }
    if (!WILAYAS[wilaya_code]) {
      return Response.json({ error: 'Wilaya invalide.' }, { status: 400 });
    }
    if (address.length < 6) {
      return Response.json({ error: 'Adresse de livraison trop courte.' }, { status: 400 });
    }
    const product = PRODUCTS[product_id];
    if (!product) {
      return Response.json({ error: 'Produit inconnu.' }, { status: 400 });
    }

    const subtotal = product.price * quantity;
    const delivery_fee = subtotal >= DELIVERY.freeThreshold ? 0 : DELIVERY[delivery_type];
    const total = subtotal + delivery_fee;
    const order_ref = makeRef();

    const base44 = createClientFromRequest(req);
    await base44.asServiceRole.entities.Order.create({
      order_ref,
      full_name,
      phone,
      wilaya_code,
      wilaya_name: WILAYAS[wilaya_code],
      address,
      product_id,
      product_name: product.name,
      quantity,
      unit_price: product.price,
      subtotal,
      delivery_type,
      delivery_fee,
      total,
      gift_note,
      status: 'nouvelle',
    });

    return Response.json({
      success: true,
      order_ref,
      full_name,
      phone,
      wilaya_name: WILAYAS[wilaya_code],
      product_name: product.name,
      quantity,
      subtotal,
      delivery_fee,
      total,
      delivery_type,
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}