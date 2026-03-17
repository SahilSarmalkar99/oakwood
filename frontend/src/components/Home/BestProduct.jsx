import React from 'react'
import Carousel from './Carousel'

const BestProduct = () => {
  return (
    <div>
        <section className="w-full bg-[#6B4F3B] py-20 overflow-hidden">

  {/* HEADING */}
  <div className="text-center mb-16 px-4">
    <h1 className="text-4xl md:text-7xl font-semibold text-[#F5F5F5]">
      Creating Best Products
    </h1>
  </div>

  
  <div className="w-full">
    <Carousel />
  </div>

</section>
    </div>
  )
}

export default BestProduct