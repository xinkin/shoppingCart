'use client'
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
const useStore = create<CartState>()((set) => ({
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  addToCart: (product) =>
    set((state) => {
      const updatedCart = [...state.cart, { ...product, id: nanoid() }]
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      return { cart: updatedCart }
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter(
        (product) => product.id !== productId,
      )
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      return { cart: updatedCart }
    }),
}))

export default useStore
