import ProductList from '@/app/components/ProductList'
import React from 'react'

const ProductsPage = ({searchParams}) => {
  const category = searchParams.category
  return (
    <div>
      <ProductList category={category} params="products"/>
    </div>
  )
}

export default ProductsPage