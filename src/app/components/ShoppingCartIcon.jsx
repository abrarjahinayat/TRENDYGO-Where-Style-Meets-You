"use client"
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const ShoppingCartIcon = () => {
  const {cartItems} = useSelector(state => state.cart)
  return (
    <div>
        <Link className='relative' href="/cart">
        <ShoppingCart className="w-4 h-4 text-gray-600"/>
        <span className='absolute -top-2 -right-2 bg-amber-500 text-white w-4 h-4 flex items-center justify-center rounded-full'>{cartItems.length}</span>
        </Link>
    </div>
  ) 
}

export default ShoppingCartIcon