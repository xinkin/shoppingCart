'use client'
import React from 'react'
import { createContext, useContext } from 'react'
import useStore from './store/cart'

const CartContext = createContext(null)

const CartProvider = ({ children }) => {
  const cartStore = useStore()
  return (
    <CartContext.Provider value={cartStore}>{children}</CartContext.Provider>
  )
}
export const useCart = () => useContext(CartContext)
export default CartProvider
