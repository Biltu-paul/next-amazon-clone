'use client'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const HomeCarousel = ({items}:{
  items:{
    image:string,
    url:string,
    title:string,
    buttonCaption:string
  }[]
}) => {

  const pluging = React.useRef(
    Autoplay({delay:3000, stopOnInteraction: true})
  );

  return (
    <Carousel 
      dir='ltr'
      plugins={[pluging.current]}
      className='w-full mx-auto'
      onMouseEnter={pluging.current.stop}
      onMouseDownCapture={pluging.current.reset}
      >
      <CarouselContent>
        {
          items?.map((item)=>(
            <CarouselItem key={item.title}>
              <Link href={item.url}>
              <div className='flex aspect-[16/6] items-center justify-center p-6 relative -m-1'>
              <Image src={item.image} fill alt={item.title} className='object-cover' priority/>
              <div className='absolute w-1/3 left-16 md:left-32 top-1/2 transform -translate-y-1/2  '>
                <h2 className='text-xl md:text-6xl font-bold mb-4 text-primary'>
                  {item.title}
                </h2>
                <Button className='hidden md:block'>
                  {item.buttonCaption}
                </Button>
              </div>
              </div>
              </Link>
             
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious className='left-0 md:left-12' />
      <CarouselNext className='right-0 md:right-12' />
    </Carousel>
  )
}

export default HomeCarousel
