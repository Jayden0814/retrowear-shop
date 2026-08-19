export const products = [
  {
    id: 1,
    slug: 'baggy-graphic-jorts',
    name: 'Baggy Graphic Jorts',
    category: 'Bottoms',
    price: 30,
    currency: 'CAD',
    description:
      'Oversized Y2K-style denim jorts with retro graphic print featuring stars, a flip phone, and boombox-inspired art. Built for everyday nostalgia with an easy, slouchy fit.',
    longDescription:
      'These baggy jorts bring the early-2000s straight to your wardrobe. The roomy cut, vintage denim wash, and loud retro graphic print make them the perfect piece for festivals, streetwear fits, and summer flexes.',
    sizes: ['S', 'M', 'L'],
    gallery: ['jorts-front.jpg', 'jorts-worn-1.jpg', 'jorts-worn-2.jpg'],
    stripeLink: 'https://buy.stripe.com/test_00wdR9aNUgn8bYn8M100000',
    badge: 'Best Seller',
  },
  {
    id: 2,
    slug: 'star-print-tee',
    name: 'Star Print Tee',
    category: 'Tops',
    price: 25,
    currency: 'CAD',
    description:
      'Oversized Y2K t-shirt with bold star and graffiti-style graphic print. Choose from crisp white or blackout black for your perfect throwback tee.',
    longDescription:
      'The Star Print Tee is a signature piece for the RetroWear collection. Designed with an oversized fit, boxy silhouette, and loud star print, it delivers the perfect balance of comfort and early-2000s attitude.',
    sizes: ['S', 'M', 'L'],
    colors: [
      {
        name: 'White',
        value: 'white',
        image: 'tee-white-back.jpg',
        stripeLink: 'https://buy.stripe.com/test_cNiaEX5tA3Am1jJ0fv00007',
      },
      {
        name: 'Black',
        value: 'black',
        image: 'tee-black-back.jpg',
        stripeLink: 'https://buy.stripe.com/test_dRm9AT7BI4Eq6E3aU900006',
      },
    ],
    gallery: ['tee-white-back.jpg', 'tee-black-back.jpg'],
    stripeLink: 'https://buy.stripe.com/test_cNiaEX5tA3Am1jJ0fv0000',
    badge: 'New Drop',
  },
  {
    id: 3,
    slug: 'y2k-letter-graphic-beanie',
    name: 'Y2K Letter Graphic Beanie',
    category: 'Accessories',
    price: 7,
    currency: 'CAD',
    description:
      'Y2K-style beanie with bold graffiti letter graphics in selected colorways. Soft stretch fit and easy all-day wear.',
    longDescription:
      'A throwback staple for chilly nights and city runs. This beanie layers a laid-back, oversized fit with striking graffiti lettering that pairs effortlessly with every Y2K outfit.',
    colors: [
      {
        name: 'Gray',
        value: 'gray',
        image: 'beanie-gray.jpg',
        stripeLink: 'STRIPE_LINK_BEANIE_GRAY',
      },
      {
        name: 'Pink/Red',
        value: 'pink',
        image: 'beanie-pink.jpg',
        stripeLink: 'STRIPE_LINK_BEANIE_PINK',
      },
      {
        name: 'Black/Gray',
        value: 'black',
        image: 'beanie-black.jpg',
        stripeLink: 'STRIPE_LINK_BEANIE_BLACK',
      },
    ],
    gallery: ['beanie-gray.jpg', 'beanie-pink.jpg', 'beanie-black.jpg'],
    stripeLink: 'STRIPE_LINK_BEANIE_GRAY',
    badge: 'Low-Key Flex',
  },
]

export const featuredProducts = products.slice(0, 3)
