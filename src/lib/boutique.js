export const BRAND = {
  name: 'ANFAYA',
  handle: '@anfaya.boutique_',
  instagram: 'https://www.instagram.com/anfaya.boutique_',
  tiktok: 'https://www.tiktok.com/@anfaya.boutique_',
  // Ajoutez votre numéro WhatsApp ici (format international, sans +), ex. '213555000000'
  whatsapp: '',
  city: 'Alger, Algérie',
};

export const MONOGRAM = 'https://media.base44.com/images/public/user_6ab01c358875bf40e85312c0/4b17bcd39_1dd6e5041_02_monogram_gold.png';
export const WORDMARK = 'https://media.base44.com/images/public/user_6ab01c358875bf40e85312c0/79096e757_026a2d90b_01_primary_logo.png';
export const HERO_IMAGE = 'https://media.base44.com/images/public/6ae4b439a1883cb1a06be3fd/e41a6cec7_generated_81a72c5f.png';
export const NOTE_IMAGE = 'https://media.base44.com/images/public/6ae4b439a1883cb1a06be3fd/555bc0f8f_generated_7eef7c1b.png';

export const CATEGORIES = [
  { key: 'all', label: 'Tous' },
  { key: 'lego', label: 'Sets Lego' },
  { key: 'skincare', label: 'Skincare & Beauté' },
  { key: 'coffrets', label: 'Coffrets Cadeaux' },
];

export const PRODUCTS = [
  {
    id: 'lego-batmobile',
    name: 'Lego Batmobile (Édition Limitée)',
    category: 'lego',
    price: 8900,
    oldPrice: 11000,
    badge: 'Édition limitée',
    image: 'https://media.base44.com/images/public/6ae4b439a1883cb1a06be3fd/a7538e536_generated_56cdadd9.png',
    blurb: 'Pièce collector sous blister, finition noire mate et reflets dorés. Livrée montée sur son socle.',
    details: ['Pièce collector', 'Socle de présentation', 'Emballage cadeau offert'],
  },
  {
    id: 'lego-cr7-messi',
    name: 'Sets Lego CR7 & Messi',
    category: 'lego',
    price: 6500,
    oldPrice: 7900,
    badge: 'Best-seller',
    image: 'https://media.base44.com/images/public/6ae4b439a1883cb1a06be3fd/d6d707e5a_generated_b80b7f67.png',
    blurb: 'Le duo légendaire en briques, présenté sur son mini terrain. Le cadeau parfait pour un passionné de foot.',
    details: ['2 figurines', 'Mini terrain inclus', 'Boîte cadeau ANFAYA'],
  },
  {
    id: 'lego-flower-bouquet',
    name: 'Lego Flower Bouquet',
    category: 'lego',
    price: 7200,
    image: 'https://media.base44.com/images/public/6ae4b439a1883cb1a06be3fd/777156a90_generated_04b9e9c4.png',
    badge: 'Coup de cœur',
    blurb: 'Des roses qui ne fanent jamais. Un bouquet à monter soi-même, à garder pour toujours.',
    details: ['Bouquet à assembler', 'Vase offert', 'Note manuscrite offerte'],
  },
  {
    id: 'lego-milky-way',
    name: 'Lego Milky Way Wall Art',
    category: 'lego',
    price: 9500,
    badge: 'Nouveauté',
    image: 'https://media.base44.com/images/public/6ae4b439a1883cb1a06be3fd/5fc946b52_generated_4a2476c6.png',
    blurb: 'Une fresque galaxie à suspendre au mur. Le détail qui transforme une chambre en cocon.',
    details: ['Format mural', 'Fixation incluse', 'Finition brillante'],
  },
  {
    id: 'coffret-skincare-note',
    name: 'Coffret Skincare & Note Personnalisée',
    category: 'skincare',
    price: 5800,
    oldPrice: 6900,
    image: 'https://media.base44.com/images/public/6ae4b439a1883cb1a06be3fd/8f9daa4eb_generated_42db7d36.png',
    badge: 'Personnalisable',
    blurb: 'Sérum, crème et baume à lèvres dans un écrin crème, avec votre message écrit à la main.',
    details: ['3 soins visage', 'Note manuscrite', 'Coffret réutilisable'],
  },
  {
    id: 'coffret-signature',
    name: 'Coffret Cadeau Signature ANFAYA',
    category: 'coffrets',
    price: 4900,
    image: 'https://media.base44.com/images/public/6ae4b439a1883cb1a06be3fd/30c477db5_generated_0521c49d.png',
    badge: 'Prêt à offrir',
    blurb: 'Notre coffret signature : papier blush, ruban doré, rose séchée et votre message.',
    details: ['Emballage signature', 'Rose séchée', 'Message personnalisé'],
  },
];

export const WILAYAS = [
  ['01', 'Adrar'], ['02', 'Chlef'], ['03', 'Laghouat'], ['04', 'Oum El Bouaghi'],
  ['05', 'Batna'], ['06', 'Béjaïa'], ['07', 'Biskra'], ['08', 'Béchar'],
  ['09', 'Blida'], ['10', 'Bouira'], ['11', 'Tamanrasset'], ['12', 'Tébessa'],
  ['13', 'Tlemcen'], ['14', 'Tiaret'], ['15', 'Tizi Ouzou'], ['16', 'Alger'],
  ['17', 'Djelfa'], ['18', 'Jijel'], ['19', 'Sétif'], ['20', 'Saïda'],
  ['21', 'Skikda'], ['22', 'Sidi Bel Abbès'], ['23', 'Annaba'], ['24', 'Guelma'],
  ['25', 'Constantine'], ['26', 'Médéa'], ['27', 'Mostaganem'], ['28', "M'Sila"],
  ['29', 'Mascara'], ['30', 'Ouargla'], ['31', 'Oran'], ['32', 'El Bayadh'],
  ['33', 'Illizi'], ['34', 'Bordj Bou Arréridj'], ['35', 'Boumerdès'], ['36', 'El Tarf'],
  ['37', 'Tindouf'], ['38', 'Tissemsilt'], ['39', 'El Oued'], ['40', 'Khenchela'],
  ['41', 'Souk Ahras'], ['42', 'Tipaza'], ['43', 'Mila'], ['44', 'Aïn Defla'],
  ['45', 'Naâma'], ['46', 'Aïn Témouchent'], ['47', 'Ghardaïa'], ['48', 'Relizane'],
  ['49', 'Timimoun'], ['50', 'Bordj Badji Mokhtar'], ['51', 'Ouled Djellal'], ['52', 'Béni Abbès'],
  ['53', 'In Salah'], ['54', 'In Guezzam'], ['55', 'Touggourt'], ['56', 'Djanet'],
  ['57', "El M'Ghair"], ['58', 'El Meniaa'],
].map(([code, name]) => ({ code, name }));

export const DELIVERY = {
  domicile: 600,
  stopdesk: 400,
  freeThreshold: 15000,
  delay: '24 – 72h',
};

export const formatDA = (value) =>
  `${new Intl.NumberFormat('fr-FR').format(Math.round(Number(value) || 0))} DA`;

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

export const waLink = (message) =>
  BRAND.whatsapp
    ? `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`
    : BRAND.instagram;