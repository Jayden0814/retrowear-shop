import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (currentItem) =>
          currentItem.product.id === item.product.id &&
          currentItem.selectedColor === item.selectedColor &&
          currentItem.selectedSize === item.selectedSize,
      )

      if (existingItem) {
        return currentItems.map((currentItem) =>
          currentItem.cartItemId === existingItem.cartItemId
            ? { ...currentItem, quantity: currentItem.quantity + 1 }
            : currentItem,
        )
      }

      return [
        ...currentItems,
        {
          ...item,
          quantity: 1,
          cartItemId: `${item.product.id}-${item.selectedColor}-${item.selectedSize}-${Date.now()}`,
        },
      ]
    })
  }

  const removeFromCart = (cartItemId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.cartItemId !== cartItemId),
    )
  }

  const updateQty = (cartItemId, quantity) => {
    const parsedQuantity = Number(quantity)
    const nextQuantity = Number.isFinite(parsedQuantity)
      ? Math.min(99, Math.max(0, Math.floor(parsedQuantity)))
      : 0

    if (nextQuantity === 0) {
      removeFromCart(cartItemId)
      return
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: nextQuantity } : item,
      ),
    )
  }

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  )
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)

  const value = useMemo(
    () => ({
      cartItems,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      updateQty,
    }),
    [cartItems, cartCount, cartTotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}

export { CartProvider, useCart }
