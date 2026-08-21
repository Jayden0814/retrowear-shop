import Stripe from 'stripe'
import { products } from '../src/data/products.js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

function getOrigin(req) {
  return process.env.PUBLIC_SITE_URL || req.headers.origin || `https://${req.headers.host}`
}

function getLineItems(cartItems, origin) {
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    throw new Error('Your cart is empty.')
  }

  return cartItems.map((item) => {
    const product = products.find((catalogProduct) => catalogProduct.id === Number(item.productId))
    const quantity = Number(item.quantity)

    if (!product || !Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
      throw new Error('One or more cart items are invalid.')
    }

    const color = product.colors?.find((option) => option.value === item.selectedColor)
    const options = [color?.name, item.selectedSize].filter(Boolean)
    const image = product.image || item.image || color?.image || product.gallery?.[0]
    const imagePath = image?.startsWith('/') ? image : `/images/${image}`

    console.log('DEBUG image url:', image ? `${origin}${imagePath}` : 'no image found for', product.name)

    return {
      quantity,
      price_data: {
        currency: product.currency.toLowerCase(),
        unit_amount: Math.round(product.price * 100),
        product_data: {
          name: options.length ? `${product.name} / ${options.join(' / ')}` : product.name,
          images: image ? [`${origin}${imagePath}`] : undefined,
        },
      },
    }
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const origin = getOrigin(req)
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: getLineItems(body?.cartItems, origin),
      shipping_address_collection: { allowed_countries: ['CA'] },
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cart?checkout=cancelled`,
    })

    return res.status(200).json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout session error:', error)
    return res.status(400).json({ error: error.message || 'Unable to create checkout session.' })
  }
}
