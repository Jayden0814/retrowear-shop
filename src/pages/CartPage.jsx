import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CartPage() {
  const { cartItems, cartTotal, removeFromCart, updateQty } = useCart()
  const [checkoutError, setCheckoutError] = useState('')
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = async () => {
    setCheckoutError('')
    setIsCheckingOut(true)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cartItems: cartItems.map((item) => ({
            productId: item.product.id,
            quantity: item.quantity,
            selectedColor: item.selectedColor,
            selectedSize: item.selectedSize,
            image: item.image,
          })),
        }),
      })
      const data = await response.json()

      if (!response.ok || !data.url) {
        throw new Error(data.error || 'Unable to start checkout.')
      }

      window.location.assign(data.url)
    } catch (error) {
      setCheckoutError(error.message)
      setIsCheckingOut(false)
    }
  }

  return (
    <section className="cart-page">
      <div className="page-banner">
        <div>
          <p className="eyebrow">Your picks</p>
          <h1>Shopping cart.</h1>
        </div>
        <Link to="/shop" className="text-link">
          Continue shopping
        </Link>
      </div>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <h2>Your cart is empty.</h2>
          <p>Find something loud for your next fit.</p>
          <Link to="/shop" className="button button--primary">
            Browse the shop
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <article className="cart-item" key={item.cartItemId}>
                <img
                  src={`/images/${item.image}`}
                  alt={item.product.name}
                  className="cart-item__image"
                />
                <div className="cart-item__details">
                  <p className="eyebrow eyebrow--small">{item.product.category}</p>
                  <h2>{item.product.name}</h2>
                  {(item.selectedColor || item.selectedSize) && (
                    <p className="cart-item__options">
                      {[item.selectedColorName, item.selectedSize].filter(Boolean).join(' / ')}
                    </p>
                  )}
                  <p className="cart-item__price">
                    ${item.product.price} {item.product.currency}
                  </p>
                  <div className="cart-item__quantity">
                    <label htmlFor={`quantity-${item.cartItemId}`}>Quantity</label>
                    <input
                      id={`quantity-${item.cartItemId}`}
                      type="number"
                      min="1"
                      max="99"
                      value={item.quantity}
                      onChange={(event) => updateQty(item.cartItemId, event.target.value)}
                    />
                  </div>
                  <div className="cart-item__actions">
                    <button
                      type="button"
                      className="text-button"
                      onClick={() => removeFromCart(item.cartItemId)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <p className="eyebrow">Order total</p>
            <p className="cart-summary__total">
              ${cartTotal.toFixed(2)} CAD
            </p>
            <button
              type="button"
              className="button button--primary"
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? 'Opening checkout...' : 'Checkout with Stripe'}
            </button>
            {checkoutError && <p role="alert">{checkoutError}</p>}
          </aside>
        </div>
      )}
    </section>
  )
}

export default CartPage
