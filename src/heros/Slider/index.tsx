'use client'

import { Page } from '@/payload-types'
import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'

export const SliderHero: React.FC<Page['hero']> = ({ silderMedia }) => {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false }))

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[plugin.current]}
    >
      <CarouselContent>
        {silderMedia?.map((items, index) => (
          <CarouselItem key={index} className="relative">
            <Image
              className="w-full h-[177px] md:h-[352px] lg:h-[484px] xl:h-[680px] object-fill"
              width={100}
              height={680}
              src={
                typeof items.mediaSilder === 'object'
                  ? items.mediaSilder?.url
                  : `/api/media/${items.mediaSilder}`
              }
              alt={items.silderHeader || ''}
            />
            <Link
              href={
                items.sliderReference === 'reference'
                  ? `/${items.referenceSilderLink?.relationTo}/${items.referenceSilderLink?.value?.slug}`
                  : items.Customurl || '#'
              }
            >
              <div className="absolute left-4 inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent">
                <div className="absolute bottom-2 lg:bottom-4 mx-5 md:mx-8 lg:mx-[70px] xl:mx-[100px] text-white">
                  <h2 className="font-semibold text-lg md:text-4xl lg:text-5xl xl:text-6xl lg:mb-4">
                    {items.silderHeader}
                  </h2>
                  <p className="font-medium text-xs md:text-lg lg:text-2xl xl:text-3xl">
                    {items.silderSubheader}
                  </p>

                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
