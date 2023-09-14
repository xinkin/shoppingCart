'use client'
import React from 'react'
import { useCart } from '../CartContext'
const Products = ({ product }) => {
  const { addToCart } = useCart()
  return (
    <>
      <div className="text-md font-mono">
        <div>Name: {product.name}</div>
        <div>Description: {product.description}</div>
        <div>Price: ${product.price}</div>
      </div>
      <button
        className="bg-blue-400 justify-center text-sm rounded-lg py-2 px-2 text-center mt-1"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </>
  )
}

export default Products
