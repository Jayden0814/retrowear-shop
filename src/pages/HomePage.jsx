import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { featuredProducts } from '../data/products'

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Y2K streetwear for the 2000s obsessed</p>
          <h1>Chrome dreams, loud graphics, and throwback fits.</h1>
          <p className="hero-subtitle">
            RetroWear Shop brings nostalgic 2000s energy to modern everyday wear —
            graphic denim, oversized tees, and beanies that hit like a dial-up startup.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="button button--primary">
              Shop The Drop
            </Link>
            <Link to="/product/baggy-graphic-jorts" className="button button--secondary">
              Best Seller
            </Link>
          </div>
          <ul className="hero-stats" aria-label="Brand highlights">
            <li>
              <strong>2000s</strong>
              <span>energy</span>
            </li>
            <li>
              <strong>Canada</strong>
              <span>shipping</span>
            </li>
            <li>
              <strong>Gen Z</strong>
              <span>approved</span>
            </li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="Featured Y2K outfit collage">
          <div className="visual-card visual-card--large">
            <img src="/images/jorts-front.jpg" alt="Baggy graphic jorts" />
          </div>
          <div className="visual-stack">
            <div className="visual-card">
              <img src="/images/tee-white-back.jpg" alt="Star print tee" />
            </div>
            <div className="visual-card">
              <img src="/images/beanie-pink.jpg" alt="Letter graphic beanie" />
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured pieces</p>
            <h2>Streetwear essentials, remixed.</h2>
          </div>
          <Link to="/shop" className="text-link">
            Browse all products
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="story-section">
        <div className="story-copy">
          <p className="eyebrow">Our story</p>
          <h2>Throwing it back with a little louder attitude.</h2>
          <p>
            RetroWear Shop was built for people who grew up with flip phones, bubble
            letters, and early internet aesthetics — and still want to wear that energy
            proudly today.
          </p>
          <p>
            Every drop blends bold graphic detail, oversized silhouettes, and a little
            nostalgic chaos so your fit feels effortlessly iconic.
          </p>
        </div>

        <div className="story-panel">
          <div className="story-panel__item">
            <span>01</span>
            <p>Vintage-inspired silhouettes</p>
          </div>
          <div className="story-panel__item">
            <span>02</span>
            <p>Bold graphics with Y2K attitude</p>
          </div>
          <div className="story-panel__item">
            <span>03</span>
            <p>Made for everyday nostalgia</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
