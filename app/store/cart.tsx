import { create } from 'zustand'
import { nanoid } from 'nanoid'

interface Product {
  id: string
  name: string
  description: string
  price: number
}

interface CartState {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
}

const useStore = create<CartState>((set) => {
  const initialCart =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('cart')) || []
      : []

  return {
    cart: initialCart,
    addToCart: (product) =>
      set((state) => {
        const updatedCart = [...state.cart, { ...product, id: nanoid() }]
        if (typeof window !== 'undefined') {
          localStorage.setItem('cart', JSON.stringify(updatedCart))
        }
        return { cart: updatedCart }
      }),
    removeFromCart: (productId) =>
      set((state) => {
        const updatedCart = state.cart.filter(
          (product) => product.id !== productId,
        )
        if (typeof window !== 'undefined') {
          localStorage.setItem('cart', JSON.stringify(updatedCart))
        }
        return { cart: updatedCart }
      }),
  }
})

export default useStore
