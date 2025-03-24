import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'
import { Badge } from "@/components/ui/badge"

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, heroImage, populatedAuthors, publishedAt, title } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  return (
    <div className="">
      <div className="">
        {heroImage && typeof heroImage !== 'string' && (
          <Media priority imgClassName="container p-0  object-cover" resource={heroImage} />
        )}
      </div>
      <div className="container pb-8">

        <div className="">

          <div className="flex flex-col md:flex-row justify-end md:gap-3 mt-4 text-lg">
            {hasAuthors && (
              <div className="flex">
                <div className="flex gap-1">
                  <p className="">Author : </p>
                  <p>{formatAuthors(populatedAuthors)}</p>
                </div>
              </div>
            )}

            {publishedAt && (
              <div className="flex gap-1">
                <p className="">Date Published : </p>
                <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
              </div>
            )}
          </div>

          <div className="">
            <h1 className="mb-2 text-3xl md:text-5xl lg:text-6xl">{title}</h1>
          </div>

          <Badge variant="outline" className="uppercase text-lg mb-2 text-black border-yellow-500 hover:bg-yellow-500 hover:text-white">
            {categories?.map((category, index) => {
              if (typeof category === 'object' && category !== null) {
                const { title: categoryTitle } = category

                const titleToUse = categoryTitle || 'Untitled category'

                const isLast = index === categories.length - 1

                return (
                  <React.Fragment key={index}>
                    {titleToUse}
                    {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                  </React.Fragment>
                )
              }
              return null
            })}
          </Badge>
        </div>
      </div>
    </div>
  )
}
