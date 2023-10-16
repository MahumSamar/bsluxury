import React from 'react'
import { RecommendedProductsCard } from './RecommendedProductsCard'

export const RecommendedProducts = () => {
  return (
    <div className='mt-8'>
      <div className='flex items-center gap-2'>
        <div className='bg-gray-300 h-[1px] w-full'/>
        <p className='text-md lg:text-xl whitespace-nowrap font-bold'>RECOMMENDED PRODUCTS</p>
        <div className='bg-gray-300 h-[1px] w-full'/>
      </div>
      <RecommendedProductsCard />
    </div>
  )
}
