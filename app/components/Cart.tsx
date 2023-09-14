'use client'
import React from 'react'
import { useCart } from '../CartContext'

interface Product {
  id: string
  name: string
  description: string
  price: number
}
const Cart = () => {
  const { cart, removeFromCart } = useCart()
  const total = cart.reduce(
    (acc: number, curr: { price: number }) => acc + curr.price,
    0,
  )
  return (
    <div>
      <ul>
        {cart.map((product: Product) => (
          <li
            key={product.id}
            className="m-5 text-md flex w-full items-center font-mono"
          >
            {product.name} - ${product.price}
            <button
              className="bg-red-400 justify-center text-sm rounded-lg py-2 px-2 text-center ml-auto"
              onClick={() => removeFromCart(product.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h1 className="text-lg font-medium font-mono">Total: ${total}</h1>
    </div>
  )
}

export default Cart
