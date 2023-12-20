import React from 'react'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Loading from './Loading'
import Error from './Error'
const HomeProduct = () => {
 const { data: products, isLoading, error } = useGetProductsQuery()
 if (error) {
   return <Error message={error} />
 }

 if (isLoading) {
   return <Loading />
 }
  return (
    <div className='home-product section-center'>
      <div className="title">
       <h3>On trend</h3>
      </div>
      <div className="product-container">
       {products.map((product)=>{
        const{image,name,price}=product
        return(
         <div className="product-details">
<img src={image} alt={name} />
<p>
 {name}
</p>
<h3>
 {price}CFA
</h3>
         </div>
        )
       })}
      </div>
    </div>
  )
}

export default HomeProduct
