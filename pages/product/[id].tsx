import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar/Navbar'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct | null>(null)
  const { query } = useRouter()
  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data: TProduct) => {
          setProduct(data)
        })
    }
  }, [query.id])
  return (
    <section>
      <Navbar />
      <h1>Product page: </h1>
      <div>{product?.name}</div>
    </section>
  )
}

export default ProductPage
