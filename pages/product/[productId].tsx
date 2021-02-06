import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter()

  const [productDetail, setProductDetail] = useState<TProduct>()

  useEffect(() => {
    window
      .fetch(`/api/avo/${productId}`)
      .then((response) => response.json())
      .then((json) => {
        setProductDetail(json)
      })
  })

  return (
    <div className="-view">
      <div>Esta es la página del producto: {productId}</div>
      <div>name: {productDetail?.name}</div>
    </div>
  )
}

export default ProductItem
