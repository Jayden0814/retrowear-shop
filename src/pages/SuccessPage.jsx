import { Link } from 'react-router-dom'

function SuccessPage() {
  return (
    <section className="cart-page">
      <div className="cart-empty">
        <p className="eyebrow">Payment complete</p>
        <h1>Thanks for your order.</h1>
        <p>Your RetroWear pieces are officially on their way.</p>
        <Link to="/shop" className="button button--primary">
          Keep shopping
        </Link>
      </div>
    </section>
  )
}

export default SuccessPage