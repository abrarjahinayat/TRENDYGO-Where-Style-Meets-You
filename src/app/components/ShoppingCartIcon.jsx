import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ShoppingCartIcon = () => {
  return (
    <div>
        <Link className='relative' href="/cart">
        <ShoppingCart className="w-4 h-4 text-gray-600"/>
        <span className='absolute -top-2 -right-2 bg-amber-500 text-white w-4 h-4 flex items-center justify-center rounded-full'>0</span>
        </Link>
    </div>
  )
}

export default ShoppingCartIcon