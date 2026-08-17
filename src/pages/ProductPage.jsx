import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'

function ProductPage() {
  const { slug } = useParams()
  const product = useMemo(
    () => products.find((item) => item.slug === slug),
    [slug],
  )

  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0]?.value ?? 'default',
  )
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] ?? '')

  const selectedColorOption =
    product?.colors?.find((color) => color.value === selectedColor) ?? null

  const activeImage = product
    ? selectedColorOption
      ? selectedColorOption.image
      : product.gallery[0]
    : '/images/placeholder.jpg'

  const buyLink =
    selectedColorOption?.stripeLink || product?.stripeLink || 'STRIPE_LINK_DEFAULT'

  if (!product) {
    return (
      <section className="product-not-found">
        <p className="eyebrow">404</p>
        <h1>Product not found.</h1>
        <Link to="/shop" className="button button--primary">
          Back to shop
        </Link>
      </section>
    )
  }

  return (
    <section className="product-page">
      <Link to="/shop" className="text-link">
        ← Back to shop
      </Link>

      <div className="product-detail">
        <div className="product-gallery">
          <div className="product-gallery__main">
            <img src={`/images/${activeImage}`} alt={product.name} />
          </div>
          <div className="product-gallery__thumbs">
            {(selectedColorOption ? [selectedColorOption.image] : product.gallery).map(
              (image, index) => (
                <button
                  key={`${product.id}-${image}-${index}`}
                  type="button"
                  className="gallery-thumb"
                  aria-label={`View product image ${index + 1}`}
                >
                  <img src={`/images/${image}`} alt={`${product.name} view ${index + 1}`} />
                </button>
              ),
            )}
          </div>
        </div>

        <div className="product-info">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-info__price">
            ${product.price} {product.currency}
          </p>
          <p className="product-info__description">{product.description}</p>

          {product.colors && (
            <div className="selector-block">
              <p className="selector-label">Color</p>
              <div className="option-list">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    className={
                      selectedColor === color.value
                        ? 'option-button option-button--active'
                        : 'option-button'
                    }
                    onClick={() => setSelectedColor(color.value)}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.sizes && (
            <div className="selector-block">
              <p className="selector-label">Size</p>
              <div className="option-list">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={
                      selectedSize === size
                        ? 'option-button option-button--active'
                        : 'option-button'
                    }
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="purchase-panel">
            <a href={buyLink} target="_blank" rel="noreferrer" className="button button--primary">
              Buy Now
            </a>
            <p className="shipping-note">Ships to Canada only • easy Stripe checkout</p>
          </div>

          <div className="product-details-copy">
            <h3>Details</h3>
            <p>{product.longDescription}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
