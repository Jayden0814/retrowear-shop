import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function ShopPage() {
  return (
    <section className="shop-page">
      <div className="page-banner">
        <p className="eyebrow">Shop all</p>
        <h1>Pick your loudest fit.</h1>
      </div>

      <div className="product-grid product-grid--shop">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ShopPage
