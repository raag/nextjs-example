import React from 'react'
import { useRouter } from 'next/router'

export const ProductItem = (props) => {
    const {
        query: {productId},
    } = useRouter()
    return (
       <div className='-view'>
           Esta es la página del producto: {productId} 
       </div>
    )
}

export default ProductItem