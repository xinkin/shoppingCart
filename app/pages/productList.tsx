import React from 'react'
import Products from '../components/Products'
import Cart from '../components/Cart'

interface Product {
  id: number
  name: string
  description: string
  price: number
}

const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Product 1 description',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Product 2 description',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Product 3 description',
    price: 300,
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Product 4 description',
    price: 400,
  },
]

const ProductList = () => {
  const productList = products.map((product) => (
    <>
      <div className="p-3">
        <Products key={product.id} product={product} />
      </div>
    </>
  ))

  return (
    <>
      <div className="flex pt-10 h-screen overflow-auto bg-gray-900 text-white">
        <div className="flex flex-col items-center w-3/4 p-8">
          <div className="font-semibold text-2xl mb-5">Product List</div>
          {productList}
        </div>
        <div className="flex flex-col items-center w-3/4 p-8">
          <div className="font-semibold text-2xl mb-5">Shopping Cart</div>
          <Cart />
        </div>
      </div>
    </>
  )
}

export default ProductList
