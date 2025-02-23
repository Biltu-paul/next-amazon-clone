import HomeCarousel from '@/components/shared/home/home-carousel'
import data from '@/lib/data'
import React from 'react'

const Page = () => {
  return (
      <HomeCarousel items={data.carousels} />
  )
}

export default Page
