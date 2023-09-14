import React from 'react'
import ProductList from './pages/productList'
import CartProvider from './CartContext'
const page = () => {
  return (
    <CartProvider>
      <ProductList />
    </CartProvider>
  )
}

export default page
