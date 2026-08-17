import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const coverImage = product.gallery[0]

  return (
    <article className="product-card">
      <div className="product-card__media">
        <img src={`/images/${coverImage}`} alt={product.name} />
      </div>
      <div className="product-card__content">
        <p className="eyebrow eyebrow--small">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-card__price">
          ${product.price} {product.currency}
        </p>
        <Link to={`/product/${product.slug}`} className="button button--secondary">
          View Product
        </Link>
      </div>
    </article>
  )
}

export default ProductCard
